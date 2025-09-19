export default function TableHead() {
  return (
    <thead>
      <tr className="border-b border-b-gray-500 bg-cyan-300 text-lg">
        <th className="text-left py-4 md:pl-2 border-r border-r-gray-500 pl-1">
          Name
        </th>
        <th className="text-left pr-2 border-r border-r-gray-500 pl-1">
          Email
        </th>
        <th className="md:text-left md:pl-2">Company</th>
      </tr>
    </thead>
  );
}
