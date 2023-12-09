import { ComparisonCard } from "../comparison-card/ComparisonCard";
import { HorizontalBarChartComponent } from "../horizontal-bar/HorizontalBarChart";
import VerticalBarChart from "../refreshBtn/vertical-bar/VerticalBarChart";

export const CompareKeyword = () => {
  const dummyData = {
    labels: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    datasets: [
      {
        label: "Sample Dataset",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <HorizontalBarChartComponent
        title="My Horizontal Bar Chart"
        data={dummyData}
      />
      <VerticalBarChart title="My Vertical Bar Chart" data={dummyData} />
      <ComparisonCard title={"Total Results"} />
    </div>
  );
};
