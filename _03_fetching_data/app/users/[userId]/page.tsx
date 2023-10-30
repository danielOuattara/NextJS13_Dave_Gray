import type { Params } from "@/app/types/Params ";
import getSingleUser from "@/app/lib/getSingleUser ";
import getSingleUserAllPosts from "@/app/lib/getSingleUserAllPosts ";
import Link from "next/link";
import SingleUserPosts from "./../../components/SingleUserPosts";
import { Suspense } from "react";
import type { Metadata } from "next";
import { User } from "@/app/types/User ";

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData = getSingleUser(userId);
  const user: User = await userData;
  return {
    title: `${user.name} Page`,
    description: `This is the page of ${user.name}`,
  };
}
export default async function SingleUserPage({ params: { userId } }: Params) {
  const userData = getSingleUser(userId);
  const postsData = getSingleUserAllPosts(userId);

  // const [user, posts] = await Promise.all([userData, postsData]);

  const user = await userData;

  return (
    <>
      <h1>Single User all posts </h1>
      <div>
        <Link href={"/users"}>Go back</Link>
        <h2>
          Author: {user.name} {user.username}
        </h2>

        <br />

        <Suspense fallback={<h2>LOADING...</h2>}>
          <SingleUserPosts /* posts={posts} */ promise={postsData} />
        </Suspense>
      </div>
    </>
  );
}
