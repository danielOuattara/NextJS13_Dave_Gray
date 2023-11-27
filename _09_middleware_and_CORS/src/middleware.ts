import { NextRequest, NextResponse } from "next/server";

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://www.yoursite.com", "http://www.yoursite.com"]
    : ["http://localhost:3000" /* "https://www.google.com" */];

export function middleware(request: Request) {
  const origin = request.headers.get("origin");
  console.log("origin = ", origin);

  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad request",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  if (request.url.includes("/api/")) {
    // do something OR/AND use const config = {} below
    console.log("conditional middleware call 1 OK");
  }

  const regex = new RegExp("/api/*");
  if (regex.test(request.url)) {
    console.log("conditional middleware call 2 OK");
  }

  console.log("In Middleware ");
  console.log(request.method);
  console.log(request.url);

  // setTimeout(() => {
  //   return NextResponse.next();
  // }, 3000);

  return NextResponse.next();
}

// applying our middleware matcher
export const config = {
  matcher: "/api/:path*",
};
