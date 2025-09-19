import Link from "next/link";
import { inter, montSerrat } from "../fonts";
import { easeOut, motion } from "motion/react";
import { Post } from "../../lib/definitions";
export default function PostCard(props: Post) {
  const delay = 0.1;
  const animDuration = 0.3;
  const { title, body, id } = props;
  return (
    <motion.article
      className="w-50 bg-gray-300 p-5 rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: animDuration,
        ease: easeOut,
        delay: id * delay,
      }}
    >
      <h3 className={`text-xl truncate capitalize mb-2 ${inter.className}`}>
        {title}
      </h3>
      <p className={`line-clamp-3 ${montSerrat.className}`}>{body}</p>
      <Link href={`/`} className="underline underline-offset-2 text-blue-500">
        See more
      </Link>
    </motion.article>
  );
}
