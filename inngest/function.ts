import { inngest } from "./client";
import { imagekit } from "@/lib/imagekit";
import { db } from "@/configs/db";
import { userHistory } from "@/configs/schema";
import {
    createAgent,
    gemini,
  } from "@inngest/agent-kit";


 const AiCareerChatAgent= createAgent({
    name: "AiCareerChatAgent",
  system: "You are a helpful, professional AI Career Coach Agent. Your role is to guide users with questions related to careers, including job search advice, interview preparation, resume improvement, skill development, career transitions, and industry trends. Always respond with clarity, encouragement, and actionable advice tailored to the user's needs. If the user asks something unrelated to careers (e.g., topics like health, relationships, coding help, or general trivia), gently inform them that you are a career coach and suggest relevant career-focused questions instead.",
  model:gemini({model:"gemini-3-flash-preview",
    apiKey:process.env?.GEMINI_API
  })
})


const AiResumeAnalyzerAgent= createAgent({
  name: "AiResumeAnalyzerAgent",
system: `You are an advanced AI Resume Analyzer Agent. Your task is to evaluate a candidate's resume and return a detailed analysis in the following structured JSON schema format. The schema must match the layout and structure of a visual UI that includes overall score, section scores, summary feedback, improvement tips, strengths, and weaknesses.

📥 INPUT: I will provide a plain text resume.
 🎯 GOAL: Output a JSON report as per the schema below.The report should reflect:
overall_score (0–100)
overall_feedback (short message e.g., "Excellent", "Needs improvement")
summary_comment (1–2 sentence evaluation summary)
Section scores for:
Contact Info
Experience
Education
Skills
Each section should include:
score (as percentage)
Optional comment about that section
Tips for improvement (3–5 tips)
What's Good (1–3 strengths)
Needs Improvement (1–3 weaknesses)
🧠 Output JSON Schema: json Copy Edit { "overall_score": 85, "overall_feedback": "Excellent!", "summary_comment": "Your resume is strong, but there are areas to refine.", "sections": { "contact_info": { "score": 95, "comment": "Perfectly structured and complete." }, "experience": { "score": 88, "comment": "Strong bullet points and impact." }, "education": { "score": 70, "comment": "Consider adding relevant coursework." }, "skills": { "score": 60, "comment": "Expand on specific skill proficiencies." } }, "tips_for_improvement": [ "Add more numbers and metrics to your experience section to show impact.", "Integrate more industry-specific keywords relevant to your target roles.", "Start bullet points with strong action verbs to make your achievements stand out." ], "whats_good": [ "Clean and professional formatting.", "Clear and concise contact information.", "Relevant work experience." ], "needs_improvement": [ "Skills section lacks detail.", "Some experience bullet points could be stronger.", "Missing a professional summary/objective." ] }`,
model:gemini({model:"gemini-3-flash-preview",
  apiKey:process.env?.GEMINI_API
})
})

export const AiCareerAgent = inngest.createFunction(
    { id: "aicareeragent" },
    { event: "aicareeragent" },
    async ({ event, step }) => {
        const{userInput}=  await event.data
     const results= await AiCareerChatAgent.run(userInput)
      return results;
    },
  );

  export const AiResumeAgent = inngest.createFunction(
    { id: "airesumeagent" },
    { event: "airesumeagent" },
    async ({ event, step }) => {
        const{base64resumeFile,pdfText,recordId,useremail}=  await event.data
        const uploadurl= await step.run("uploadImage", async()=>{
          const imagekitfile= await imagekit.upload({
            file:base64resumeFile,
            fileName:`${Date.now()}.pdf`,
            isPublished:true
          })
          return imagekitfile.url
        })
     const results= await AiResumeAnalyzerAgent.run(pdfText)
     //@ts-ignore
     const reportOutput= results.output[0].content
     const json=reportOutput.replace('```json','').replace('```','')

const parsedJson=JSON.parse(json);
     await step.run("uploadtoDb",async()=>{
const result= await db.insert(userHistory).values({

        recordId:recordId,
        content:parsedJson,
        useremail:useremail,
        createdAt:(new Date()).toString()
    })
     })
      return parsedJson;
    },
  );