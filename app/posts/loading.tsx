import PostCardSkeleton from "../ui/posts-page/postCardSkeleton";

export default function Loading() {
  const totalPlaceholders = 4;
  return (
    <div className="flex flex-wrap gap-x-4 mt-5 gap-y-4">
      {Array.from({ length: totalPlaceholders }).map((v, i) => (
        <PostCardSkeleton key={i} />
      ))}
    </div>
  );
}
