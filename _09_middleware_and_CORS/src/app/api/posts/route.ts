export async function GET(request: Request, response: Response) {
  const postsResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users?",
  );
  const posts = await postsResponse.json();
  console.log("posts =", posts);

  return new Response("Hello Next.js !");
}
