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
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import { SparkleIcon } from "lucide-react";

const RoadmapDialog = ({roadmap,setRoadmapDialogOpen}:{roadmap:boolean;setRoadmapDialogOpen:any}) => {
  return (
    <AlertDialog  open={roadmap} onOpenChange={setRoadmapDialogOpen}>
      
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Enter position/skills to generate Roadmap</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="w-full  ">
                <input className="border rounded-md w-full p-1.5" type="text" placeholder="Eg.Fullstack developer" />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction><SparkleIcon/>Generate</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default RoadmapDialog
