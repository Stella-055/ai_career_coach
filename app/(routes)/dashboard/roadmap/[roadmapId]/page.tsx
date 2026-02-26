"use client"
import axios from 'axios'
import React from 'react'
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
        <div>
            <h2 className='font-bold text-2xl'>{airesponse?.roadmapTitle}</h2>
            <p className='mt-3 text-gray-500'> <strong>Description</strong><br />{airesponse?.description}</p>
        </div>
        <div className='md:grid-cols-2'></div>
    </div>
  )
}

export default page