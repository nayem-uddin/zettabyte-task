import { Metadata } from "next";
import UsersList from "../ui/users-page/usersList";

export const metadata: Metadata = {
  title: "Users",
};

export default function Page() {
  return (
    <>
      <UsersList />
    </>
  );
}
