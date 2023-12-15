import Link from "next/link";

export default function NotFound() {
  return (
    <h1 className="m-5 text-center text-3xl">
      Sorry, The requested post does not exist.
      <br />
      <Link href={"/"} className="underline">
       ← Back to home
      </Link>
    </h1>
  );
}
