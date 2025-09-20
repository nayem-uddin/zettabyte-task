import { Session } from "next-auth";
import SignOutButton from "./signOutButton";
import UserImage from "./userImage";

export default function UserDetailsPage({ session }: { session: Session }) {
  const { name, email, image } = session.user || {};
  return (
    <div className="w-fit m-auto flex flex-col gap-y-2 justify-center">
      <UserImage imageLink={image} />
      <p className="text-2xl font-semibold">{name}</p>
      <p>{email}</p>
      <SignOutButton />
    </div>
  );
}
