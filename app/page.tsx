import { robotoSlab } from "./ui/fonts";

export default function Home() {
  return (
    <div>
      <h1 className={`text-3xl md:text-4xl ${robotoSlab.className}`}>
        Welcome, user!
      </h1>
      <p className={`mt-4`}>Here is the summary of visits on your webpage.</p>
    </div>
  );
}
