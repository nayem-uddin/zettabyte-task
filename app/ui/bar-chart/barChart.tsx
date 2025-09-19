import ChartContainer from "../pie-chart/chartContainer";
import ChartHeading from "../pie-chart/chartHeading";
import BarVisualization from "./barVisualization";

export default function BarChart() {
  return (
    <ChartContainer>
      <ChartHeading headline="Visits based on months" />
      <div className="w-0.5 h-[60%] bg-black absolute left-2 bottom-24 md:left-5"></div>
      <BarVisualization />
      <div className="w-[90%] h-0.5 absolute bottom-24 bg-black"></div>
    </ChartContainer>
  );
}
