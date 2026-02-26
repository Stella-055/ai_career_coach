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
        const resultIds= await inngest.send({
                    name:"airoadmapagent",
                    data:{
                        userInput:userInput,
                        recordmapId:roadmapId,
                        useremail:user?.primaryEmailAddress?.emailAddress,
                    }
                 })
                 let resStatus
                 while(true){
                    resStatus= await getRuns(resultIds.ids[0])
                    if(resStatus[0].Status==="Completed"){
                        break;
                    }
                    await new Promise((resolve, reject) => {
                        setTimeout(resolve,500)
                    })
                 }
        
                  return NextResponse.json(resStatus.data[0].output.output[0])
    } catch (error) {
        return NextResponse.json(error)
    }
}