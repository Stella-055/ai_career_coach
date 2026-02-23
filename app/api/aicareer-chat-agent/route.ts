import { inngest } from "@/inngest/client";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
export async function POST(req:NextRequest){
 const{userInput}= await req.json()
 const resultIds= await inngest.send({
    name:"aicareeragent",
    data:{
        userInput:userInput
    }
 })
 console.log(resultIds)
 let resStatus
 while(true){
    resStatus= await getRuns(resultIds.ids[0])
    console.log(resStatus)
    if(resStatus[0].status==="Completed"){
        break;
    }
    await new Promise((resolve, reject) => {
        setTimeout(resolve,500)
    })
 }
 return NextResponse.json(resStatus.data[0].output.output[0])

}
 export async function getRuns(resultIds:string){
    const response = await fetch(`${process.env.INNGEST_PORT_NAME}/v1/events/${resultIds}/runs`, {
        headers: {
          Authorization: `Bearer ${process.env.INNGEST_SIGNING_KEY}`,
        },
      });
      const json = await response.json();
      return json.data;
 }