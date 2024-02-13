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
import { useNavigate } from "react-router-dom";

export const CompareKeyword = () => {
  const { data, deleteDataByName, filters } = useContext(CompareKeywordContext);
  console.log(data);
  const mergedTotalEngagement = mergeData(data, "totalEngagement");
  const mergedReach = mergeData(data, "reach");
  const mergedResultsOverTime = mergeData(data, "resultsOverTime");
  const mergedSentiments = mergeData(data, "sentiments");
  const mergedNetSentimentOverTime = mergeData(data, "netSentimentsOverTime");
  const navigate = useNavigate();
  return (
    <CompareKeywordWrapper>
      <ComparisonCard title={"Total Results"} />
      <ChartsContainer>
        <div>
          <VerticalBarChart
            title="Total Engagement"
            data={mergedTotalEngagement}
          />
        </div>
        <div>
          <HorizontalBarChartComponent title="Reach" data={mergedReach} />
        </div>
      </ChartsContainer>
      <div>
        <ChartComponent
          title="Results over time"
          data={mergedResultsOverTime}
        />
      </div>
      <ChartsContainer>
        <div>
          <VerticalBarChart title="Sentiments" data={mergedSentiments} />
        </div>
        <div>
          <ChartComponent
            title="Net Sentiment over time"
            data={mergedNetSentimentOverTime}
          />
        </div>
      </ChartsContainer>
    </CompareKeywordWrapper>
  );
};
