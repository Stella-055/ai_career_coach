import { Button } from "@/components/ui/button"
import axios from "axios"
import { Link } from "lucide-react"
import Image from "next/image"
import { useEffect,useState } from "react"
import { aitools } from "./AiTools"
const PrevHistory = () => {
const [history,setHistory]=useState<any>([])
  useEffect(()=>{
   const fetchHistory= async()=>{
    const result= await axios.get("/api/history")
   if(result.data){
    setHistory(result.data)
   }
   fetchHistory()}
  },[])
  const getAgent=  (H:string)=>{
let agent =aitools.find((data)=>{data.name== H})
return agent
  }
  return (
    <div className='p-5 bg-white rounded-lg shadow-md mx-6 mt-6'>
        <h3 className="font-bold">Previous History</h3>
        <p>What Your previously work on, You can find here</p>
        <div className="mt-4 flex justify-center items-center">

          {history.length== 0?
        <div className='  w-60 p-4 border rounded-lg flex flex-col items-center text-center space-y-2' >
       <Image   
src="/pic.png"
alt="icon"
width={90}
height={50}

/>


<p>You do Not Have any history</p>
<Button variant={"default"}  className='text-white w-40' >
    start now  </Button>


      </div>:
      <div>
        {history.map((h:any,index:number)=>{
<div key={index} className="flex justify-between my-3 items-center border p-3 rounded-lg ">
  <Link href={getAgent(h.agentType)?.path+h.recordId}>
  <div>
<Image   
src={getAgent(h.agentType)?.icon || ""}
alt="icon"
width={20}
height={20}

/>
  <h2>{getAgent(h.agentType)?.name}</h2> </div>
  <div>
  <h2>{h.createdAt}</h2>
  </div></Link>
</div>
        })}
      </div>
      
      
      }
      </div>
    </div>
  )
}

export default PrevHistory
