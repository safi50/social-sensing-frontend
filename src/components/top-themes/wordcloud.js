import React, { useState, useEffect, useContext } from "react";
import { Wordcloud } from "@visx/wordcloud";
import axios from "axios";
import Spinner from './spinner'; 
import { CompareKeywordContext } from "../../contexts/CompareKeyword.context";
import { LDA_URL } from "../../utils/api";

const colors = [
  "#08268A", "#263F74", "#5B93C7", "#D95738", "#EE8633", "#EF9E5C",
];

// Generates a consistent color based on the text of the word
const getColor = (word) => {
  let hash = 0;
  for (let i = 0; i < word.length; i++) {
    hash = word.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};

const WordCloudComponent = ({ timeRange }) => {
  const [svgWidth, setSvgWidth] = useState(800);
  const [svgHeight, setSvgHeight] = useState(500);
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    data,
    deleteDataByName,
    filters: contextFilters,
    setFilters: setContextFilters,
    clearFilters,
  } = useContext(CompareKeywordContext);


  // convert the tweets object into array of tweets text
  let combinedTweetsText = data.reduce((acc, current) => {
    // Check if the current object has the tweetsText property to avoid errors
    if (current.tweetsText) {
      return acc.concat(current.tweetsText);
    } else {
      return acc;
    }
  }, []); // Start with an empty array

  useEffect(() => {
    const fetchWords = async () => {
      setLoading(true);
      try {
        setLoading(true);
        let url = LDA_URL + "/lda";
        const response = await axios.post(url, {tweets: combinedTweetsText}); 
        const wordsWithColor = response.data.map(word => ({
          ...word,
          color: getColor(word.text)  // Adding color property here
        }));
        setWords(wordsWithColor);        setLoading(false);
      } catch (error) {
        console.error("Error fetching word data", error);
        setLoading(false);
      }
    };

    fetchWords();
  }, [timeRange, data]);

  const wordcloudProps = {
    width: svgWidth,
    height: svgHeight,
    words,
    fontSize: (word) => Math.sqrt(word.value) * 5,
    rotate: () => 0,
    font: "Arial",
    fontWeight: "bold",
    fontStyle: "italic",
    spiral: "archimedean",
    random: () => 0.5,
  };

  if (loading) return <Spinner />;

  return (
    <div className="responsive-wordcloud-container">
      <Wordcloud {...wordcloudProps}>
        {cloudWords => cloudWords.map((word, i) => (
          <text
            key={i}
            fontSize={word.size}
            fontWeight={word.weight}
            fontFamily={word.font}
            transform={`translate(${word.x}, ${word.y}) rotate(${word.rotate})`}
            textAnchor="middle"
            style={{ fill: word.color }}
          >
            {word.text}
          </text>
        ))}
      </Wordcloud>
    </div>
  );
};

export default WordCloudComponent;
