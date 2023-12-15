import { NextResponse } from "next/server";

type FeedbackType = {
  name?: string;
  email?: string;
  message?: string;
};

export async function GET() {
  return NextResponse.json({ data: "Feedback ! " });
}

export async function POST(request: Request) {
  const data: FeedbackType = await request.json();
  console.log("data = ", data);

  return Response.json({ ...data });
}
