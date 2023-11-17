// export async function GET() {
//   return new Response("Hello Next.js !");
// }

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
import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  console.log("request = ", request);
  return Response.json({ data: "Hello Next.js ! " });
}

//----------------------------------------------------------------
