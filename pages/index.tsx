import React from "react";
import { GetStaticProps, NextPage } from "next";
import { getAllPosts, Post } from "../api/posts";

const Home: NextPage<HomeStaticProps> = (props: HomeStaticProps) => {
  return (
    <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "90%" }}>
      <Header />
      <LatestPosts posts={props.posts} />
    </div>
  );
};

const Header = () => {
  return (
    <div className="py-6">
      <div className="text-3xl font-bold">
        jackson's notes on technology, and the world
      </div>
      <div>notes on a puzzling world from Wellington, New Zealand.</div>
      <div>(the natural evolution of my tumblr.)</div>
    </div>
  );
};

const LatestPosts = (props: { posts: Post[] }) => {
  return (
    <div className="pt-16">
      <div className="inline-block text-2xl font-bold bg-black px-4 py-2 text-white">
        latest posts
      </div>
      <div>
        {props.posts.map((e) => (
          <Post post={e} />
        ))}
      </div>
    </div>
  );
};

const Post = (props: { post: Post }) => {
  const post = props.post;
  return (
    <div className="mt-4 mb-12">
      <div className="mb-3">
        <a href={`/posts/${post.slug}`} className="">
          <span className="font-semibold text-xl pb-2 border-b-2 hover:border-black hover:border-solid">
            {post.title}
          </span>
        </a>
      </div>
      <div className="text-gray-500 text-sm">{post.date}</div>
      <div>{post.summary}</div>
    </div>
  );
};

interface HomeStaticProps {
  posts: Post[];
}

export const getStaticProps: GetStaticProps<HomeStaticProps> = async () => {
  const allPosts = await getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
};

export default Home;
