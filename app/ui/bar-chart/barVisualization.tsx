import Bar from "./bar";
import MonthName from "./monthName";
import Quantity from "./quantity";
export default function BarVisualization() {
  return (
    <>
      <div className="h-48 absolute bottom-30 right-10 md:right-20">
        <Quantity amount={600} />
        <Bar />
        <MonthName month="Aug" />
      </div>
      <div className="h-40 absolute bottom-30 right-30 md:right-40">
        <Quantity amount={500} />
        <Bar />
        <MonthName month="Jul" />
      </div>
      <div className="h-24 absolute bottom-30 right-50 md:right-60">
        <Quantity amount={300} />
        <Bar />
        <MonthName month="Jun" />
      </div>
    </>
  );
}
