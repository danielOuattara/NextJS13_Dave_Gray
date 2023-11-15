// import type { Post } from "../types/Post";

// export default async function getSingleUserAllPosts(
//   userId: string,
// ): Promise<Post[]> {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
//     {
//       // cache: "force-cache", // <-- forced cache: default
//       // cache: "no-store", // <-- means always dynamic
//       next: {
//         revalidate: 60, // <-- This is ISR !!! Working on SSG OR on SSR component:
//       },
//     },
//   );
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   // if (!res.ok) {
//   //   // This will activate the closest `error.js` Error Boundary
//   //   throw new Error("Failed to fetch data");
//   // }

//   if (!res.ok) {
//     return undefined;
//   }

//   return res.json();
// }

//------------------------------------------------------------------------------

export default async function getSingleUserAllPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    {
      // cache: "force-cache", // <-- forced cache: default
      // cache: "no-store", // <-- means always dynamic
      next: {
        revalidate: 60, // <-- This is ISR !!! Working on SSG OR on SSR component:
      },
    },
  );
  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }

  if (!res.ok) {
    return undefined;
  }

  return res.json();
}
