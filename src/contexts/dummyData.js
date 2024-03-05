import axios from "axios";

export const TempInitialDate = "2022-03-02T13:05:05";
export const Operation = process.env.REACT_APP_OPERATION

const getMonthName = (monthIndex) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[monthIndex];
};

const generateLastDaysArray = () => {
  const today = new Date(TempInitialDate);
  const lastDays = [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const formattedDate = `${date.getDate()} ${getMonthName(date.getMonth())}`;
    lastDays.push(formattedDate);
  }
  return lastDays;
};

const generateLast24HoursArray = () => {
  const now = new Date(TempInitialDate);
  const last24Hours = [];

  for (let i = 0; i < 24; i++) {
    const hour = new Date(now);
    hour.setHours(now.getHours() - i);
    last24Hours.unshift(hour.getHours());
  }
  return last24Hours;
};

// Assuming Chart.js is used for visualization

// Function to generate random data (similar to what we did in Python)
function randomData(min, max, count) {
  return Array.from(
    { length: count },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
}
export const getTwitterTweets = async (myQuery) => {
  // call twitter api
  if (Operation == "Dev"){
    const response = await axios.get(
      "https://lda-iwz8.onrender.com/get_random_tweets"
    );
    response.data.forEach((tweet) => {
      if (tweet.created_at) {
        tweet.created_at = cleanPakistanTimezone(tweet.created_at);
      }
      if (tweet.impressions === undefined) {
        tweet.impressions = randomData(1, 100, 1)[0]; // Adjust the range as needed
      }
  
      // Check if 'quote_count' attribute exists, if not, add it with a random value
      if (tweet.quote_count === undefined) {
        tweet.quote_count = randomData(1, 10, 1)[0]; // Adjust the range as needed
      }
      if (tweet.hasOwnProperty("replies_count")) {
        // Rename 'replies_count' key to 'reply_count'
        tweet.reply_count = tweet.replies_count;
        delete tweet.replies_count;
      }
      if (tweet.hasOwnProperty("retweets_count")) {
        // Rename 'retweets_count' key to 'retweet_count'
        tweet.retweet_count = tweet.retweets_count;
        delete tweet.retweets_count;
      }
      if (tweet.hasOwnProperty("likes_count")) {
        // Rename 'likes_count' key to 'like_count'
        tweet.like_count = tweet.likes_count;
        delete tweet.likes_count;
      }
      if (tweet.hasOwnProperty("tweet")) {
        // Rename 'likes_count' key to 'like_count'
        tweet.text = tweet.tweet;
        delete tweet.tweet;
      }
    });
    console.log("twitter data form mongodb:", response);
    return [response];
  }
  else if(Operation == "Production"){
    // get tweets from twitter api
    return []
  }
  
  //   let tweetsData = [{"data": [
  //     {
  //       "id": "1234567890123456789",
  //       "text": "😁Just released a new version of my web app! #webdevelopment #javascript",
  //       "created_at": "2024-02-15T12:34:56.000Z",
  //       "author_id": "1312",
  //       "retweet_count": "109",
  //       "reply_count": "210",
  //       "like_count": "190",
  //       "quote_count": "140",
  //       "impressions": "190"
  //     },
  //     {
  //       "id": "9876543210987654321",
  //       "text": "😁Exploring the wonders of AI in modern software solutions. It's fascinating how far we've come. #AI #innovation",
  //       "created_at": "2024-02-20T02:21:43.000Z",
  //       "author_id": "1991",
  //       "retweet_count": "19",
  //       "reply_count": "100",
  //       "like_count": "150",
  //       "quote_count": "223",
  //       "impressions": "270"
  //     },
  //     {
  //       "id": "98765432109876121554321",
  //       "text": "😁😁Exploring the wonders of AI in modern software solutions. It's fascinating how far we've come. #AI #innovation",
  //       "created_at": "2024-02-16T09:21:43.000Z",
  //       "author_id": "1991",
  //       "retweet_count": "19",
  //       "reply_count": "100",
  //       "like_count": "150",
  //       "quote_count": "223",
  //       "impressions": "100"
  //   },
  //     {
  //       "id": "9876543210987654121321",
  //       "text": "🤯🫨🤪Exploring the wonders of AI in modern software solutions. It's fascinating how far we've come. #AI #innovation",
  //       "created_at": "2024-02-19T04:21:43.000Z",
  //       "author_id": "1991",
  //       "retweet_count": "19",
  //       "reply_count": "100",
  //       "like_count": "150",
  //       "quote_count": "223",
  //       "impressions": "90"
  //   },
  //     {
  //       "id": "98765432109875621654321",
  //       "text": "This is such a bad movie🥵🥵",
  //       "created_at": "2024-02-20T04:21:43.000Z",
  //       "author_id": "1991",
  //       "retweet_count": "19",
  //       "reply_count": "100",
  //       "like_count": "150",
  //       "quote_count": "223",
  //       "impressions": "10"
  //   }
  // ]}]

  // return tweetsData
};
const cleanPakistanTimezone = (dateString) => {
  let dateParts = dateString.split(" Pakistan Standard Time")[0]; // Remove the timezone part
  dateParts = dateParts.replace(" ", "T");
  return dateParts;
};
const getTotalEngagement = (tweetsData) => {
  // add retweet_count, reply_count, like_count, quote_count in tweetsData
  let totalRetweets = 0;
  let totalReplies = 0;
  let totalLikes = 0;
  let totalQuotes = 0;

  // Access the tweets array
  const tweets = tweetsData[0].data;

  // Iterate through each tweet
  tweets.forEach((tweet) => {
    totalRetweets += parseInt(tweet.retweet_count, 10);
    totalReplies += parseInt(tweet.reply_count, 10);
    totalLikes += parseInt(tweet.like_count, 10);
    totalQuotes += parseInt(tweet.quote_count, 10);
  });

  // Calculate the combined total
  const totalEngagement =
    totalRetweets + totalReplies + totalLikes + totalQuotes;

  return [totalEngagement];
};

const getTotalReach = (tweetsData) => {
  let reach = 0;

  tweetsData[0].data.forEach((tweet) => {
    reach += parseInt(tweet.impressions, 10);
  });
  return [reach];
};
const getTweetsTextFromData = (tweetsData) => {
  // Initialize an array to hold the text of each tweet
  let tweetsText = [];

  // Check if tweetsData is an array and has at least one element
  if (Array.isArray(tweetsData) && tweetsData.length > 0) {
    // Iterate over the 'data' array within the first element of tweetsData
    tweetsData[0].data.forEach((tweet) => {
      // Push the 'text' of each tweet into the tweetsText array
      tweetsText.push(tweet.text);
    });
  }

  // Return the array of tweets text
  return tweetsText;
};
const getTweetSentiments = async (tweetsText) => {
  //call hassan's api
  const url = "https://deploy-check-azure.vercel.app/api/batch_sentiment";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tweetsText),
    });

    if (response.ok) {
      const sentimentData = await response.json();
      return sentimentData;
    } else {
      throw new Error(`API request failed with status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error in sentiment analysis:", error);
  }
};

const SentimentResultsOver24Hours = (
  tweetData,
  tweetSentiments,
  sentimentFilter
) => {
  // preprocessing of current tweet data to get last 24 hours of data
  // return [...] // 24 numbers returned
  const hoursCount = Array(24).fill(0); // Initialize counts for each hour
  const now = new Date(TempInitialDate);

  tweetData[0].data.forEach((tweet, index) => {
    const tweetDate = new Date(tweet.created_at);
    const diffInHours = Math.floor((now - tweetDate) / (1000 * 60 * 60));
    if (diffInHours < 24 && tweetSentiments[index] === sentimentFilter) {
      // Ensure the hour is within the array bounds and increment the count
      hoursCount[23 - diffInHours]++; // Subtract from 23 to get the correct index (0 to 23)
    }
  });
  // return randomData(finalLower, finalUpper, 24)
  return hoursCount;
};

const SentimentResultsOver7Days = (
  tweetData,
  tweetSentiments,
  sentimentFilter
) => {
  // preprocessing of current tweet data to get last 7 days of data
  // return [...] // 24 numbers returned
  const daysCount = Array(7).fill(0); // Initialize counts for each day
  const now = new Date(TempInitialDate);
  now.setHours(0, 0, 0, 0); // Normalize current time to the start of the current day

  tweetData[0].data.forEach((tweet, index) => {
    const tweetDate = new Date(tweet.created_at);
    tweetDate.setHours(0, 0, 0, 0); // Normalize tweet time to the start of its day
    const diffInDays = Math.floor((now - tweetDate) / (1000 * 60 * 60 * 24));

    if (diffInDays < 7 && tweetSentiments[index] === sentimentFilter) {
      // Ensure the day is within the array bounds and increment the count
      daysCount[6 - diffInDays]++; // Subtract from 6 to get the correct index (0 to 6)
    }
  });

  return daysCount;
  // return randomData(finalLower, finalUpper, 7)
};

const getTotalResultsFromApi = (query, tweetData) => {
  // call TweetCount api on the above query to count the total results
  return tweetData[0].data.length
};

const getResultsOver24Hours = (query, tweetData) => {
  // use tweet count api to get tweets count values for each hour
  const hoursCount = Array(24).fill(0); // Initialize counts for each hour
  const now = new Date(TempInitialDate);

  tweetData[0].data.forEach((tweet, index) => {
    const tweetDate = new Date(tweet.created_at);
    const diffInHours = Math.floor((now - tweetDate) / (1000 * 60 * 60));
    if (diffInHours < 24) {
      // Ensure the hour is within the array bounds and increment the count
      hoursCount[23 - diffInHours]++; // Subtract from 23 to get the correct index (0 to 23)
    }
  });
  return hoursCount;
  };

const getResultsOver7Days = (query, tweetData) => {
  // use tweet count api to get tweets count values for each day
  const daysCount = Array(7).fill(0); // Initialize counts for each day
  const now = new Date(TempInitialDate);
  now.setHours(0, 0, 0, 0); // Normalize current time to the start of the current day

  tweetData[0].data.forEach((tweet, index) => {
    const tweetDate = new Date(tweet.created_at);
    tweetDate.setHours(0, 0, 0, 0); // Normalize tweet time to the start of its day
    const diffInDays = Math.floor((now - tweetDate) / (1000 * 60 * 60 * 24));

    if (diffInDays < 7) {
      // Ensure the day is within the array bounds and increment the count
      daysCount[6 - diffInDays]++; // Subtract from 6 to get the correct index (0 to 6)
    }
  });

  return daysCount;
};


export const generateData = async ({
  eventNames,
  timeRange,
  date,
  sentimentType,
  language,
}) => {
  const timeRangeValues = {
    "1d": { upper: 300, lower: 0 },
    "7d": { upper: 600, lower: 300 },
    "1M": { upper: 1000, lower: 600 },
  };

  const languageRangeValues = {
    en: { upper: 500, lower: 0 }, // Example range for English
    ur: { upper: 1000, lower: 500 }, // Example range for Urdu
  };

  const colors = [
    "rgba(255, 99, 132)", // Pink
    "rgba(54, 162, 235)", // Blue
    "rgba(255, 206, 86)", // Yellow
    "rgba(75, 192, 192)", // Green
    "rgba(153, 102, 255)", // Purple
  ];

  const borderColors = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
  ];

  const sentimentConfig = {
    Positive: {
      label: "Positive",
      backgroundColor: "green",
      borderColor: "green",
    },
    Negative: {
      label: "Negative",
      backgroundColor: "red",
      borderColor: "red",
    },
    Neutral: {
      label: "Neutral",
      backgroundColor: "blue",
      borderColor: "blue",
    },
  };

  let data = await Promise.all(
    eventNames.map(async (name, index) => {
      const languageUpper = language.reduce(
        (acc, lang) => acc + languageRangeValues[lang].upper,
        0
      );
      const languageLower = language.reduce(
        (acc, lang) => acc + languageRangeValues[lang].lower,
        0
      );

      // Determine the final upper and lower limits combining time range and language range
      const finalUpper = Math.min(
        timeRangeValues[timeRange].upper,
        languageUpper
      );
      const finalLower = Math.max(
        timeRangeValues[timeRange].lower,
        languageLower
      );

      

      let tweetsData = [];

      tweetsData = await getTwitterTweets(name);

      let tweetsSentiments = [];

      let tweetsText = getTweetsTextFromData(tweetsData);

      tweetsSentiments = await getTweetSentiments(tweetsText);

      return {
        name: name,
        tweetsText: tweetsText,
        tweetsSentiments: tweetsSentiments,
        tweets: tweetsData,
        infoText: getTotalResultsFromApi(name, tweetsData), // from Tweets count API
        color: colors[index],
        totalEngagement: {
          labels: [name],
          datasets: [
            {
              label: name,
              data: getTotalEngagement(tweetsData), // retweet_count, reply_count, like_count, quote_count
              backgroundColor: colors[index],
              borderColor: borderColors[index],
              borderWidth: 1,
            },
          ],
        },
        reach: {
          labels: [name],
          datasets: [
            {
              label: name,
              data: getTotalReach(tweetsData), // sum the impressions count of each tweet in SearchTweet endpoint
              backgroundColor: colors[index],
              borderColor: borderColors[index],
              borderWidth: 1,
            },
          ],
        },
        resultsOverTime: {
          labels:
            timeRange === "1d"
              ? generateLast24HoursArray()
              : generateLastDaysArray(),
          datasets: [
            {
              label: name,
              data:
                timeRange === "1d"
                  ? getResultsOver24Hours(name, tweetsData) // use TweetCount api for each hour interval
                  : getResultsOver7Days(name, tweetsData), // use TweetCount api for each day
              backgroundColor: colors[index],
              borderColor: borderColors[index],
              borderWidth: 1,
            },
          ],
        },
        sentiments: {
          labels: [name],
          datasets: [
            {
              label: "Positive",
              data: [
                tweetsSentiments.filter((sentiment) => sentiment === "Positive")
                  .length,
              ], // apply .filter function on tweetsSentiments array
              backgroundColor: "green",
              borderColor: "green",
              borderWidth: 1,
            },
            {
              label: "Negative",
              data: [
                tweetsSentiments.filter((sentiment) => sentiment === "Negative")
                  .length,
              ], // apply .filter function on tweetsSentiments array
              backgroundColor: "red",
              borderColor: "red",
              borderWidth: 1,
            },
            {
              label: "Neutral",
              data: [
                tweetsSentiments.filter((sentiment) => sentiment === "Neutral")
                  .length,
              ], // apply .filter function on tweetsSentiments array
              backgroundColor: "blue",
              borderColor: "blue",
              borderWidth: 1,
            },
          ],
        },
        netSentimentsOverTime: {
          labels:
            timeRange === "1d"
              ? generateLast24HoursArray() // call sentiment result over 24 hours function
              : generateLastDaysArray(), // call sentiment results over 7 days function

          datasets: sentimentType.map((type) => ({
            ...sentimentConfig[type],
            data:
              timeRange === "1d"
                ? SentimentResultsOver24Hours(
                    tweetsData,
                    tweetsSentiments,
                    type
                  )
                : SentimentResultsOver7Days(tweetsData, tweetsSentiments, type), // call sentiment result over 24 hours or 7 days function
            borderWidth: 1,
          })),
        },
      };
    })
  );

  return data;
};
// Merge data for visualization
export function mergeData(data, key) {
  let mergedData = {
    labels: [],
    datasets: [],
  };

  // First, consolidate all unique labels from all data items
  data.forEach((item) => {
    item[key].labels.forEach((label) => {
      if (!mergedData.labels.includes(label)) {
        mergedData.labels.push(label);
      }
    });
  });

  // Initialize datasets with empty data arrays
  data.forEach((item) => {
    item[key].datasets.forEach((dataset) => {
      // Create a new data array filled with zeros based on the total number of labels
      const newDataArray = new Array(mergedData.labels.length).fill(0);

      // Assign the actual data to the correct position based on the label index
      item[key].labels.forEach((label, index) => {
        const labelIndex = mergedData.labels.indexOf(label);
        newDataArray[labelIndex] = dataset.data[index] || 0;
      });

      // Add the new dataset with the updated data array
      mergedData.datasets.push({
        label: dataset.label,
        data: newDataArray,
        backgroundColor: dataset.backgroundColor,
        borderColor: dataset.borderColor,
        borderWidth: dataset.borderWidth,
      });
    });
  });

  return mergedData;
}
