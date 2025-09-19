import type { Metadata } from "next";
import "./globals.css";
import MenuList from "./ui/menuList";
import HeadSection from "./ui/header-section/headSection";
import { ContextProvider } from "./context/contextProvider";

export const metadata: Metadata = {
  title: {
    template: "Dashboard | %s",
    default: "Dashboard",
  },
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
          <main className="flex">
            <MenuList />
            <section className="w-full pl-2 md:pl-5 pt-5 lg:pr-5">
              {children}
            </section>
          </main>
        </ContextProvider>
      </body>
    </html>
  );
}
