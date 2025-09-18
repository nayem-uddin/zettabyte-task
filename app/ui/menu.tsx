"use client";
import Link from "next/link";
import { Option } from "../lib/definitions";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { useExpandContext } from "../context/context";
export default function Menu(props: Option) {
  const pathname = usePathname();
  const { link, label } = props;
  const { expand } = useExpandContext();
  return (
    <li
      className={clsx(
        `hover:rounded-lg cursor-pointer hover:bg-neutral-300 py-3`,
        {
          "hidden md:block": !expand,
        }
      )}
    >
      <Link
        href={link}
        prefetch
        className={clsx("flex flex-col gap-x-2 m-auto max-w-20 items-center", {
          "text-blue-500": pathname === link,
          "md:flex-col": !expand,
          "md:flex-row": expand,
        })}
      >
        <span>
          <props.logo />
        </span>
        <span>{label}</span>
      </Link>
    </li>
  );
}
