import {
  getFormattedDate,
  getSinglePostData,
  getSortedAllPostsData,
} from "@/lib";
import { notFound } from "next/navigation";
import Link from "next/link";

//---
type Props = {
  params: {
    postId: string;
  };
};

//--------------------------------------------------------------
export function generateStaticParams() {
  const posts = getSortedAllPostsData();
  return posts.map((post) => ({
    postId: post.id,
  }));
}

//--------------------------------------------------------------
export function generateMetadata({ params }: Props) {
  const posts = getSortedAllPostsData();
  const post = posts.find((post) => post.id === params.postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

//--------------------------------------------------------------
export default async function Post({ params }: Props) {
  const posts = getSortedAllPostsData();
  const post = posts.find((post) => post.id === params.postId);

  if (!post) {
    return notFound();
  }

  const postData = await getSinglePostData(params.postId);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{postData.title}</h1>
      <p className="mt-0">{getFormattedDate(postData.date)}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <p>
          <Link href="/">← Back to home</Link>
        </p>
      </article>
    </main>
  );
}
