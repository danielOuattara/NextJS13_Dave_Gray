// import type { User } from "../types/User";

// export default async function getAllUsers(): Promise<User[]> | undefined{
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
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

//--------------------------------------------------------------------------

export default async function getAllUsers() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=5",
  );

  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }

  if (!res.ok) {
    return undefined;
  }

  return res.json();
}
