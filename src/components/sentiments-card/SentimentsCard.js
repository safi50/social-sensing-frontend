import React from "react";
import styled from "styled-components";

// Styled-component for the card container
const CardContainer = styled.div`
  display: flex;
  min-width: 300px;

  flex-direction: column;
  padding: 2rem;
  flex-grow: 1;
  background-color: #fff;
  width: 23%;
  border-radius: 1rem;
  box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 0.8rem 1.6rem 0 rgba(0, 0, 0, 0.2);
  }
`;
const TopRow = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;
const Img = styled.img`
  width: 2rem;
  margin-right: 1rem;
`;
const Title = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  margin-right: 1rem;
  color: #000;
`;

const SentimentsCard = ({ title, happy, sad }) => {
  return (
    <CardContainer>
      <TopRow>
        <Title>{title}</Title>
        <Img src="/danger-circle.svg" />
      </TopRow>
      <BottomRow>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Img src="/smile.svg" />
          <Title>{happy}</Title>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Img src="/frown.svg" />
          <Title>{sad}</Title>
        </div>
      </BottomRow>
    </CardContainer>
  );
};

export default SentimentsCard;
