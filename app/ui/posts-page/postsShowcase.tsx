"use client";

import { useFetch } from "../../lib/customHooks";
import { Post } from "../../lib/definitions";
import PostCard from "./postCard";
import EmptyDataMessage from "../emptyDataMessage";
import Loading from "@/app/posts/loading";

export default function PostsShowcase() {
  const { data: posts } = useFetch<Post>("/posts");
  const totalPosts = posts?.length;

  return (
    <div className="flex flex-wrap justify-around gap-y-8">
      {posts === null && <Loading />}
      {posts !== null &&
        ((totalPosts &&
          posts?.map((post) => <PostCard key={post.id} {...post} />)) ||
          (!totalPosts && <EmptyDataMessage />))}
    </div>
  );
}
