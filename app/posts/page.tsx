import { Suspense } from "react";
import Loading from "./loading";
import PostsShowcase from "../ui/postsShowcase";

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <PostsShowcase />
    </Suspense>
  );
}
