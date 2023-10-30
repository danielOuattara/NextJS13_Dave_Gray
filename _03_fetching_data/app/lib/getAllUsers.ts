import type { User } from "../types/User";

export default async function getAllUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
