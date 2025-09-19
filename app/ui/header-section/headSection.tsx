import InvalidRequestButton from "./invalidRequestButton";
import SidebarToggle from "./sidebarToggle";

export default function HeadSection() {
  return (
    <header className="border-b border-b-gray-400 flex flex-wrap justify-between md:px-5 items-center">
      <div className="py-5 flex md:gap-x-2">
        <SidebarToggle />
        <h1 className="text-3xl font-semibold">Dashboard</h1>
      </div>
      <InvalidRequestButton />
    </header>
  );
}
