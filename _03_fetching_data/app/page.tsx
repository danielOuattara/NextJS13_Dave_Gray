import styles from "./home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>
        <Link href={"/about"}>to About</Link> |{" "}
        <Link href={"/users"}>to Users</Link>
      </p>
    </main>
  );
}
