"use client";
import { easeOut, motion } from "motion/react";
import { useFetch } from "../lib/customHooks";
import { Post } from "../lib/definitions";
import PostCard from "./postCard";
import EmptyDataMessage from "./emptyDataMessage";

export default function PostsShowcase() {
  const posts = useFetch<Post>("/posts");
  const totalPosts = posts?.length;
  const delay = 0.1;
  const animDuration = 0.3;
  return (
    <div className="flex flex-wrap justify-around gap-y-8">
      {posts !== null &&
        ((totalPosts &&
          posts?.map((post, index) => (
            <motion.div
              key={post?.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: animDuration,
                ease: easeOut,
                delay: index * delay,
              }}
            >
              <PostCard {...post} />
            </motion.div>
          ))) ||
          (!totalPosts && <EmptyDataMessage />))}
    </div>
  );
}
