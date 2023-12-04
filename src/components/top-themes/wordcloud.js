import React, { useState, useEffect } from "react";
import { Wordcloud } from "@visx/wordcloud";
import ResizeDetector from "react-resize-detector";

//  data
const words = [
  { text: "react", value: 100 },
  { text: "javascript", value: 100 },
  { text: "web", value: 100 },
  { text: "programming", value: 100 },
  { text: "coding", value: 100 },
  { text: "visualisation", value: 100 },
  { text: "data", value: 100 },
  { text: "design", value: 100 },
  { text: "analytics", value: 100 },
  { text: "css", value: 100 },
  { text: "html", value: 100 },
  { text: "python", value: 100 },
  { text: "java", value: 100 },
  // Add more words

  { text: "Hello", value: 300 },
  { text: "World", value: 200 },
  { text: "Mr. Robot", value: 250 },
  // Add more data

  { text: "Test", value: 10 },
  { text: "Walee", value: 500 },
  { text: "Inspired", value: 350 },
  { text: "visualisation", value: 100 },
  { text: "data", value: 100 },
  { text: "design", value: 100 },
  { text: "analytics", value: 100 },
  { text: "css", value: 100 },
  { text: "html", value: 100 },
  { text: "python", value: 100 },
  { text: "java", value: 100 },
  { text: "Test", value: 10 },
  { text: "Walee", value: 500 },
  { text: "Inspired", value: 350 },
  { text: "design", value: 100 },
  { text: "analytics", value: 100 },
  { text: "css", value: 100 },
  { text: "html", value: 100 },
  { text: "python", value: 100 },
  { text: "java", value: 100 },
  { text: "Hello", value: 300 },
  { text: "World", value: 200 },
  { text: "Mr. Robot", value: 250 },
  { text: "Test", value: 10 },
  { text: "Walee", value: 500 },
  { text: "Inspired", value: 350 },
];

// map the word data
const getWord = (word) => ({
  text: word.text,
  value: word.value,
});

const getRandomColor = () => {
  const colors = [
    "#08268A",
    "#263F74",
    "#5B93C7",
    "#D95738",
    "#EE8633",
    "#EF9E5C",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const WordCloudComponent = () => {
  const [svgWidth, setSvgWidth] = useState(600);
  const [svgHeight, setSvgHeight] = useState(500);

  // Update SVG size based on window width
  const updateSvgSize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 426) {
      // For smaller screens
      setSvgWidth(280);
      setSvgHeight(500);
    } else if (windowWidth < 767) {
      setSvgWidth(380);
      setSvgHeight(500);
    } else if (windowWidth < 1024) {
      // For larger screens
      setSvgWidth(700);
      setSvgHeight(500);
    }
  };

  useEffect(() => {
    updateSvgSize();

    // window resize events
    window.addEventListener("resize", updateSvgSize);

    return () => {
      window.removeEventListener("resize", updateSvgSize);
    };
  }, []);

  const wordcloudProps = {
    width: svgWidth,
    height: svgHeight,
    words: words.map(getWord),
    fontSize: (word) => Math.sqrt(word.value) * 5,
    rotate: (word) => word.value % 10,
    font: "Arial",
    fontWeight: "bold",
    fontStyle: "italic",
    spiral: "archimedean",
    random: () => Math.random(),
  };

  return (
    <div className="responsive-wordcloud-container">
      <Wordcloud {...wordcloudProps}>
        {(cloudWords) =>
          cloudWords.map((word, i) => (
            <text
              key={i}
              fontSize={word.size}
              fontWeight={word.weight}
              fontFamily={word.font}
              transform={`translate(${word.x}, ${word.y}) rotate(${word.rotate})`}
              textAnchor="middle"
              style={{ fill: getRandomColor() }}
            >
              {word.text}
            </text>
          ))
        }
      </Wordcloud>
      <ResizeDetector handleWidth handleHeight onResize={updateSvgSize} />
    </div>
  );
};

export default WordCloudComponent;
