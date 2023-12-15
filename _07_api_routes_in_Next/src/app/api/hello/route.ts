// // dynamically evaluated route because of request Object
// export async function GET(request: Request) {
//   return new Response("Hello Next.js !");
// }

//----------------------------------------------------------------
// // Static Route Handler
// export async function GET() {
//   return new Response("Hello Next.js ! ");
// }

//----------------------------------------------------------------
// // This is no more necessary, TypesScript issue has been resolved
// import { NextResponse } from "next/server";
// export async function GET() {
//   return NextResponse.json({ data: "Hello Next.js ! " });
// }

// Below is simpler
//----------------------------------------------------------------

// export async function GET() {
//   return Response.json({ data: "Hello Next.js ! " });
// }

//----------------------------------------------------------------

// export async function GET(request: Request) {
//   console.log("request = ", request);
//   return Response.json({ data: "Hello Next.js ! " });
// }

//----------------------------------------------------------------
// import { NextRequest } from "next/server";
// export async function GET(request: NextRequest) {
//   console.log("request = ", request);
//   return Response.json({ data: "Hello Next.js ! " });
// }

//----------------------------------------------------------------
