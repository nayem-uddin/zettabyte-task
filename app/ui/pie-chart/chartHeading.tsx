import { robotoSlab } from "../fonts";
export default function ChartHeading({ headline }: { headline: string }) {
  return (
    <p className={`text-xl md:text-2xl ${robotoSlab.className}`}>{headline}</p>
  );
}
