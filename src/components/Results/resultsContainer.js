import * as XLSX from "xlsx";
import pptxgen from "pptxgenjs";
import styled from "styled-components";
import { useState, useContext, useMemo } from "react";
import ResultCard from "./resultCard";
import ResultCardCompact from "./resultCardCompact";
import ResultCardStory from "./resultCardStory";
import ResultCardGrid from "./resultCardGrid";
import WordCloudComponent from "../top-themes/wordcloud";
import EmojiCloudComponent from "../top-themes/emojicloud";
import Select from "react-select";
import { TopResultsFilterContext } from "../../contexts/TopResultsFilter.context";
import profileImage from "../../assets/profile-pic.jpeg";
import sharedImage from "../../assets/cool-profile-picture.jpeg";
import { CompareKeywordContext } from "../../contexts/CompareKeyword.context";
import { CSVLink } from "react-csv";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { saveAs } from "file-saver";
import { TempInitialDate } from "../../contexts/dummyData";
import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  Path,
} from "@react-pdf/renderer";

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

const CustomSelect = styled.select`
  height: 40px;
  width: 200px;
  border-radius: 0.6rem;
  border: 0.8px solid #888888;
  padding: 7px;
  font-size: 1.35rem;
  color: #888888;
  font-weight: 300;
  margin-left: 0.5rem;
  margin-right: 0.5rem;

  option:hover {
    background-color: #f1ebff;
    color: #6631f7;
  }
`;

// Tabs Container
const TabsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
`;

// Individual Tab
const Tab = styled.div`
  margin-left: 1rem;
  padding-bottom: 2rem;
  padding-right: 1.5rem;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  font-size: 1.5rem;
  font-weight: 400;
  color: #111111;

  &.active {
    border-color: #6631f7;
    color: #6631f7;
  }
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

const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;
  margin-bottom: 1rem;
`;

const ExportButton = styled.button`
  background-color: #6937f2;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 20px;
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 300;
`;

const WordCloudStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const ExportDropdown = styled(CustomSelect)`
  position: absolute;
  top: 48%;
  left: 84%;
  margin-top: 5px;
`;

// Define custom styles
const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#6937f2",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "2px 20px",
    marginLeft: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "1.5rem",
    fontWeight: "300",
  }),
  indicatorSeparator: () => {},
  dropdownIndicator: (defaultStyles) => ({
    ...defaultStyles,
    "& svg": { display: "none" },
  }),
  option: (provided, { isFocused }) => ({
    ...provided,
    backgroundColor: isFocused ? "#F1EBFF" : "white",
    fontSize: "1.25rem",
    fontWeight: "500",
    color: isFocused ? "#6631F7" : "#888888",
    margin: "0",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "white",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
};

const exportOptions = [
  { value: "Normal", label: "Normal" },
  { value: "PDF", label: "PDF" },
  { value: "XLS", label: "XLS" },
  { value: "CSV", label: "CSV" },
  // { value: "PPTL", label: "PPT Landscape" },
  { value: "PPTP", label: "PPT" },
];

const ResultsCard = () => {
  const [activeTab, setActiveTab] = useState("topResults");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedLayout, setSelectedLayout] = useState("Normal");
  const [selectedExport, setSelectedExport] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("Bio");
  const [tweets, setTweets] = useState([]);
  const [isClickedPDF, setIsClickedPDF] = useState(false);

  const {
    topResultMatch,
    setTopResultMatch,
    topResultRange,
    setTopResultRange,
    topResultSentiment,
    setTopResultSentiment,
  } = useContext(TopResultsFilterContext);
  const { data } = useContext(CompareKeywordContext);

  // get random time value
  const generateRandomTime = () => {
    let randomTime = Math.floor(Math.random() * 24); // Random hour
    if (randomTime < 10) {
      randomTime = `0${randomTime}`;
    }
    const randomMinutes = Math.floor(Math.random() * 60); // Random minutes
    const randomHourString = `${randomTime}:${
      randomMinutes < 10 ? "0" : ""
    }${randomMinutes}`;
    return randomHourString;
  };


  // generate tweets with random names and time
  const generateRandomTweetsNormal = () => {
    const sentiments = ["Positive", "Negative", "Neutral"];
    const profiles = [
      { name: "John Doe", handle: "@johndoe" },
      { name: "Jane Smith", handle: "@janesmith" },
      { name: "Alice Johnson", handle: "@alicejohnson" },
    ];

    const tweets = [];
    // applying keyword filter
    const matchedData = data.filter((match) => match.name === topResultMatch);
    if (!matchedData.length) return [];

    // filter tweets based on sentiment
    const matchedResult = matchedData[0].tweets[0].data.filter((match, idx) => {
      return topResultSentiment.toLowerCase() === "none" // select all sentiment tweets
        ? true
        : matchedData[0].tweetsSentiments[idx].toLowerCase() ===
            topResultSentiment.toLowerCase();
    });

    // selecting tweets in the time range specified
    const timeMatch = matchedResult.filter((match) => {
      if (topResultRange.toLowerCase() === "none") return true;

      let comparisonStartDate;
      let comparisonEndDate;

      // Check if topResultRange is a number (hours ago) or a date string ("7 March")
      if (!isNaN(topResultRange)) {
        // topResultRange is a number, calculate the date for 'topResultRange' hours ago in 2022

        const initialDate = new Date(TempInitialDate);
        comparisonStartDate = new Date(
          initialDate.getTime() - topResultRange * 60 * 60 * 1000
        );
        comparisonEndDate = new Date(
          comparisonStartDate.getTime() + 60 * 60 * 1000
        ); // Plus 1 hour
      } else {
        // topResultRange is a date string, create a Date object for that date in 2022

        comparisonStartDate = new Date(`2022 ${topResultRange} 00:00:00`);
        comparisonEndDate = new Date(`2022 ${topResultRange} 23:59:59`);
      }

      const matchDate = new Date(match.created_at);

      // Return true if matchDate lies inside start and end date filter
      return matchDate >= comparisonStartDate && matchDate <= comparisonEndDate;
    });

    timeMatch.map((match, idx) => {
      console.log("Match:", match);
      const profileData = {
        name: match.name,
        handle: match.username,
        profileImage: profileImage,
        content: match.text,
        sharedImage: match.thumbnail,
        sentiment:
          topResultSentiment != "none"
            ? topResultSentiment
            : matchedData[0].tweetsSentiments[idx],
        matches: topResultMatch,
        reach: match.impressions,
        engagement: match.quote_count + match.retweet_count,
        trending: match.quote_count,
        timePublished: isNaN(topResultRange)
          ? `${topResultRange} ${generateRandomTime()}`
          : `${topResultRange} hours ago`,
        location: "Pakistan",
        platform: "Twitter.com",
      };
      const additionalMetrics = {
        shares: match.impressions,
        hearts: match.like_count,
        users: `${(Math.random() * 10).toFixed(0)}k`,
      };

      tweets.push([{ profileData, additionalMetrics }]);
    });
    for (let i = 0; i < 13; i++) {
      const randomProfile =
        profiles[Math.floor(Math.random() * profiles.length)];

      let randomTime = Math.floor(Math.random() * 24); // Random hour
      if (randomTime < 10) {
        randomTime = `0${randomTime}`;
      }
      const randomMinutes = Math.floor(Math.random() * 60); // Random minutes
      const randomHourString = `${randomTime}:${
        randomMinutes < 10 ? "0" : ""
      }${randomMinutes}`;
      let randomTimePublished = `${topResultRange} ${randomHourString}`;
      if (!isNaN(topResultRange)) {
        randomTimePublished = `${topResultRange} hours ago`;
      } else if (topResultRange == "none") {
        randomTimePublished = `${
          Math.floor(Math.random() * 12) + 1
        } Feb ${randomHourString}`;
      }

      let sentiment = topResultSentiment;
      if (sentiment === "none") {
        sentiment = sentiments[Math.floor(Math.random() * sentiments.length)];
      }
    }
    setTweets(tweets);
    return tweets;
  };

  const convertStringResultsToNumber = (strnum) => {
    return parseFloat(isNaN(strnum) ? strnum.slice(0, -1) : strnum);
  };

  function convertToDate(timePublished) {
    const currentYear = new Date().getFullYear(); // Get the current year
    // Prepend the current year and convert to a Date object
    const date = new Date(`${timePublished} ${currentYear}`);
    return date;
  }

  // Use useMemo to sort the tweets based on the selectedOption
  const sortedTweets = useMemo(() => {
    const tweets = generateRandomTweetsNormal(); // Generate tweets
    console.log("Tweets:", tweets);
    // Sort the tweets based on the selectedOption
    return tweets.sort((a, b) => {
      switch (selectedOption) {
        case "Engagement":
          return (
            convertStringResultsToNumber(b[0].profileData.engagement) -
            convertStringResultsToNumber(a[0].profileData.engagement)
          );
        case "PotentialReach":
          return (
            convertStringResultsToNumber(b[0].profileData.reach) -
            convertStringResultsToNumber(a[0].profileData.reach)
          );
        case "TrendingScore":
          return (
            convertStringResultsToNumber(b[0].profileData.trending) -
            convertStringResultsToNumber(a[0].profileData.trending)
          );
        case "CommentCount":
          return (
            convertStringResultsToNumber(b[0].additionalMetrics.shares) -
            convertStringResultsToNumber(a[0].additionalMetrics.shares)
          );
        case "Published":
          if (!isNaN(topResultRange)) {
            return 0;
          }
          return (
            convertToDate(b[0].profileData.timePublished) -
            convertToDate(a[0].profileData.timePublished)
          );
        default:
          return 0; // Default case if no sorting is needed
      }
    });
  }, [selectedOption]); // Re-run the sorting every time selectedOption changes

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleLayoutChange = (event) => {
    setSelectedLayout(event.target.value);
  };

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };

  // export the results into a specific file format
  const handleExportChange = (selectedOption) => {
    if (!selectedOption) return;

    const selectedExport = selectedOption.value;
    setSelectedExport(selectedExport);

    if (selectedExport === "PDF") {
      setIsClickedPDF(false);
      exportToPDF(tweets);
    } else if (selectedExport === "XLS") {
      exportToXLS(tweets);
    } else if (selectedExport === "CSV") {
      exportToCSV(tweets);
    } else if (selectedExport === "PPTP") {
      exportToPPTP(tweets);
    } else if (selectedExport === "Normal") {
      exportNormal(tweets);
    }
  };

  const exportNormal = (tweets) => {
    const tweetDataString = tweets
      .map((tweet, index) => {
        const profileData = tweet[0].profileData;
        const additionalMetrics = tweet[0].additionalMetrics;
        return (
          `${index + 1}) ` +
          `${profileData.handle || ""},` +
          `${profileData.name || ""},` +
          `${profileData.matches || ""},` +
          `${profileData.content || ""},` +
          `${profileData.sentiment || ""},` +
          `${profileData.timePublished || ""},` +
          `${profileData.location || ""},` +
          `${profileData.platform || ""},` +
          `${profileData.engagement || ""},` +
          `${profileData.reach || ""},` +
          `${profileData.trending || ""},` +
          `${additionalMetrics.hearts || ""},` +
          `${additionalMetrics.shares || ""},` +
          `${additionalMetrics.users || ""}`
        );
      })
      .join("\n");
    const blob = new Blob([tweetDataString], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "export.txt";
    link.click();
  };

  const MyPdf = ({ tweets }) => {
    const data = [5, 8, 12, 10, 7]; // Replace with your data extraction logic

    // Calculate maximum data value for scaling the chart
    const maxDataValue = Math.max(...data);

    // Define bar width and spacing for customization
    const barWidth = 20;
    const barSpacing = 5;

    // Generate bars using Path elements
    const bars = data.map((value, index) => (
      <Path
        key={index}
        fill="black" // Adjust fill color as needed
        d={`M ${index * (barWidth + barSpacing)} 0 L ${
          index * (barWidth + barSpacing)
        } ${
          (value / maxDataValue) * 100 // Scale based on max value
        }  L ${(index + 1) * barWidth + index * barSpacing} ${
          (value / maxDataValue) * 100
        } L ${(index + 1) * barWidth + index * barSpacing} 0 Z`}
      />
    ));
    
    const pages = [];

    for (let i = 0; i < tweets.length; i += 7) {
      const pageTweets = tweets.slice(i, i + 7);
      pages.push(
        <Page key={i} size="A4" style={styles.page}>
          {pageTweets.map((tweet, index) => (
            <View key={index} style={styles.tweetContainer}>
              <View style={styles.column}>
                <Text style={styles.smallText}>Tweeted</Text>
                <Text style={styles.text}>{tweet[0].profileData.content}</Text>
                <Text style={styles.smallText}>
                  Published on {tweet[0].profileData.timePublished} |{" "}
                  {tweet[0].profileData.platform} |{" "}
                  {tweet[0].profileData.location} | {tweet[0].profileData.name}
                </Text>
              </View>
              <View style={styles.secondColumn}>
                <Text style={[styles.smallText, styles.smallerText]}>
                  Matches: {tweet[0].profileData.matches}
                </Text>
                <Text
                  style={[
                    styles.smallText,
                    styles.smallerText,
                    sentimentColor(tweet[0].profileData.sentiment),
                  ]}
                >
                  Sentiment: {tweet[0].profileData.sentiment}
                </Text>
                <Text
                  style={[
                    styles.smallText,
                    styles.boldText,
                    styles.smallerText,
                  ]}
                >
                  Engagement: {tweet[0].profileData.engagement}
                </Text>
                <Text style={[styles.smallText, styles.smallerText]}>
                  Potential Reach: {tweet[0].profileData.reach}
                </Text>
                <Text style={[styles.smallText, styles.smallerText]}>
                  Retweets: {tweet[0].additionalMetrics.shares}
                </Text>
                <Text style={[styles.smallText, styles.smallerText]}>
                  Twitter Likes: {tweet[0].additionalMetrics.hearts}
                </Text>
                <Text style={[styles.smallText, styles.smallerText]}>
                  Users: {tweet[0].additionalMetrics.users}
                </Text>
                <Text style={[styles.smallText, styles.smallerText]}>
                  Trending Post: {tweet[0].profileData.trending}
                </Text>
              </View>
            </View>
          ))}
          {bars}
          {renderFooter(i / 7 + 1)}
        </Page>
      );
    }

    return <Document>{pages}</Document>;
  };

  const renderFooter = (pageNumber) => {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerTextLeft}>WALEE-SOCIAL SENSING </Text>
        <Text style={styles.footerTextRight}>Page {pageNumber}</Text>
      </View>
    );
  };

  const sentimentColor = (sentiment) => {
    switch (sentiment) {
      case "Positive":
        return styles.greenText;
      case "Negative":
        return styles.redText;
      default:
        return styles.blueText;
    }
  };

  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      padding: 20,
    },
    tweetContainer: {
      marginBottom: 17,
      borderWidth: 1,
      borderColor: "#1B95E0",
      padding: 10,
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
    column: {
      width: "70%",
      marginRight: "5%",
    },
    secondColumn: {
      width: "25%",
      marginRight: 0,
    },
    heading: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 5,
    },
    text: {
      fontSize: 10,
      marginBottom: 5,
    },
    smallText: {
      fontSize: 10,
      color: "#777",
    },
    boldText: {
      fontWeight: "bold",
      color: "#000",
    },
    greenText: {
      color: "green",
    },
    redText: {
      color: "red",
    },
    blueText: {
      color: "blue",
    },
    smallerText: {
      fontSize: 8,
    },
    footer: {
      position: "absolute",
      marginLeft: 40,
      marginRight: 40,
      bottom: 15,
      left: 0,
      right: 0,
      backgroundColor: "#1B95E0",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderTopWidth: 1,
      borderTopColor: "#999",
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    footerTextLeft: {
      fontSize: 10,
      color: "#fff",
      fontWeight: "bold",
    },
    footerTextRight: {
      fontSize: 10,
      color: "#fff",
    },
  });

  const exportToPDF = ({ tweets }) => (
    <PDFDownloadLink document={<MyPdf tweets={tweets} />} fileName="export.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>
  );

  const handleDownloadClick = () => {
    setTimeout(() => {
      setSelectedExport("");
      setIsClickedPDF(true);
    }, 5000);
  };

  const exportToCSV = (tweets) => {
    const csvData = tweets.map((data, index) => ({
      Handle: data[0].profileData.handle,
      Name: data[0].profileData.name,
      Matches: data[0].profileData.matches,
      Content: `"${data[0].profileData.content.replace(/"/g, '""')}"`,
      Sentiment: data[0].profileData.sentiment,
      TimePublished: data[0].profileData.timePublished,
      Location: data[0].profileData.location,
      Platform: data[0].profileData.platform,
      Engagement: data[0].profileData.engagement,
      Reach: data[0].profileData.reach,
      Trending: data[0].profileData.trending,

      Hearts: data[0].additionalMetrics.hearts,
      Shares: data[0].additionalMetrics.shares,
      Users: data[0].additionalMetrics.users,
    }));
    const csvHeaders = [
      "Handle",
      "Name",
      "Matches",
      "Content",
      "Sentiment",
      "TimePublished",
      "Location",
      "Platform",
      "Engagement",
      "Reach",
      "Trending",
      "Hearts",
      "Shares",
      "Users",
    ];
    const csvReportFile = [csvHeaders.join(",")]
      .concat(csvData.map((row) => Object.values(row).join(",")))
      .join("\n");

    const csvBlob = new Blob([csvReportFile], {
      type: "text/csv;charset=utf-8;",
    });
    saveAs(csvBlob, "export.csv");
  };

  const exportToXLS = (tweets) => {
    const formattedData = tweets.map((tweet) => ({
      Handle: tweet[0].profileData.handle,
      Name: tweet[0].profileData.name,
      Matches: tweet[0].profileData.matches,
      Content: tweet[0].profileData.content,
      Sentiment: tweet[0].profileData.sentiment,
      TimePublished: tweet[0].profileData.timePublished,
      Location: tweet[0].profileData.location,
      Platform: tweet[0].profileData.platform,
      Engagement: tweet[0].profileData.engagement,
      Reach: tweet[0].profileData.reach,
      Trending: tweet[0].profileData.trending,
      Hearts: tweet[0].additionalMetrics.hearts,
      Shares: tweet[0].additionalMetrics.shares,
      Users: tweet[0].additionalMetrics.users,
    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Tweets");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    saveAs(
      new Blob([excelBuffer], { type: "application/octet-stream" }),
      "export.xlsx"
    );
  };

  const exportToPPTP = (tweets) => {
    let positiveCount = 0;
    let negativeCount = 0;
    let neutralCount = 0;

    tweets.forEach((tweet) => {
      switch (tweet[0].profileData.sentiment) {
        case "Positive":
          positiveCount++;
          break;
        case "Negative":
          negativeCount++;
          break;
        default:
          neutralCount++;
          break;
      }
    });

    const totalSentiments = positiveCount + negativeCount + neutralCount;

    const positivePercentage = (positiveCount / totalSentiments) * 100;
    const negativePercentage = (negativeCount / totalSentiments) * 100;
    const neutralPercentage = (neutralCount / totalSentiments) * 100;
    let totalEngagement = 0;
    let totalReach = 0;

    tweets.forEach((tweet) => {
      totalEngagement += tweet[0].profileData.engagement;
      totalReach += tweet[0].profileData.reach;
    });


    // make presentation slides for the resutls page
    let pres = new pptxgen();
    let slide = pres.addSlide();

    slide.addText("Walee-Social Sensing Export Results", {
      x: 2.3,
      y: 0.5,
      fontSize: 24,
      color: "1B95E0",
      bold: true,
    });

    slide.addText(`Searched Hashtag: ${topResultMatch}`, {
      x: 0.8,
      y: 1.1,
      fontSize: 14,
      bold: true,
    });

    let filterText = "";
    if (topResultRange !== "none") {
      filterText += topResultRange;
    }
    if (topResultSentiment !== "none") {
      filterText += ` ${topResultSentiment}`;
    }

    if (filterText !== "") {
      slide.addText(`Filter Applied: ${filterText}`, {
        x: 5.6,
        y: 1.1,
        fontSize: 14,
        bold: true,
      });
    }

    slide.addText("Total Engagement and Reach:", {
      x: 0.8,
      y: 1.7,
      fontSize: 18,
      color: "1B95E0",
      bold: true,
    });

    slide.addText("Sentiment Results:", {
      x: 5.6,
      y: 1.7,
      fontSize: 18,
      color: "1B95E0",
      bold: true,
    });

    let dataChartAreaLine = [
      {
        name: "Reach and Engagement",
        labels: ["Total Reach", "Total Engagement"],
        values: [totalReach, totalEngagement],
      },
    ];

    const dataChartPie = [
      {
        name: "Sentiments",
        labels: ["Positive", "Negative", "Neutral"],
        values: [positivePercentage, negativePercentage, neutralPercentage],
      },
    ];

    slide.addChart(pres.ChartType.bar, dataChartAreaLine, {
      x: 0.8,
      y: 2,
      w: 3.5,
      h: 3,
      chartColors: ["#FFCC00"],
    });

    slide.addChart(pres.ChartType.pie, dataChartPie, {
      x: 4.5,
      y: 2,
      w: 5,
      h: 3,
      chartColors: ["#95eb34", "#FF0000", "#348feb"],
    });

    let slide1 = pres.addSlide();

    const tableHeader = [
      [
        { text: "Handle", options: { color: "ffffff", fill: "1B95E0" } },
        { text: "Matches", options: { color: "ffffff", fill: "1B95E0" } },
        { text: "Tweet", options: { color: "ffffff", fill: "1B95E0" } },
        { text: "Sentiment", options: { color: "ffffff", fill: "1B95E0" } },
        { text: "Published", options: { color: "ffffff", fill: "1B95E0" } },
        { text: "Location", options: { color: "ffffff", fill: "1B95E0" } },
        { text: "Engagement", options: { color: "ffffff", fill: "1B95E0" } },
        { text: "Reach", options: { color: "ffffff", fill: "1B95E0" } },
      ],
    ];

    const tableData = tweets.map((tweet) => [
      tweet[0].profileData.handle,
      tweet[0].profileData.matches,
      tweet[0].profileData.content,
      tweet[0].profileData.sentiment,
      tweet[0].profileData.timePublished,
      tweet[0].profileData.location,
      tweet[0].profileData.engagement,
      tweet[0].profileData.reach,
    ]);

    const table = tableHeader.concat(tableData);

    slide1.addTable(table, {
      x: 0,
      y: 0,
      border: { color: "#ffffff", pt: 1, type: "solid" },
      rowH: 0.3,
      colW: [1.0, 0.8, 3.3, 0.9, 0.9, 0.9, 0.9, 0.8],
      autoPage: true,
      fontSize: 9,
      fill: "#efefef",
    });

    pres.writeFile("export.pptx");
  };

  return (
    <Container>
      <OuterRow>
        <Row>
          <TabsContainer>
            <Tab
              className={activeTab === "topResults" ? "active" : ""}
              onClick={() => setActiveTab("topResults")}
            >
              Top Results&nbsp;
              <Img src="/danger-circle.svg" />
            </Tab>
            <Tab
              className={activeTab === "topThemes" ? "active" : ""}
              onClick={() => setActiveTab("topThemes")}
            >
              Themes&nbsp;
              <Img src="/danger-circle.svg" />
            </Tab>
          </TabsContainer>
        </Row>

        {activeTab === "topResults" ? (
          <Row>
            <CustomSelect onChange={handleSelectChange} value={selectedOption}>
              <option>Sort By</option>
              <option value="Engagement">Engagement</option>
              <option value="PotentialReach">Potential Reach</option>
              <option value="TrendingScore">Trending Score</option>
              <option value="Random">Random</option>
              <option value="CommentCount">Comment Count</option>
              <option value="Published">Published</option>
              <option value="Found">Found</option>
              <option value="Alexa">Alexa</option>
              <option value="ReviewRating">Review Rating</option>
              <option>Social Channels</option>
              <option value="facebook"> &nbsp;&nbsp;Facebook</option>
              <option value="twitter">&nbsp;&nbsp;Twitter</option>
              <option value="vine">&nbsp;&nbsp;Vine</option>
              <option value="youtube">&nbsp;&nbsp;Youtube</option>
              <option value="tiktok">&nbsp;&nbsp;Tiktok</option>
              <option value="disqus">&nbsp;&nbsp;Disqus</option>
            </CustomSelect>

            <CustomSelect onChange={handleLayoutChange} value={selectedLayout}>
              <option>Select layout</option>
              <option value="Normal">Normal</option>
              <option value="Compact">Compact</option>
              <option value="Stories">Stories</option>
              <option>Images</option>
              <option value="grid">&nbsp;&nbsp;- Grid</option>
              <option value="treemap">&nbsp;&nbsp;- Tree Map</option>
            </CustomSelect>
            <Select
              options={exportOptions}
              styles={customStyles}
              placeholder="Export"
              onChange={handleExportChange}
              value={selectedExport}
            />
            {/* && !isClickedPDF  */}
            {selectedExport === "PDF" && (
              <PDFDownloadLink
                document={<MyPdf tweets={tweets} />}
                fileName="export.pdf"
                onClick={handleDownloadClick}
              >
                {({ loading }) =>
                  loading ? "Loading document..." : "Download now!"
                }
              </PDFDownloadLink>
            )}
          </Row>
        ) : (
          <Row>
            <CustomSelect onChange={handleThemeChange} value={selectedTheme}>
              <option>Select theme type</option>
              <option value="TopTheme">☆ Top Theme</option>
              <option value="Hashtags"># Hashtags</option>
              <option value="Account">@ Account</option>
              <option value="Bio">𝐓 Bio</option>
              <option value="Emojis">☺ Emojis</option>
            </CustomSelect>
          </Row>
        )}
      </OuterRow>

      {/* Display the results in various designs */}
      {activeTab === "topResults" && (
        <div>
          {sortedTweets.map((data, index) => (
            <div>
              {selectedLayout === "Normal" && (
                <ResultCard
                  profileData={data[0].profileData}
                  additionalMetrics={data[0].additionalMetrics}
                />
              )}
              {selectedLayout === "Compact" && (
                <ResultCardCompact
                  profileData={data[0].profileData}
                  additionalMetrics={data[0].additionalMetrics}
                />
              )}
            </div>
          ))}

          {selectedLayout === "Stories" && (
            <CardRow>
              {sortedTweets.map((data, index) => {
                return <ResultCardStory data={data[0].profileData} />;
              })}
            </CardRow>
          )}

          {selectedLayout === "grid" && (
            <CardRow>
              {sortedTweets.map((data, index) => {
                return <ResultCardGrid data={data[0].profileData} />;
              })}
            </CardRow>
          )}
        </div>
      )}
      {activeTab === "topThemes" && (
        <WordCloudStyle>
          {selectedTheme === "Bio" && <WordCloudComponent />}
          {selectedTheme === "Emojis" && <EmojiCloudComponent />}
        </WordCloudStyle>
      )}
    </Container>
  );
};

export default ResultsCard;
