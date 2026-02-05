"use client"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  
  } from "@/components/ui/alert-dialog"
  import React, { ChangeEvent } from 'react';
  import { useState } from "react";
  import { v4 as uuid } from "uuid";
import { File, Sparkles } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
const ResumeUploadDialog = ({open,setDialogOpen}:{open:boolean;setDialogOpen:any}) => {

    const[file, setFile]=useState<any>()

     async function upload(){
    if(!file){
        toast.error("upload Resume")
        return
    }

    const recordId = uuid()
    const formData= new FormData()
    formData.append("recordId",recordId)
    formData.append("resumeFile",file)
    const results= await axios.post("/api/ai-resume-agent",
    formData,
    )
    }
  return (
    <AlertDialog open={open} onOpenChange={setDialogOpen}>
    <AlertDialogContent >
      <AlertDialogHeader>
        <AlertDialogTitle>Upload Resume pdf file</AlertDialogTitle>
        <AlertDialogDescription>
         <div>
            <label htmlFor="dialogform" className="flex items-center flex-col cursor-pointer justify-center p-7 rounded-xl border border-dashed">
                <File className="h-10 w-10"/>
                {file?<h2 className="mt-3 text-blue-600">{file.name}</h2>:  <h2 className="mt-3">Click here to upload PDF file</h2>}
              
            </label>
            <input type="file" accept="application/pdf" id="dialogform" className="opacity-0" onChange={(event:ChangeEvent<HTMLInputElement>)=>{
            const file = event.target.files?.[0]
            if (file){
                setFile(file)
            }

            }}/>
         </div>
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={upload}> <Sparkles/>Upload & analyze</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  )
}

export default ResumeUploadDialog
