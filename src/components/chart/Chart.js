import React, { useContext, useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { TopResultsFilterContext } from "../../contexts/TopResultsFilter.context";
import { useNavigate, useLocation } from "react-router-dom";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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

const ChartComponent = ({ title, data, queryMatches, sentimentType, timeRange }) => {
  const {topResultMatch, setTopResultMatch, topResultRange, setTopResultRange, topResultSentiment, setTopResultSentiment} = useContext(TopResultsFilterContext)
  const navigate = useNavigate();

  const options = {
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
      y: {
        beginAtZero: true,
      },
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const clickedElement = elements[0];
        console.log("title:", title)
        console.log("data:", data)
        console.log("Clicked element:", clickedElement)
        console.log("Time range:", data.labels[clickedElement.index])
        setTopResultRange(isNaN(data.labels[clickedElement.index])? data.labels[clickedElement.index]: `${24-clickedElement.index}`)
        setTopResultMatch(queryMatches[0])
        setTopResultSentiment(data.datasets.length == 1? 'none': data.datasets[clickedElement.datasetIndex].label)
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
      <Line data={data} options={options} />
    </ChartContainer>
  );
};

ChartComponent.propTypes = {
  pointColor: PropTypes.string,
};

export default ChartComponent;