import type { Params } from "@/app/types/Params ";
import { getSingleUser, getSingleUserAllPosts } from "@/app/lib ";
import Link from "next/link";
import { SingleUserPosts } from "./components";
import { Suspense } from "react";
import type { Metadata } from "next";
import { User } from "@/app/types/User ";
// import Loading from "../loading";

//-----------------------------------------------------
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  /* -------------------------------------  */
  // const userData = getSingleUser(userId);
  // const user: User = await userData;
  /* ------------------------------------- OR */
  const user = await getSingleUser(userId);
  return {
    title: `${user.name} Page`,
    description: `This is the page of ${user.name}`,
  };
}

//-----------------------------------------------------
export default async function SingleUserPage({ params: { userId } }: Params) {
  const userData = getSingleUser(userId);
  const postsData = getSingleUserAllPosts(userId);

  // const [user, posts] = await Promise.all([userData, postsData]);

  const user = await userData;

  return (
    <>
      <h1>Single User all posts </h1>

      <Link href={"/users"}>Go back</Link>
      <h2>
        Author: {user.name} {user.username}
      </h2>

      <br />

      {/* ----------------------------------------- */}

      {/* <SingleUserPosts posts={posts} /> */}

      {/* ----------------------------------------- */}

      <Suspense fallback={<h2>Loading data here ...</h2>}>
        <SingleUserPosts promise={postsData} />
      </Suspense>
    </>
  );
}
