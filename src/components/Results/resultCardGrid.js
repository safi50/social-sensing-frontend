import React from 'react';
import styled from 'styled-components';
import twitterIcon from '../../assets/heart.svg'; 

const StoryContainer = styled.div`
  width: 17%; // Adjust the width as needed
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  margin: 1rem;
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
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;
  object-fit: cover;
  height: 150px; 
`;

const data = 
  {
    imageUrl: 'https://picsum.photos/300/150',
    mainText: "🤝🎯TARGET COMPLETED 🔥🔥 HERE'S 10U #NBA MAX BET 👀⚠️💵 🏀 Heat vs Celtics 🎯 OVER (216.5) @ 1.5",
    publishedInfo: 'Published 11 hours ago',
    handleName: '@JohnDoe',
    reach: '2.1K'
  };

const ResultCardGrid = ({ imageUrl, mainText, publishedInfo, handleName }) => {
  return (
    <StoryContainer>
<ImageSection imgUrl={data.imageUrl}>
        <Reach>{data.reach}
        <ReachLabel> Reach</ReachLabel>
        </Reach> 
      </ImageSection>     
    </StoryContainer>
  );
};

export default ResultCardGrid;
