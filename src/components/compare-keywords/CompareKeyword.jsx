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


// componenet to be displayed instead of dashboard when user selects multiple keywords to be compared
export const CompareKeyword = () => {
  const { data, deleteDataByName, filters } = useContext(CompareKeywordContext); // data about each keyword
  
  // converting data into a format to be shown in graphs
  const mergedTotalEngagement = mergeData(data, "totalEngagement");
  const mergedReach = mergeData(data, "reach");
  const mergedResultsOverTime = mergeData(data, "resultsOverTime");
  const mergedSentiments = mergeData(data, "sentiments");
  const mergedNetSentimentOverTime = mergeData(data, "netSentimentsOverTime");

  // calculate the net sentiments of each keyword over a time period
  const netSentiments = mergedResultsOverTime.datasets.map((dataset, index) => {
    let positiveSentimentArray = mergedNetSentimentOverTime.datasets[index*3].data
    let negativeSentimentArray = mergedNetSentimentOverTime.datasets[(index*3)+1].data
    
    // net sentiment is positive sentiment - negative sentiment
    let netSentimentResults = positiveSentimentArray.map((value, num) => {
      return value - negativeSentimentArray[num]
    })

    return {
        label: dataset.label,
        data: netSentimentResults,
        backgroundColor: dataset.backgroundColor,
        borderColor: dataset.borderColor,
        borderWidth: 1
    };
  });

  mergedNetSentimentOverTime.datasets = netSentiments

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
          queryMatches={filters.eventNames}
        />
      </div>
      <ChartsContainer>
        <div>
          <VerticalBarChart title="Sentiments" data={mergedSentiments} />
        </div>
        <div>
          <ChartComponent
            title="Net Sentiments over time"
            data={mergedNetSentimentOverTime}
            queryMatches={filters.eventNames}
          />
        </div>
      </ChartsContainer>
    </CompareKeywordWrapper>
  );
};
