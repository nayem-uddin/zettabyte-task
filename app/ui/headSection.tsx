import SidebarToggle from "./sidebarToggle";

export default function HeadSection() {
  return (
    <header className="py-5 border-b border-b-gray-400 md:flex">
      <SidebarToggle />
      <h1 className="text-3xl font-semibold ms-[25px]">Dashboard</h1>
    </header>
  );
}
