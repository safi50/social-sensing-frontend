import styled from "styled-components";
import WordCloudComponent from "./wordcloud";
import EmojiCloudComponent from "./emojicloud";

const Container = styled.div`
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
const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 200px;
  border-radius: 0.6rem;
  border: 0.8px solid #888888;
`;
const Placeholder = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: #888888;
`;

const WordCloudStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden; 

`;

export default function TopThemes() {
  return (
    <Container>
      <OuterRow>
        <Row>
          <Title>Top Themes</Title>
          <Img src="/danger-circle.svg" />
        </Row>
        <Row>
          <Options>
            <Placeholder>Select Theme type</Placeholder>
          </Options>
        </Row>
      </OuterRow>
      <WordCloudStyle>
        <WordCloudComponent />
        {/* <EmojiCloudComponent /> */}
      </WordCloudStyle>
    </Container>
  );
}
