import React, {useContext} from "react";
import { Bar } from "react-chartjs-2"; // Using Bar for both horizontal and vertical bar charts
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
import { Chart } from 'chart.js/auto';
import { TopResultsFilterContext } from "../../../contexts/TopResultsFilter.context"
import { useNavigate} from "react-router-dom";
import { click } from "@testing-library/user-event/dist/click";

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
  min-width: 300px;
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


const VerticalBarChart = ({ title, data }) => {
  const {topResultMatch, setTopResultMatch, topResultRange, setTopResultRange, topResultSentiment, setTopResultSentiment} = useContext(TopResultsFilterContext)
  const navigate = useNavigate();

  const options = {
    // No need to set indexAxis for a vertical bar chart
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          generateLabels: function(chart) {
            if (chart.data.datasets.length !== chart.data.labels.length) {
              return ["Positive", "Negative", "Neutral"].map((label, index) => ({
                text: label,
                fillStyle: chart.data.datasets[index].backgroundColor,
                hidden: false,
                index: index
              }));
            } else {
              // If the number of datasets and labels are equal, use the default legend generation
              return Chart.defaults.plugins.legend.labels.generateLabels(chart);
            }
          }
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    onClick: (event, elements) => {
      if (elements.length > 0){
        const clickedElement = elements[0];
        console.log("data:", data)
        console.log("clickedElement:", clickedElement)
        if (data.datasets.length == data.labels.length){
          setTopResultMatch(data.labels[clickedElement.datasetIndex])
          setTopResultRange("none")
          setTopResultSentiment("none")
        }
        else{
          setTopResultMatch(data.labels[clickedElement.index])
          setTopResultRange("none")
          if (clickedElement.datasetIndex%3==2){
            setTopResultSentiment("Neutral")
          }
          else if (clickedElement.datasetIndex%3==1){
            setTopResultSentiment("Negative")
          }
          else if (clickedElement.datasetIndex%3==0){
            setTopResultSentiment("Positive")
          }
        }
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

export default VerticalBarChart;
