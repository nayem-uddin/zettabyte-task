"use client";

import { useFetch } from "../lib/customHooks";
import { User } from "../lib/definitions";
import TableHead from "./tableHead";
import TableRow from "./tableRow";

export default function UsersList() {
  const users = useFetch<User>("users");
  return (
    <table className="w-full">
      {users !== null && users.length > 0 && (
        <>
          <TableHead />
          <tbody>
            {users?.map((user) => (
              <TableRow key={user.id} {...user} />
            ))}
          </tbody>
        </>
      )}
    </table>
  );
}
