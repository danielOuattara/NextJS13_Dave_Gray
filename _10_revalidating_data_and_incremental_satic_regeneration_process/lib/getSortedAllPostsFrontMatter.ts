import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "blogposts");

export function getSortedAllPostsFrontMatter() {
  // Get file name under /posts

  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Remove .md from file name to get id/slug
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fileFullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fileFullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
    };

    // Combine the data with the id
    return blogPost;
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
