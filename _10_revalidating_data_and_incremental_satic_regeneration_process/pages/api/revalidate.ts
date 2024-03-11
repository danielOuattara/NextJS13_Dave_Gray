// https://<your-site.com>/api/revalidate?secret=<token>

// http://localhost:3000/api/revalidate?path=/&secret=pizza_tomatoes_cheese

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.query.secret !== process.env.MY_SECRET_TOKEN_HEX) {
    return res.status(401).json({ message: "invalid token" });
  }

  const path = req.query.path as string;
  await res.revalidate(path);
  return res.json({ revalidate: true });
}
