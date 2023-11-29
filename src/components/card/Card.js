import React from "react";
import styled from "styled-components";

// Styled-component for the card container
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
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
`;
const Title = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  margin-left: 1rem;
  margin-right: 1rem;
  color: #000;
`;

const InfoText = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #6631f7;
`;

// The actual Card component
const Card = ({ image, title, infoText, percentage }) => {
  return (
    <CardContainer>
      <TopRow>
        <Img src={image} />
        <Title>{title}</Title>
        <Img src="/danger-circle.svg" />
      </TopRow>
      <BottomRow>
        <InfoText>{infoText}</InfoText>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Img src="/trendup.svg" />
          <Title>{percentage}</Title>
        </div>
      </BottomRow>
    </CardContainer>
  );
};

export default Card;
