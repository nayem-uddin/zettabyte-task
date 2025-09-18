export default function TableHead() {
  return (
    <thead>
      <tr className="border-b">
        <th className="text-left md:pl-2">Name</th>
        <th className="text-left pr-2">Email</th>
        <th className="md:text-left md:pl-2">Company</th>
      </tr>
    </thead>
  );
}
