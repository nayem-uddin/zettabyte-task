"use client";
import clsx from "clsx";
import { useExpandContext } from "../context/context";
import { Option } from "../lib/definitions";
import Menu from "./menu";
import { Article, Home, People } from "@mui/icons-material";
const options: Option[] = [
  {
    label: "Home",
    link: "/",
    logo: Home,
  },
  {
    label: "Posts",
    link: "/posts",
    logo: Article,
  },
  {
    label: "Users",
    link: "/users",
    logo: People,
  },
];
export default function MenuList() {
  const { expand } = useExpandContext();
  return (
    <div
      className={clsx(
        "border-r border-r-gray-400 min-h-dvh transition-all duration-200",
        {
          "w-20 md:w-60": expand,
          "w-0 md:block md:w-20": !expand,
        }
      )}
    >
      <ul>
        {options.map((option) => (
          <Menu key={option.label} {...option} />
        ))}
      </ul>
    </div>
  );
}
