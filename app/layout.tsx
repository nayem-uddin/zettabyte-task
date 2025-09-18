import type { Metadata } from "next";
import "./globals.css";
import MenuList from "./ui/menuList";
import HeadSection from "./ui/headSection";
import ContextProvider from "./context/contextProvider";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <HeadSection />
          <div className="flex h-full">
            <MenuList />
            <div className="w-screen p-5">{children}</div>
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
