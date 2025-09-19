import { ReactNode } from "react";

export default function ModalContainer({ children }: { children: ReactNode }) {
  return (
    <div className="fixed z-1 left-1/2 top-0 -translate-x-1/2 bg-[rgba(0,0,0,0.4)] size-full flex">
      {children}
    </div>
  );
}
