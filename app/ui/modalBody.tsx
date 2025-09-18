import { FieldValuePair, User } from "../lib/definitions";
import ModalBodyText from "./modalBodyText";
export default function ModalBody(props: User) {
  const details: FieldValuePair[] = [
    {
      field: "User ID",
      value: props.id.toString(),
    },
    {
      field: "Username",
      value: props.username,
    },
    {
      field: "Full name",
      value: props.name,
    },
    {
      field: "Email",
      value: props.email,
    },
    {
      field: "Phone",
      value: props.phone,
    },
    {
      field: "Company",
      value: props.company.name,
    },
    {
      field: "Website",
      value: props.website,
    },
    {
      field: "Address",
      value: `${props.address.suite},  ${props.address.street}, ${props.address.city}`,
    },
  ];
  return (
    <div className="p-5 text-lg md:text-2xl grid gap-y-2 bg-stone-300">
      {details.map((data) => (
        <ModalBodyText key={data.field} {...data} />
      ))}
    </div>
  );
}
