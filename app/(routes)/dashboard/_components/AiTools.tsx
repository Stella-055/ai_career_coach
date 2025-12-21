 const aitools=[


    {
        name:"AI Career Q&A Chatbot",
        desc:"Ask career questions",
        icon:"/chatbot.png",
        button :"Lets chat",
        path:"/ai-chat"
    },
    {
      name:"AI Resume Analyzer",
      desc:"Improve your resume",
      icon:"/resume.png",
      button :"Analyze Resume",
      path:"/ai-resume"
  },
  {
    name:"Career Roadmap Generator",
    desc:"Build your career roadmap",
    icon:"/roadmap.png",
    button :"Generate Roadmap",
    path:"/ai-roadmap"
},
{
  name:"Cover Letter Generator",
  desc:"Write a cover letter",
  icon:"/cover.png",
  button :"Generate Letter",
  path:"/ai-coverletter"
}
 ]

const AiTools = () => {
  return (
    <div className='p-5 bg-white rounded-lg shadow-md mx-6 mt-6'>
      <h2 className=' font-bold'>Available Ai Tools</h2>
      <p>Start building the start of your career with these exclusive tools</p>

      
    </div>
  )
}

export default AiTools
