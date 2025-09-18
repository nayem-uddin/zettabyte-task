import Skeleton from "../ui/skeleton";

export default function Loading() {
  return (
    <div className="flex gap-x-4 mt-5">
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
}
