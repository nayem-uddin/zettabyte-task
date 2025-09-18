"use client";
import { createContext, useContext } from "react";
import { ContextType } from "../lib/definitions";

export const SidebarContext = createContext<ContextType | null>(null);

export function useExpandContext() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("Context not defined");
  }
  return context;
}
