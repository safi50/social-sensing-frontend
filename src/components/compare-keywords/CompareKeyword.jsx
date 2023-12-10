import { useContext } from "react";
import ChartComponent from "../chart/Chart";
import { ComparisonCard } from "../comparison-card/ComparisonCard";
import { HorizontalBarChartComponent } from "../horizontal-bar/HorizontalBarChart";
import VerticalBarChart from "../refreshBtn/vertical-bar/VerticalBarChart";
import {
  ChartsContainer,
  CompareKeywordWrapper,
} from "./CompareKeyword.styles";
import { CompareKeywordContext } from "../../contexts/CompareKeyword.context";
import { mergeData } from "../../contexts/dummyData";

export const CompareKeyword = () => {
  const { data } = useContext(CompareKeywordContext);
  console.log(data);
  const mergedTotalEngagement = mergeData(data, "totalEngagement");
  const mergedReach = mergeData(data, "reach");
  const mergedResultsOverTime = mergeData(data, "resultsOverTime");
  const mergedSentiments = mergeData(data, "sentiments");
  const mergedNetSentimentOverTime = mergeData(data, "netSentimentsOverTime");
  return (
    <CompareKeywordWrapper>
      <ComparisonCard title={"Total Results"} />
      <ChartsContainer>
        <VerticalBarChart
          title="Total Engagement"
          data={mergedTotalEngagement}
        />
        <HorizontalBarChartComponent title="Reach" data={mergedReach} />
      </ChartsContainer>
      <ChartComponent title="Results over time" data={mergedResultsOverTime} />
      <ChartsContainer>
        <VerticalBarChart title="Sentiments" data={mergedSentiments} />
        <ChartComponent
          title="Net Sentiment over time"
          data={mergedNetSentimentOverTime}
        />
      </ChartsContainer>
    </CompareKeywordWrapper>
  );
};
