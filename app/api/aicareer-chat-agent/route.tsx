import { inngest } from "@/inngest/client";
import request;
export async function POST(req:any){
 const{userInput}= await req.json()
 const resultIds= await inngest.send({
    name:"aicareeragent",
    data:{
        userInput:userInput
    }
 })

}
