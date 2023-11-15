import type { Params } from "@/app/types/Params ";
import { getSingleUser, getSingleUserAllPosts, getAllUsers } from "@/app/lib ";
import Link from "next/link";
import { SingleUserPosts } from "./components";
import { Suspense } from "react";
import type { Metadata } from "next";

import { User } from "@/app/types/User ";
import { Post } from "@/app/types/Post ";

import { notFound } from "next/navigation";

//-----------------------------------------------------
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  /* -------------------------------------  */
  // const userData = getSingleUser(userId);
  // const user: User = await userData;
  /* ------------------------------------- OR */
  const user = await getSingleUser(userId);

  if (!user) {
    return {
      title: "User Not Found !! ",
    };
  }

  return {
    title: `${user.name} Page`,
    description: `This is the page of ${user.name}`,
  };
}

//-----------------------------------------------------
export default async function SingleUserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getSingleUser(userId);
  const postsData: Promise<Post[]> = getSingleUserAllPosts(userId);

  // const [user, posts] = await Promise.all([userData, postsData]);

  const user = await userData;

  if (!user) {
    return notFound();
  }

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

//-------------------------------------------------
export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  return users.map((user) => ({ userId: user.id.toString() }));
}
