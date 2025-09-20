"use client";
import { ReactNode, useState } from "react";
import { SidebarContext } from "./context";
import { SessionProvider } from "next-auth/react";

export function ContextProvider({ children }: { children: ReactNode }) {
  const [expand, setExpand] = useState(true);
  return (
    <SessionProvider>
      <SidebarContext value={{ expand, setExpand }}>{children}</SidebarContext>
    </SessionProvider>
  );
}
