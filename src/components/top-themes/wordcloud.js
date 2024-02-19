import React, { useState, useEffect } from "react";
import { Wordcloud } from "@visx/wordcloud";
import ResizeDetector from "react-resize-detector";
import axios from "axios";
import Spinner from './spinner';   
//  data
// const words = [
//   { text: "Test", value: 500 },
//   { text: "web", value: 100 },
//   { text: "Test", value: 10 },
//   { text: "Walee", value: 500 },
//   { text: "Inspired", value: 350 },
//   { text: "visualisation", value: 180 },
//   { text: "data", value: 200 },
//   { text: "imagine", value: 100 },
//   { text: "css", value: 100 },
//   { text: "html", value: 100 },
//   { text: "python", value: 100 },
//   { text: "influence", value: 100 },
//   { text: "Inspired", value: 350 },
//   { text: "Data Moderation", value: 200 },
//   { text: "analytics", value: 100 },
//   { text: "css", value: 100 },
//   { text: "html", value: 100 },
//   { text: "python", value: 100 },
//   { text: "java", value: 100 },
//   { text: "innovate", value: 300 },
//   { text: "go Walee!", value: 200 },
//   { text: "In-app Currencies", value: 250 },
//   { text: "Inspired", value: 450 },
// ];

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

const WordCloudComponent = ({ timeRange }) => {
  const [svgWidth, setSvgWidth] = useState(800);
  const [svgHeight, setSvgHeight] = useState(500);
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);

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
    const fetchWords = async () => {
      try {
        setLoading(true);
        let url = "https://lda-iwz8.onrender.com/lda/time/" + timeRange.toLowerCase();
        const response = await axios.get(url); 
        setWords(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching word data", error);
        setLoading(false);
      }
    };

    fetchWords();
    window.addEventListener("resize", updateSvgSize);

    return () => {
      window.removeEventListener("resize", updateSvgSize);
    };


  }, [timeRange]);

  const wordcloudProps = {
    width: svgWidth,
    height: svgHeight,
    words: words.map(getWord),
    fontSize: (word) => Math.sqrt(word.value) * 5,
    rotate: (word) => word.value % word.value,
    font: "Arial",
    fontWeight: "bold",
    fontStyle: "italic",
    spiral: "archimedean",
    random: () => Math.random(),
  };

  if (loading) {
    return <Spinner />; // Show spinner while loading
  }

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
