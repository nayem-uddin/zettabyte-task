import Link from "next/link";
import { inter, montSerrat } from "./fonts";

export default function PostCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <article className="w-50 bg-gray-300 p-5 rounded-2xl">
      <h3 className={`text-xl truncate capitalize mb-2 ${inter.className}`}>
        {title}
      </h3>
      <p className={`line-clamp-3 ${montSerrat.className}`}>{body}</p>
      <Link href={`/`} className="underline underline-offset-2 text-blue-500">
        See more
      </Link>
    </article>
  );
}
