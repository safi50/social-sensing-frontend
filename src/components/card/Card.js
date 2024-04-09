import React from "react";
import styled from "styled-components";
const HoverImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 1rem;
  display: none; // Initially hidden
`;

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
    ${HoverImage} {
      display: block;
    }
  }
`;
const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
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

// Card showing variou inforamtion on dashboard like "Sentiments", "Reach", etc.
const Card = ({ image, title, infoText, percentage }) => {
  return (
    <CardContainer>
      <TopRow>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Img src={image} />
          <Title>{title}</Title>
          <Img src="/danger-circle.svg" />
        </div>

        <div style={{ display: "flex", justifySelf: "flex-end" }}>
          <HoverImage src="maximize-2.svg" />
          <HoverImage src="log-out.svg" />
          <HoverImage src="more-vertical.svg" />
        </div>
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
