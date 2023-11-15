import styles from "./about.module.css";

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>Users navbar</nav>
      <main>{children}</main>
    </>
  );
}
