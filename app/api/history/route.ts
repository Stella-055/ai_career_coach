import { NextRequest, NextResponse, userAgent } from "next/server";
import { db } from "@/configs/db";
import { userHistory } from "@/configs/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
export async  function POST(req:NextRequest){
    const{content, requestId}= await req.json()
    const user = await  currentUser()
try {
    const result= await db.insert(userHistory).values({

        recordId:requestId,
        content:content,
        useremail:user?.primaryEmailAddress?.emailAddress,
        createdAt:(new Date()).toString()
    })
    return NextResponse.json(result)
} catch (error) {
    return NextResponse.json(error)
}

}

export async  function PUT(req:NextRequest){
    const{content,requestId}= await req.json()
 
try {
    const result= await db.update(userHistory).set({
        content:content,
      
    }).where(eq(userHistory.recordId,requestId))
    return NextResponse.json(result)
} catch (error) {
    return NextResponse.json(error)
}

}

export async  function GET(req:NextRequest){

    const {searchParams}= new URL (req.url)
    const recordId= searchParams.get("recordId")
try {
    if(recordId){
        const result= await db.select().from(userHistory).where(eq(userHistory.recordId,recordId))
        return NextResponse.json(result[0])
    }
   else   return NextResponse.json({})
} catch (error) {
    return NextResponse.json(error)
}

}