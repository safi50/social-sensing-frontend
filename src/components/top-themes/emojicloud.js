import React, { useState, useEffect } from 'react';
import { Wordcloud } from '@visx/wordcloud';
import ResizeDetector from 'react-resize-detector';

const emojis = [
  { text: '😀', value: 100 },
  { text: '😍', value: 80 },
  { text: '🚀', value: 70 },
  { text: '🎉', value: 60 },
  { text: '🌟', value: 90 },
  { text: '❤️', value: 75 },
  { text: '🍀', value: 65 },
  { text: '🌈', value: 85 },
  { text: '🐱', value: 95 },
  { text: '🐶', value: 88 },
];

const EmojiCloudComponent = () => {
  const [svgWidth, setSvgWidth] = useState(600); 
  const [svgHeight, setSvgHeight] = useState(500); 

  const updateSvgSize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 400) {
      // For smaller screens
      setSvgWidth(300); 
      setSvgHeight(600); 
    } else {
      // For larger screens
      setSvgWidth(700); 
      setSvgHeight(600); 
    }
  };

  const getEmoji = emoji => ({
    text: emoji.text,
    value: emoji.value,
  });

  const calculateEmojiSize = (svgWidth) => {
    if (svgWidth < 400) {
      return emoji => emoji.value * 0.5; 
    } else {
      return emoji => emoji.value * 0.7; 
    }
  };

  useEffect(() => {
    updateSvgSize();

    window.addEventListener('resize', updateSvgSize);

    return () => {
      window.removeEventListener('resize', updateSvgSize);
    };
  }, []);

  const emojiCloudProps = {
    width: svgWidth,
    height: svgHeight,
    words: emojis.map(getEmoji),
    fontSize: svgWidth > 425 ? emoji => emoji.value : calculateEmojiSize(svgWidth),
    rotate: emoji => emoji.value % 10,
    font: 'Arial',
    fontWeight: 'bold',
    fontStyle: 'italic',
    spiral: 'archimedean',
    random: () => Math.random(),
  };

  return (
    <div className="responsive-emoji-cloud-container">
      <Wordcloud {...emojiCloudProps}>
        {cloudEmojis => cloudEmojis.map((emoji, i) => (
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
