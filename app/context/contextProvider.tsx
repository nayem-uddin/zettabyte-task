"use client";
import { ReactNode, useState } from "react";
import { SidebarContext } from "./context";

export function ContextProvider({ children }: { children: ReactNode }) {
  const [expand, setExpand] = useState(true);
  return (
    <SidebarContext value={{ expand, setExpand }}>{children}</SidebarContext>
  );
}
