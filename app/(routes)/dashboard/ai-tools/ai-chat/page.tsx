"use client"
import { Button } from '@/components/ui/button';
import Aichat from '../../_components/Aichat';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';

const page = () => {
  const [userInput ,setUserInput]=useState<string>()
  const [loading , setLoading]=useState(false)
  const sendChat= async()=>{
    setLoading(true)
    try {
      const result= await axios.post("/api/aicareer-chat-agent",{
        userInput:userInput
      })
      setLoading(false)
    } catch (error) {
      toast.error(`${error}|| something went wrong`)
      setLoading(false)
    }

   
  }
  return (
    <div className='px-24 '>
    
        <div  className='flex justify-between '>
          <div className=' flex flex-col'>
          <h2 className='font-bold text-lg'>AI Career Q/A Chat</h2>
          <p>Smarter career decisions start here — get tailored advice, real-time market insights</p>
          </div>
            
            <div className="flex justify-end items-end">
           
            <Button>New chat</Button>
            </div> 
        </div>
<div className='flex flex-col h-[75vh]'>

        <div> <Aichat  selectedQuestion= { (question:string)=>setUserInput(question)}/> </div>
        <div className='flex-1'></div>
        <div className='flex items-center gap-6 justify-center '>
          <Input placeholder='Type here' className='shadow-none' value={userInput}  onChange={(event)=>setUserInput(event?.target.value)}/>
        <Button onClick={sendChat} disabled={loading}>
        <Send/>
        </Button>

        </div>
      
    </div> </div>
  )
}

export default page
