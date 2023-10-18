import { NextRequest, NextResponse } from "next/server";
import { z, ZodError } from "zod";
import prisma from "@/prisma/client";
// Create a PrismaClient instance to connect to your database

// Define a schema for validation using Zod
const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
  // you can define more fields here with validation as needed
});

export async function POST(request: NextRequest) {
    // Parse the request body to get the incoming fields
    const body = await request.json();

    // Validate the data against the schema
    const validated = createIssueSchema.safeParse(body);

    if (!validated.success){
        return NextResponse.json(validated.error.errors, { status: 400 });
    } 
    console.log(body);
    const newIssue = await prisma.issue.create({
        data: {
            title: body.title,
            description: body.description,
        },
    });
    return NextResponse.json(newIssue , { status: 201 });  
}

// test json raw data
// {
//     "title": "test",
//     "description": "test"
// }