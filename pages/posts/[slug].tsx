import { GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import {
  getAllPosts,
  getPostBySlug,
  Post,
  PostWithContent,
} from "../../api/posts";

export default function GetPostSlug(props: { post: PostWithContent }) {
  return (
    <div
      style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "90%" }}
      className="pt-6"
    >
      <a
        href="/"
        className="outline-none hover:border-gray-700 border-transparent border-b-2 hover:border-current"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 inline"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
        back
      </a>
      <div className="pt-2">
        <div className="text-2xl font-bold">{props.post.title}</div>
      </div>
      <div className="pt-6">
        <MDXRemote {...props.post.content} />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { post: await getPostBySlug(context.params.slug.toString()) },
  };
};

export async function getStaticPaths() {
  let posts = await getAllPosts();
  let paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}
