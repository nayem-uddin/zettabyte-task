"use client";
import { useSession } from "next-auth/react";
import UserDetailsPage from "../ui/profile-page/userDetailsPage";
import SignInPage from "../ui/profile-page/signInPage";

export default function Page() {
  const { data: session } = useSession();
  return (
    <div>
      {session ? <UserDetailsPage session={session} /> : <SignInPage />}
    </div>
  );
}
