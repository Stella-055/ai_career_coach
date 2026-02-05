import { NextRequest } from "next/server";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf"
import { inngest } from "@/inngest/client";

import { getRuns } from "../aicareer-chat-agent/route";


export async function POST(req:NextRequest){
    try {
        const data = await req.formData()
        const resumeFile:any= data.get("resumeFile")
        if(!resumeFile){
            return
        }
        const recordId= data.get("recordId")
        const loader = new PDFLoader(resumeFile)
        const docs= await loader.load()
        const arrayBuffer= await resumeFile.arrayBuffer()
        const base = Buffer.from(arrayBuffer).toString("base64")

        const resultIds= await inngest.send({
            name:"aicareeragent",
            data:{
                resumeFile:resumeFile,
                base64resumeFile:base,
                pdfText:docs[0]?.pageContent
            }
         })
         let resStatus
         while(true){
            resStatus= await getRuns(resultIds.ids[0])
            if(resStatus[0].status==="Completed"){
                break;
            }
            await new Promise((resolve, reject) => {
                setTimeout(resolve,500)
            })
         }
    } catch (error) {
        
    }
 

}