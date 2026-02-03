import { NextRequest, NextResponse } from "next/server";
import { db } from "@/configs/db";
import { userHistory } from "@/configs/schema";
import { currentUser } from "@clerk/nextjs/server";
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