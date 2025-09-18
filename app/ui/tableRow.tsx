import { User } from "../lib/definitions";

export default function TableRow(props: User) {
  const { name, email, company } = props;
  return (
    <tr className="border-b">
      <td className="break-normal md:pl-2">{name}</td>
      <td className="break-all py-2 ">{email}</td>
      <td className="break-all pl-2">{company.name}</td>
    </tr>
  );
}
