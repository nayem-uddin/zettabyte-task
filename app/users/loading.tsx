import TableRowSkeleton from "../ui/users-page/tableRowSkeleton";

export default function Loading() {
  const totalPlaceholders = 3;
  return (
    <div>
      {Array.from({ length: totalPlaceholders }).map((v, i) => (
        <TableRowSkeleton key={i} />
      ))}
    </div>
  );
}
