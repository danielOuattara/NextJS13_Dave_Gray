// import { Post } from "./../types/Post";

// type Props = {
//   posts: Post[];
// };

// export default async function SingleUserPost({ posts }: Props) {
//   return (
//     <ul>
//       {posts.map((post) => (
//         <li key={post.id}>
//           <h3> Title:&nbsp;{post.title}</h3>
//           <p>{post.body}</p>
//         </li>
//       ))}
//     </ul>
//   );
// }

//--------------------------------------------------------------------------

import { Post } from "@/app/types/Post ";

type Props = {
  promise: Promise<Post[]>;
};
export default async function SingleUserPosts({ promise }: Props) {
  const posts = await promise;
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h3> Title:&nbsp;{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
