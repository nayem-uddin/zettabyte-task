export default function Label({
  bgcolor,
  name,
}: {
  bgcolor: string;
  name: string;
}) {
  return (
    <div>
      <span className={`inline-block size-3 ${bgcolor} mr-2`}></span>
      <span>{name}</span>
    </div>
  );
}
