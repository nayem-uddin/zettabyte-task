import { Close } from "@mui/icons-material";
import { Dispatch, SetStateAction } from "react";
export default function ModalCloseButton({
  setShow,
}: {
  setShow: Dispatch<SetStateAction<boolean>>;
}) {
  function handleClick() {
    setShow(false);
  }
  return (
    <button
      className="cursor-pointer md:p-1 size-fit bg-red-500 hover:bg-black"
      onClick={handleClick}
    >
      <Close className="text-white" />
    </button>
  );
}
