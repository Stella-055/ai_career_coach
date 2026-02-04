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
import { File, FileIcon, Sparkles } from "lucide-react";
const ResumeUploadDialog = ({open,setDialogOpen}:{open:boolean;setDialogOpen:any}) => {
  return (
    <AlertDialog open={open} onOpenChange={setDialogOpen}>
    <AlertDialogContent >
      <AlertDialogHeader>
        <AlertDialogTitle>Upload Resume pdf file</AlertDialogTitle>
        <AlertDialogDescription>
         <div>
            <label htmlFor="dialogform" className="flex items-center flex-col cursor-pointer justify-center p-7 rounded-xl border border-dashed">
                <File className="h-10 w-10"/>
                <h2 className="mt-3">Click here to upload PDF file</h2>
            </label>
            <input type="file" id="dialogform" className="opacity-0"/>
         </div>
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction> <Sparkles/>Upload & analyze</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  )
}

export default ResumeUploadDialog
