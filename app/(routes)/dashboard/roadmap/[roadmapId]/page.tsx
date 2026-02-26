"use client"
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { useEffect,useState } from 'react'
import { useParams } from 'next/navigation'

const page = () => {
    const {recordId}= useParams()
   
    const [airesponse, setAiresponse]=useState<any>()
    useEffect(()=>{
    
    
        const fetchContent= async ()=>{
         const result= await axios.get(`/api/history?recordId=${recordId}`)
         if(result.data){
         
          setAiresponse(result.data.content)
         }
        }
        fetchContent()
          },[recordId])
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        <div className='border p-5 rounded-lg'>
            <h2 className='font-bold text-2xl'>{airesponse?.roadmapTitle}</h2>
            <p className='mt-3 text-gray-500'> <strong>Description</strong><br />{airesponse?.description}</p>
            <h2 className='mt-5 font-medium'>Duration: {airesponse?.duration}</h2>
            <Button className='w-full mt-5'>+create new Roadmap</Button>
        </div>
        <div className='md:grid-cols-2'></div>
    </div>
  )
}

export default page