import React, {useContext} from "react";
import { Bar } from "react-chartjs-2"; // Import Bar instead of Line
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { TopResultsFilterContext } from "../../contexts/TopResultsFilter.context"
import { useNavigate} from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartContainer = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  flex-grow: 1;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
`;
const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 2rem;
`;
const Img = styled.img`
  width: 2rem;
`;
const TitleText = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  margin-right: 1rem;
  color: #000;
`;


// component displaying horizontal bar char of the provided data
export const HorizontalBarChartComponent = ({ title, data }) => {
  const {topResultMatch, setTopResultMatch, topResultRange, setTopResultRange, topResultSentiment, setTopResultSentiment} = useContext(TopResultsFilterContext)
  const navigate = useNavigate();

  const options = {
    indexAxis: "y",
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
    },
    // when clicked on the graph, redirect to results page after setting the properties of the results that need to be displayed
    onClick: (event, elements) => {
      if (elements.length > 0){
        const clickedElement = elements[0];
        console.log("data:", data)
        console.log("clickedElement:", clickedElement)
        setTopResultMatch(data.labels[clickedElement.datasetIndex])
        setTopResultRange("none")
        setTopResultSentiment("none")
        navigate('/topResults')
      }
    }
  };

  return (
    <ChartContainer>
      <Row>
        <TitleText>{title}</TitleText>
        <Img src="/danger-circle.svg" />
      </Row>
      <Bar data={data} options={options} />
    </ChartContainer>
  );
};
