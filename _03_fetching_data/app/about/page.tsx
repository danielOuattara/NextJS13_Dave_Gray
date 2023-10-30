import Link from "next/link";

export default function AboutPage() {
  // throw new Error("Testing error");
  return (
    <>
      <h1>About Page</h1>
      <Link href={"/"}>to Home</Link> |<Link href={"/users"}>to Users</Link>
    </>
  );
}
