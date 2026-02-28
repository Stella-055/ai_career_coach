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
 import axios from "axios"
import { SparkleIcon ,Loader2Icon} from "lucide-react";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
const RoadmapDialog = ({roadmap,setRoadmapDialogOpen}:{roadmap:boolean;setRoadmapDialogOpen:any}) => {
const [roadmapInput,setRoadmapInput]=useState("")
const [loading,setLoading]=useState(false)
const router= useRouter()
  const getRoadmap= async()=>{
    setLoading(true)
    const roadmapId= uuidv4()
    const result= await axios.post("/api/ai-roadmap-agent",{
      userInput:roadmapInput,
      roadmapId:roadmapId
    })
    if(result.data.error){
      toast.error(result.data.error)
      setLoading(false)
      return
    }

   console.log(result.data)
   setLoading(false)
 router.push(`/dashboard/roadmap/${roadmapId}`)
  }
  return (
    <AlertDialog  open={roadmap} onOpenChange={setRoadmapDialogOpen}>
      
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Enter position/skills to generate Roadmap</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="w-full  ">
                <input className="border rounded-md w-full p-1.5" type="text" placeholder="Eg.Fullstack developer" onChange={(e)=>{
                  setRoadmapInput(e.target.value)
                }} />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={loading|| !roadmapInput} onClick={getRoadmap}> {loading? <Loader2Icon className="animate-spin"/>:<SparkleIcon/>}Generate</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default RoadmapDialog
