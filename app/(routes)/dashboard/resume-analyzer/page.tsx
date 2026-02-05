import { useEffect,useState } from "react"
import axios from "axios"
import { useParams } from "next/navigation"
const page = () => {
const [pdfurl,setPdfurl]=useState("")
const{recordId}=useParams()
const [airesponse, setAiresponse]=useState()
     useEffect(()=>{
    
    
        const fetchContent= async ()=>{
         const result= await axios.get(`/api/history?recordId=${recordId}`)
         if(result.data.length >0){
          setPdfurl(result.data.cloudpdfurl)
          setAiresponse(result.data.content)
         }
        }
        fetchContent()
          },[])
  return (
    <>
      <div class="flex justify-between items-center mb-6">
  <h2 class="text-3xl font-extrabold text-gray-800 gradient-component-text">AI Analysis Results</h2>
  <button type="button" class="text-gray-500 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 gradient-button-bg text-white shadow-lg">
    Re-analyze <i class="fa-solid fa-sync ml-2"></i>
  </button>
</div>

<div class="bg-white rounded-lg shadow-md p-6 mb-6 border border-blue-200 transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
  <h3 class="text-xl font-bold text-gray-700 mb-4 flex items-center">
    <i class="fas fa-star text-yellow-500 mr-2"></i> Overall Score
  </h3>
  <div class="flex items-center justify-between mb-4">
    <span class="text-6xl font-extrabold text-blue-600">85<span class="text-2xl">/100</span></span>
    <div class="flex items-center">
      <i class="fas fa-arrow-up text-green-500 text-lg mr-2"></i>
      <span class="text-green-500 text-lg font-bold">Excellent!</span>
    </div>
  </div>
  <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
    <div class="bg-blue-600 h-2.5 rounded-full" style="width: 85%"></div>
  </div>
  <p class="text-gray-600 text-sm">Your resume is strong, but there are areas to refine. </p>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
  <div class="bg-white rounded-lg shadow-md p-5 border border-green-200 relative overflow-hidden group">
    <h4 class="text-lg font-semibold text-gray-700 mb-3"><i class="fas fa-user-circle text-gray-500 mr-2"></i> Contact Info</h4>
    <span class="text-4xl font-bold highlight-text">95%</span>
    <p class="text-sm text-gray-600 mt-2">Perfectly structured and complete.</p>
    <div class="absolute inset-x-0 bottom-0 h-1 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
  <div class="bg-white rounded-lg shadow-md p-5 border border-green-200 relative overflow-hidden group">
    <h4 class="text-lg font-semibold text-gray-700 mb-3"><i class="fas fa-briefcase text-gray-500 mr-2"></i> Experience</h4>
    <span class="text-4xl font-bold highlight-text">88%</span>
    <p class="text-sm text-gray-600 mt-2">Strong bullet points and impact.</p>
    <div class="absolute inset-x-0 bottom-0 h-1 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
  </div>
<div class="bg-white rounded-lg shadow-md p-5 border border-yellow-200 relative overflow-hidden group">
    <h4 class="text-lg font-semibold text-gray-700 mb-3"><i class="fas fa-graduation-cap text-gray-500 mr-2"></i> Education</h4>
    <span class="text-4xl font-bold warning-text">70%</span>
    <p class="text-sm text-gray-600 mt-2">Consider adding relevant coursework.</p>
    <div class="absolute inset-x-0 bottom-0 h-1 bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div class="bg-white rounded-lg shadow-md p-5 border border-red-200 relative overflow-hidden group">
    <h4 class="text-lg font-semibold text-gray-700 mb-3"><i class="fas fa-lightbulb text-gray-500 mr-2"></i> Skills</h4>
    <span class="text-4xl font-bold danger-text">60%</span>
    <p class="text-sm text-gray-600 mt-2">Expand on specific skill proficiencies.</p>
    <div class="absolute inset-x-0 bottom-0 h-1 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>

<div class="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200">
    <h3 class="text-xl font-bold text-gray-700 mb-4 flex items-center">
        <i class="fas fa-lightbulb text-orange-400 mr-2"></i> Tips for Improvement
    </h3>
    <ol class="list-none space-y-4">
        <li class="flex items-start">
            <span class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-3"><i class="fas fa-check"></i></span>
            <div>
                <p class="font-semibold text-gray-800">Quantify Achievements:</p>
                <p class="text-gray-600 text-sm">Add more numbers and metrics to your experience section to show impact.</p>
            </div>
        </li>
        <li class="flex items-start">
            <span class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-3"><i class="fas fa-check"></i></span>
            <div>
                <p class="font-semibold text-gray-800">Keywords Optimization:</p>
                <p class="text-gray-600 text-sm">Integrate more industry-specific keywords relevant to your target roles.</p>
            </div>
        </li>
        <li class="flex items-start">
            <span class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-3"><i class="fas fa-check"></i></span>
            <div>
                <p class="font-semibold text-gray-800">Action Verbs:</p>
                <p class="text-gray-600 text-sm">Start bullet points with strong action verbs to make your achievements stand out.</p>
            </div>
        </li>
    </ol>
</div>


<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <div class="bg-white rounded-lg shadow-md p-5 border border-green-200">
        <h3 class="text-lg font-bold text-gray-700 mb-3 flex items-center">
            <i class="fas fa-hand-thumbs-up text-green-500 mr-2"></i> What's Good
        </h3>
        <ul class="list-disc list-inside text-gray-600 text-sm space-y-2">
            <li>Clean and professional formatting.</li>
            <li>Clear and concise contact information.</li>
            <li>Relevant work experience.</li>
        </ul>
    </div>
    <div class="bg-white rounded-lg shadow-md p-5 border border-red-200">
        <h3 class="text-lg font-bold text-gray-700 mb-3 flex items-center">
            <i class="fas fa-hand-thumbs-down text-red-500 mr-2"></i> Needs Improvement
        </h3>
        <ul class="list-disc list-inside text-gray-600 text-sm space-y-2">
            <li>Skills section lacks detail.</li>
            <li>Some experience bullet points could be stronger.</li>
            <li>Missing a professional summary/objective.</li>
        </ul>
    </div>
</div>


<div class="bg-blue-600 text-white rounded-lg shadow-md p-6 mb-6 text-center gradient-button-bg">
    <h3 class="text-2xl font-bold mb-3">Ready to refine your resume? 💪</h3>
    <p class="text-base mb-4">Make your application stand out with our premium insights and features.</p>
    <button type="button" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-blue-600 bg-white hover:bg-gray-100 focus:outline-n">
        Upgrade to Premium <i class="fas fa-arrow-right ml-2 text-blue-600"></i>
    </button>
</div>
    </>
  )
}

export default page
