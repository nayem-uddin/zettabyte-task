import ChartContainer from "./chartContainer";
import ChartHeading from "./chartHeading";
import Label from "./label";
import Visualization from "./visual";

export default function PieChart() {
  return (
    <ChartContainer>
      <ChartHeading headline="Visits based on browsers" />
      <div className="absolute top-1/8 md:top-1/6 right-3">
        <Label name="Opera" bgcolor="bg-red-500" />
        <Label name="Firefox" bgcolor="bg-green-600" />
        <Label name="Edge" bgcolor="bg-yellow-500" />
        <Label name="Chrome" bgcolor="bg-purple-600" />
      </div>
      <Visualization />
    </ChartContainer>
  );
}
