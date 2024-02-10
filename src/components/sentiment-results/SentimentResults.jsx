import { useContext, useEffect, useState } from "react";
import Card from "../card/Card";
import ChartComponent from "../chart/Chart";
import {
  CardsContainer,
  ChartsContainer,
  ResultsContainer,
} from "../dashboard/Dashboard.styles";
import SentimentsCard from "../sentiments-card/SentimentsCard";
import Papa from "papaparse";
import { CompareKeywordContext } from "../../contexts/CompareKeyword.context";
const { useNavigate } = require("react-router-dom");

export const SentimentResults = () => {
  const { data } = useContext(CompareKeywordContext);
  const [sentimentResults, setSentimentResults] = useState();
  const [positiveResults, setPositiveResults] = useState();
  const [negativeResults, setNegativeResults] = useState();

  useEffect(() => {
    const csvFilePath = "./sentiment_results.csv";

    // Papa.parse(csvFilePath, {
    //   header: true,
    //   download: true,
    //   complete: (result) => {
    //     // console.log('CSV Data:', result.data);
    //     setSentimentResults(result.data);
    //     // console.log(sentimentResults);
    //   },
    //   error: (error) => {
    //     console.error("Error reading CSV file:", error.message);
    //   },
    // });
    if (sentimentResults) {
      const positive = sentimentResults.find(
        (item) => item.Label === "positive"
      );
      setPositiveResults(positive.Score);

      const negative = sentimentResults.find(
        (item) => item.Label === "negative"
      );
      setNegativeResults(negative?.Score);
    }
  }, [sentimentResults]);

  const navigate = useNavigate();

  return (
    <>
      {data.length && (
        <ResultsContainer>
          <CardsContainer>
            <Card
              image={"/chat.svg"}
              title={"Total Results"}
              infoText={data[0].infoText}
              // percentage={"30%"}
            />
            <Card
              image={"/Impressions_likes.svg"}
              title={"Total Engagement"}
              infoText={data[0].totalEngagement.datasets[0].data[0]}
              // percentage={"30%"}
            />
            <SentimentsCard
              title={"Sentiments"}
              happy={data[0].sentiments.datasets[0].data[0]}
              sad={data[0].sentiments.datasets[1].data[0]}
            />
            <Card
              image={"/noun-antenna-4635475.svg"}
              title={"Reach"}
              infoText={data[0].reach.datasets[0].data[0]}
              // percentage={"30%"}
            />
          </CardsContainer>
          <ChartsContainer>
            <div>
              <ChartComponent
                title={"Resultseee over times"}
                data={data[0].resultsOverTime}
              />
            </div>
            <div>
              <ChartComponent
                title={"Net sentiment over time"}
                data={data[0].netSentimentsOverTime}
              />
            </div>
          </ChartsContainer>
        </ResultsContainer>
      )}
    </>
  );
};
