import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

export interface Post {
  slug: string;
  title: string;
  date: string;
  tag: string;
  summary: string;
}

export type PostWithContent = Post & { content: MDXRemoteSerializeResult };

export async function getPostBySlug(slug: string): Promise<PostWithContent> {
  const fileContent = await import(`../_posts/${slug}.mdx`);
  const meta = matter(fileContent.default);
  const content = await serialize(meta.content);
  return {
    slug: slug,
    title: meta.data.title,
    date: meta.data.date,
    tag: meta.data.tag,
    content: content,
    summary: meta.data.summary,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const context = require.context("../_posts", false, /\.mdx$/);
  const posts: Post[] = [];
  for (const key of context.keys()) {
    const post = key.slice(2);
    const content = await import(`../_posts/${post}`);
    const meta = matter(content.default);
    posts.push({
      slug: post.replace(".mdx", ""),
      title: meta.data.title,
      date: meta.data.date,
      tag: meta.data.tag,
      summary: meta.data.summary,
    });
  }
  return posts.sort((a, b) => {
    return (
      Number.parseInt(b.slug.slice(0, 2)) - Number.parseInt(a.slug.slice(0, 2))
    );
  });
}
