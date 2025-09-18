"use client";

import { useFetch } from "../lib/customHooks";
import { Post } from "../lib/definitions";
import PostCard from "./postCard";

export default function PostsShowcase() {
  const posts = useFetch<Post>("/posts");
  const totalPosts = posts?.length;
  return (
    <div className="flex flex-wrap justify-around gap-y-8">
      {posts !== null &&
        ((totalPosts &&
          posts?.map((post) => <PostCard key={post?.id} {...post} />)) ||
          (!totalPosts && <p className="text-2xl mt-10">No posts found</p>))}
    </div>
  );
}
