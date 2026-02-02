

const Aichat = ({selectedQuestion}:any) => {
  const text1="What skills do I need for a data analyst role? "
  const text2="How do I switch careers to UX design?"
  return (
    < div className="p-5 bg-white mx-6 gap-1 flex  flex-col justify-center mt-6 items-center">
      <h2 className=" font-bold">Ask anything to AI career Agent</h2>
     
        
        <h3 onClick={()=>selectedQuestion(text1)} className=" p-2 border cursor-pointer w-full flex justify-center hover:border-primary"> {text1}</h3>
      <h3  onClick={()=>selectedQuestion(text2)}className="p-2 border cursor-pointer w-full flex justify-center hover:border-primary ">{text2}</h3>
    </div>
  )
}

export default Aichat
