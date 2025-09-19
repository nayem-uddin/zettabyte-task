import BarChart from "./ui/bar-chart/barChart";
import ShortDescription from "./ui/homepage/shortDescription";
import WelcomeUser from "./ui/homepage/welcomeUser";
import PieChart from "./ui/pie-chart/pieChart";

export default function Home() {
  return (
    <div>
      <WelcomeUser />
      <ShortDescription />
      <div className="flex flex-wrap justify-around mt-5 md:mt-10 gap-y-5">
        <PieChart />
        <BarChart />
      </div>
    </div>
  );
}
