import { Cancel } from "@mui/icons-material";
import ModalContainer from "../modal/modalContainer";
import { inter } from "../fonts";
import { easeInOut, motion } from "framer-motion";
export default function Popup({
  error,
  closePopup,
}: {
  error: string | null;
  closePopup: () => void;
}) {
  const durationInSeconds = 1;
  if (!error) return;
  return (
    <ModalContainer>
      <motion.div
        className="bg-white w-fit p-5 m-auto flex flex-col gap-y-3"
        initial={{ translateX: "-200%" }}
        animate={{ translateX: 0 }}
        transition={{
          ease: easeInOut,
          duration: durationInSeconds,
        }}
      >
        <div className="flex justify-between">
          <h4 className={`text-4xl ${inter.className}`}>Error</h4>
          <button onClick={closePopup} className="cursor-pointer">
            <Cancel color="error" />
          </button>
        </div>
        <hr className="border-[0.1px] border-gray-500" />
        <p className="text-xl break-words">{error}</p>
      </motion.div>
    </ModalContainer>
  );
}
