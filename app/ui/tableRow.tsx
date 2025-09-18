import { User } from "../lib/definitions";
interface Props extends User {
  handleModalDisplay: (user: User) => void;
}

export default function TableRow(props: Props) {
  const { name, email, company, id, handleModalDisplay } = props;
  function selectRow() {
    const userInfo: User = { ...props };
    handleModalDisplay(userInfo);
  }
  return (
    <tr
      key={id}
      className="border-b border-b-gray-500 cursor-pointer hover:bg-gray-300 odd:bg-neutral-300"
      onClick={selectRow}
    >
      <td className="break-normal md:pl-2 border-r border-r-gray-500 pl-1">
        {name}
      </td>
      <td className="break-all py-2 border-r border-r-gray-500 pl-1">
        {email}
      </td>
      <td className="break-all pl-2">{company.name}</td>
    </tr>
  );
}
