import React, { useState, useEffect, useContext } from 'react';
import { Wordcloud } from '@visx/wordcloud';
import ResizeDetector from 'react-resize-detector';
import axios from 'axios';
import Spinner from './spinner'; 
import { CompareKeywordContext } from "../../contexts/CompareKeyword.context";
import { LDA_URL } from '../../utils/api';


// component showing word cloud of emojis
const EmojiCloudComponent = ({ timeRange }) => {
  const [svgWidth, setSvgWidth] = useState(600); 
  const [svgHeight, setSvgHeight] = useState(500); 
  const [emojis, setEmojis] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    data,
    deleteDataByName,
    filters: contextFilters,
    setFilters: setContextFilters,
    clearFilters,
  } = useContext(CompareKeywordContext);

  let combinedTweetsText = data.reduce((acc, current) => {
    // Check if the current object has the tweetsText property to avoid errors
    if (current.tweetsText) {
      return acc.concat(current.tweetsText);
    } else {
      return acc;
    }
  }, []); // Start with an empty array

  const updateSvgSize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 400) {
      setSvgWidth(300); 
      setSvgHeight(600); 
    } else if (windowWidth < 630) {
      setSvgWidth(400); 
      setSvgHeight(600); 
    } else {
      setSvgWidth(700); 
      setSvgHeight(600); 
    }
  };

  // get the emoji weights based on the tweets text from API
  useEffect(() => {
    const fetchEmojis = async () => {
      try {
        setLoading(true);
        let url = LDA_URL + "/lda/emojis";
        const response = await axios.post(url, {tweets: combinedTweetsText}); 
        setEmojis(response.data.map(emoji => ({
          text: emoji.emoji, 
          value: emoji.value,
        })));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching emoji data", error);
        setLoading(false);
      }
    };

    fetchEmojis();
    window.addEventListener('resize', updateSvgSize);

    return () => {
      window.removeEventListener('resize', updateSvgSize);
    };
  }, [timeRange]);

  const emojiCloudProps = {
    width: svgWidth,
    height: svgHeight,
    words: emojis,
    fontSize: (emoji) => Math.sqrt(emoji.value) * 5,
    rotate: (emoji) => emoji.value % emoji.value,
    font: 'Arial',
    fontWeight: 'bold',
    fontStyle: 'italic',
    spiral: 'archimedean',
    random: () => 0.5,
  };

  if (loading) {
    return <Spinner />; // Show spinner while loading
  }

  return (
    <div className="responsive-emoji-cloud-container">
      <Wordcloud {...emojiCloudProps}>
        {(cloudEmojis) => cloudEmojis.map((emoji, i) => (
          <text
            key={i}
            fontSize={emoji.size}
            fontWeight={emoji.weight}
            fontFamily={emoji.font}
            transform={`translate(${emoji.x}, ${emoji.y}) rotate(${emoji.rotate})`}
            textAnchor="middle"
          >
            {emoji.text}
          </text>
        ))}
      </Wordcloud>
      <ResizeDetector handleWidth handleHeight onResize={updateSvgSize} />
    </div>
  );
};

export default EmojiCloudComponent;
