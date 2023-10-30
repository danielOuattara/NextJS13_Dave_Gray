import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello World !</h1>
      <Link href={"/about"}>to about</Link>
    </main>
  );
}
