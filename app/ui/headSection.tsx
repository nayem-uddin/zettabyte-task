import SidebarToggle from "./sidebarToggle";

export default function HeadSection() {
  return (
    <header className="py-5 border-b border-b-gray-400 flex gap-x-3">
      <SidebarToggle />
      <h1 className="text-3xl font-semibold">Dashboard</h1>
    </header>
  );
}
