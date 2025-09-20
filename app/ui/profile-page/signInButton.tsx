import { Google } from "@mui/icons-material";
import { signIn } from "next-auth/react";

export default function SignInButton() {
  return (
    <button
      onClick={() => signIn("google")}
      className="py-2 border border-gray-400 rounded-xl w-full bg-sky-600 text-white hover:bg-neutral-200 hover:text-inherit"
    >
      <Google /> Sign in with Google
    </button>
  );
}
