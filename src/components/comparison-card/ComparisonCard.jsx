import React from "react";
import styled from "styled-components";

// Styled-component for the card container
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  flex-grow: 1;
  background-color: #fff;
  width: 100%;
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
  align-items: center;
`;
const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  width: 100%;
  gap: 4rem;
  flex-wrap: wrap;
`;
const Img = styled.img`
  width: 2rem;
`;
const Title = styled.p`
  font-size: 1.6rem;
  font-weight: 700;

  margin-right: 1rem;
  margin-bottom: 0;
  color: #000;
`;

const InfoText = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #6631f7;
`;
const MutedText = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 0;
`;

const CompareItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 200px;
  align-items: flex-start;
  flex-grow: 1;

  &:not(:last-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
const infoTextColors = ["#6631F7", "#F3B03D", "#E60000", "#EE8733"];

export const ComparisonCard = ({ image, title, infoText, percentage }) => {
  return (
    <CardContainer>
      <TopRow>
        <Title>{title}</Title>
        <Img src="/danger-circle.svg" />
      </TopRow>
      <BottomRow>
        {Array.from({ length: 4 }, (_, index) => (
          <CompareItem key={index}>
            <InfoText
              style={{ color: infoTextColors[index % infoTextColors.length] }}
            >
              Info Text
            </InfoText>
            <MutedText>Lahore Car Show</MutedText>
          </CompareItem>
        ))}
      </BottomRow>
    </CardContainer>
  );
};
