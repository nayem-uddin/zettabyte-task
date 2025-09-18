"use client";
import { Menu, MenuOpen } from "@mui/icons-material";

import { useExpandContext } from "../context/context";

export default function SidebarToggle() {
  const { setExpand, expand } = useExpandContext();
  return (
    <button
      className="ms-10 cursor-pointer hover:bg-gray-300 px-2"
      onClick={() => setExpand(!expand)}
    >
      {expand ? <MenuOpen /> : <Menu />}
    </button>
  );
}
