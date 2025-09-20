import { PowerSettingsNew } from "@mui/icons-material";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="text-red-500 border px-2 py-1 mt-5 hover:bg-red-500 hover:text-white rounded-xl"
    >
      <PowerSettingsNew /> Sign out
    </button>
  );
}
