import { Dispatch, SetStateAction } from "react";
import { User } from "../../lib/definitions";
import ModalCloseButton from "./modalCloseButton";
import ModalHeadline from "./modalHeadline";
import ModalBody from "./modalBody";
import { easeInOut, motion } from "motion/react";
import ModalContainer from "./modalContainer";
interface Props extends User {
  setShow: Dispatch<SetStateAction<boolean>>;
}
export default function Modal(props: Props) {
  const { setShow } = props;
  const durationInSeconds = 0.5;
  return (
    <ModalContainer>
      <motion.div
        className="bg-white m-auto size-fit shadow-2xl/100 border"
        initial={{ translateY: "-100%" }}
        animate={{ translateY: 0 }}
        transition={{
          duration: durationInSeconds,
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
    </ModalContainer>
  );
}
