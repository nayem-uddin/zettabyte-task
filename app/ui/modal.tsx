import { Dispatch, SetStateAction } from "react";
import { User } from "../lib/definitions";
import ModalCloseButton from "./modalCloseButton";
import ModalHeadline from "./modalHeadline";
import ModalBody from "./modalBody";
import { easeInOut, motion } from "motion/react";
interface Props extends User {
  setShow: Dispatch<SetStateAction<boolean>>;
}
export default function Modal(props: Props) {
  const { setShow } = props;
  return (
    <div className="fixed z-1 left-1/2 top-0 -translate-x-1/2 bg-[rgba(0,0,0,0.4)] size-full flex">
      <motion.div
        className="bg-white m-auto size-fit shadow-2xl/100 border"
        initial={{ translateY: "-100%" }}
        animate={{ translateY: 0 }}
        transition={{
          duration: 0.5,
          ease: easeInOut,
        }}
      >
        <div className="border-b w-full flex justify-between bg-teal-500/70 p-3 md:p-5">
          <ModalHeadline />
          <ModalCloseButton setShow={setShow} />
        </div>
        <hr />
        <ModalBody {...props} />
      </motion.div>
    </div>
  );
}
