import PostCardSkeleton from "../ui/postCardSkeleton";

export default function Loading() {
  return (
    <div className="flex gap-x-4 mt-5">
      <PostCardSkeleton />
      <PostCardSkeleton />
      <PostCardSkeleton />
      <PostCardSkeleton />
    </div>
  );
}
