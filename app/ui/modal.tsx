import { User } from "../lib/definitions";

interface Props extends User {
  show: boolean;
}
export default function Modal(props: Props) {
  const { name, email, company } = props;
  return (
    <div className="fixed z-1 left-1/2 top-0 -translate-x-1/2 bg-[rgba(0,0,0,0.4)] size-full flex align-middle">
      <div className="bg-white size-fit m-auto">
        <div className="border-b w-full p-2 flex justify-between">
          <h3 className="text-4xl ">User details</h3>
          <button>X</button>
        </div>
        <hr />
        <div className="p-5 text-xl">
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Company: {company.name}</p>
        </div>
      </div>
    </div>
  );
}
