"use client";

import { useFetch } from "../lib/customHooks";
import PostCard from "./postCard";
import { Post } from "../lib/definitions";

export default function PostsShowcase() {
  const posts = useFetch("/posts");
  return (
    <div className="flex flex-wrap justify-around gap-y-8">
      {posts !== null &&
        posts?.length > 0 &&
        posts?.map((post: Post) => <PostCard key={post?.title} {...post} />)}
    </div>
  );
}
