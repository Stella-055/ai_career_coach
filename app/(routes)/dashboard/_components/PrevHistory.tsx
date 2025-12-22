import { Button } from "@/components/ui/button"
import { Link } from "lucide-react"
import Image from "next/image"
const PrevHistory = () => {
  return (
    <div className='p-5 bg-white rounded-lg shadow-md mx-6 mt-6'>
        <h3 className="font-bold">Previous History</h3>
        <p>What Your previously work on, You can find here</p>
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


      </div>
      
    </div>
  )
}

export default PrevHistory
