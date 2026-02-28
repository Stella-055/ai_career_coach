import { getRuns } from "../aicareer-chat-agent/route";
import { NextResponse,NextRequest } from "next/server";
import { inngest } from "@/inngest/client";

import { currentUser } from '@clerk/nextjs/server';
export async function POST(req:NextRequest){
    try {
        const{userInput,roadmapId}= await req.json()
        if(!userInput || !roadmapId){
            return NextResponse.json({error:"Missing userInput or roadmapId"})
        }
          const user = await  currentUser()
        const result= await inngest.send({
                    name:"airoadmapagent",
                    data:{
                        userInput:userInput,
                        recordmapId:roadmapId,
                        useremail:user?.primaryEmailAddress?.emailAddress,
                    }
                 })
                 const eventId = result.ids?.[0];
    if (!eventId) {
      throw new Error("No event ID returned");
    }

    let runs: any[] = [];
    let attempts = 0;
    const maxAttempts = 120; // ~60 seconds

    while (attempts < maxAttempts) {
      runs = await getRuns(eventId);

      if (runs.length > 0) {
        const status = runs[0].status;
        console.log("Run status:", status);

        if (status === "Completed") {
          break;
        }
        if (status === "Failed" || status === "Cancelled") {
          throw new Error(`Function run ${status.toLowerCase()}`);
        }
      }

      await new Promise((r) => setTimeout(r, 500));
      attempts++;
    }

    if (runs.length === 0) {
      return NextResponse.json(
        { error: "No runs found after waiting — check Inngest dashboard or logs" },
        { status: 504 }
      );
    }

    if (runs[0].status !== "Completed") {
      return NextResponse.json(
        { error: `Run ended in ${runs[0].status}` },
        { status: 500 }
      );
    }
    const finalOutput = runs[0].output?.output?.[0] ?? runs[0].output ?? null;

     return NextResponse.json(finalOutput)
    } catch (error) {
        return NextResponse.json(error)
    }
}