import { Metadata } from "next";
import PostsShowcase from "../ui/posts-page/postsShowcase";

export const metadata: Metadata = {
  title: "Posts",
};

export default function Page() {
  return (
    <>
      <PostsShowcase />
    </>
  );
}
