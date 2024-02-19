import React, { useState, useEffect } from 'react';
import { Wordcloud } from '@visx/wordcloud';
import ResizeDetector from 'react-resize-detector';
import axios from 'axios';
import Spinner from './spinner'; 

const EmojiCloudComponent = ({ timeRange }) => {
  const [svgWidth, setSvgWidth] = useState(600); 
  const [svgHeight, setSvgHeight] = useState(500); 
  const [emojis, setEmojis] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchEmojis = async () => {
      try {
        setLoading(true);
        let url = `https://lda-iwz8.onrender.com/lda/emojis/time/${timeRange.toLowerCase()}`; // Update this URL to your emoji LDA endpoint
        const response = await axios.get(url); 
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
    random: () => Math.random(),
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
