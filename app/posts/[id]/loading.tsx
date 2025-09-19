export default function Loading() {
  return (
    <div className="size-full fixed bg-white flex flex-col gap-y-4 animate-pulse">
      <div className="w-[70%] h-10 bg-gray-500"></div>
      <div className="w-[30%] h-5 bg-gray-500"></div>
      <div className="w-[70%] h-7 bg-gray-500 mt-5"></div>
      <div className="w-[70%] h-7 bg-gray-500"></div>
    </div>
  );
}
