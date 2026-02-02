
 import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link'; 

const aitools=[


    {
        name:"AI Career Q&A Chatbot",
        desc:"Ask career questions",
        icon:"/chatbot.png",
        button :"Lets chat",
        path:"/dashboard/ai-tools/ai-chat"
    },
    {
      name:"AI Resume Analyzer",
      desc:"Improve your resume",
      icon:"/resume.png",
      button :"Analyze Resume",
      path:"/dashboard/ai-tools/ai-resume"
  },
  {
    name:"Career Roadmap Generator",
    desc:"Build your career roadmap",
    icon:"/roadmap.png",
    button :"Generate Roadmap",
    path:"/dashboard/ai-tools/ai-roadmap"
},
{
  name:"Cover Letter Generator",
  desc:"Write a cover letter",
  icon:"/cover.png",
  button :"Generate Letter",
  path:"/dashboard/ai-tools/ai-coverletter"
}
 ]

const AiTools = () => {
  
 
  
  return (
    <div className='p-5 bg-white rounded-lg shadow-md mx-6 mt-6'>
      <h2 className=' font-bold'>Available Ai Tools</h2>
      <p>Start building the start of your career with these exclusive tools</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
     { aitools.map((tool,index)=>(

      <div className=' p-4 border rounded-lg flex flex-col items-center text-center space-y-2' key={index}>
<Image   
src={tool.icon}
alt={tool.name}
width={50}
height={50}

/>

<h3 className=' font-semibold'>{tool.name}</h3>
<p>{tool.desc}</p>
<Button variant={"secondary"}  className='text-black' asChild>
      <Link href={tool.path}>
      {tool.button}
      </Link>
    </Button>


      </div>
     ))}
</div>
    </div>
  )
}

export default AiTools
