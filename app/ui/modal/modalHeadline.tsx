import { merriWeather } from "../fonts";

export default function ModalHeadline() {
  return (
    <h3 className={`text-2xl md:text-4xl ${merriWeather.className}`}>
      User details
    </h3>
  );
}
