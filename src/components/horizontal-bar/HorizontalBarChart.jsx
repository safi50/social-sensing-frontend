import React from "react";
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
  width: 45%;
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
};

export const HorizontalBarChartComponent = ({ title, data }) => {
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
