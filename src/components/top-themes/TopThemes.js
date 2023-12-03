import styled from "styled-components";
import WordCloudComponent from "./wordcloud";
import EmojiCloudComponent from "./emojicloud";
import { useState } from "react";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  border-radius: 1rem;
  background-color: #fff;
  padding: 2rem;
  box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);
`;

const OuterRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Img = styled.img`
  width: 2rem;
`;

const Title = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  margin-right: 1rem;
  color: #000;
`;

const CustomSelect = styled.select`
  height: 40px;
  width: 200px;
  border-radius: 0.6rem;
  border: 0.8px solid #888888;
  padding: 5px;
  font-size: 1.35rem;
  color: #888888;

  option:hover {
    background-color: #F1EBFF; 
    color: #6631F7; 
  }
`;

const WordCloudStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export default function TopThemes() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Container>
      <OuterRow>
        <Row>
          <Title>Top Themes</Title>
          <Img src="/danger-circle.svg" />
        </Row>
        <Row>
          <CustomSelect onChange={handleSelectChange} value={selectedOption}>
            <option>Select theme type</option>
            <option value="TopTheme">☆ Top Theme</option>
            <option value="Hashtags"># Hashtags</option>
            <option value="Account">@ Account</option>
            <option value="Bio">𝐓 Bio</option>
            <option value="Emojis">☺ Emojis</option>
          </CustomSelect>
        </Row>
      </OuterRow>
      <WordCloudStyle>
        {selectedOption === "Bio" && <WordCloudComponent />}
        {selectedOption === "Emojis" && <EmojiCloudComponent />}
      </WordCloudStyle>
    </Container>
  );
}
