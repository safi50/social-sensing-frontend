import React from "react";
import styled from "styled-components";
import twitterIcon from "../../assets/heart.svg";
import shareIcon from "../../assets/share.svg";

const IconsContainer = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  display: none;
  gap: 6px;
  align-items: center;
  justify-content: center;
  padding: 4px;
  margin: 0 4px;
`;

const HoverIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  padding: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  transition:
    background-color 0.3s,
    transform 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    transform: scale(1.1);
  }
`;

const StoryContainer = styled.div`
position: relative;
  width: 17%; // Adjust the width as needed
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
  margin: 1rem;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);

    ${IconsContainer} {
      display: flex;
    }
  }
`;

const Reach = styled.div`
  position: absolute;
  bottom: 12px;
  left: 8px;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 1.7rem;
  font-weight: 500;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const ReachLabel = styled.span`
  color: white;
  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;
`;

const ImageSection = styled.div`
  position: relative; // Needed to position the ReachLabel absolutely within
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center;
  object-fit: cover;
  height: 150px;
`;




const data = {
  imageUrl: "https://picsum.photos/300/150",
  mainText:
    "🤝🎯TARGET COMPLETED 🔥🔥 HERE'S 10U #NBA MAX BET 👀⚠️💵 🏀 Heat vs Celtics 🎯 OVER (216.5) @ 1.5",
  publishedInfo: "Published 11 hours ago",
  handleName: "@JohnDoe",
  reach: "2.1K",
};

const ResultCardGrid = ({ imageUrl, mainText, publishedInfo, handleName }) => {
  return (
    <StoryContainer>
      <ImageSection imgUrl={data.imageUrl}>
        <Reach>
          {data.reach}
          <ReachLabel> Reach</ReachLabel>
        </Reach>
      </ImageSection>
      <IconsContainer>
        <HoverIcon src={shareIcon} alt="Share" />
      </IconsContainer>
    </StoryContainer>
  );
};

export default ResultCardGrid;
