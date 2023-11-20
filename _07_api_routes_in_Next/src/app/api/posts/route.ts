// export async function GET() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users?_limit=3");
//   const posts = await response.json();
//   console.log("posts =", posts);

//   return new Response("Hello Next.js !");
// }

//----------------------------------------------------------------

export async function GET(request: Request, response: Response) {
  console.log("request = ", request);
  console.log("----------------------------------------------------");

  console.log("response = ", response);
  console.log("----------------------------------------------------");

  const postsResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=3",
  );
  const posts = await postsResponse.json();
  console.log("posts =", posts);

  return new Response("Hello Next.js !");
}

//----------------------------------------------------------------
// import { NextRequest } from "next/server";
// export async function GET(request: NextRequest) {
//   console.log("request = ", request);
//   return Response.json({ data: "Hello Next.js ! " });
// }

//----------------------------------------------------------------

// export async function POST(request: Request, response: Response) {
//   console.log("request", request);
//   const data = await request.json();
//   console.log("----------------------------------------------------");

//   console.log("data = ", data);
//   console.log("----------------------------------------------------");

//   return new Response("Hello Next.js !");
// }
