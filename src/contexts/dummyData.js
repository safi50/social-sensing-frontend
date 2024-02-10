function randomData(min, max, count) {
  return Array.from(
    { length: count },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
}
function generateRandomValues(sumTo, count) {
  // Generate 'count' random numbers
  let randomNumbers = Array.from({ length: count }, Math.random);

  // Calculate their total sum
  let total = randomNumbers.reduce((acc, val) => acc + val, 0);

  // Normalize each number so that their total sum equals 'sumTo'`
  let normalizedNumbers = randomNumbers.map((num) => (num / total) * sumTo);

  return normalizedNumbers;
}

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
    "Dec"
  ];
  return months[monthIndex];
};

const generateLastDaysArray = () => {
  const today = new Date();
  const lastDays = [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const formattedDate = `${date.getDate()} ${getMonthName(
      date.getMonth()
    )}`;
    lastDays.push(formattedDate);
  }
  return lastDays
};

const generateLast24HoursArray = () => {
  const now = new Date();
  const last24Hours = [];

  for (let i = 0; i < 24; i++) {
    const hour = new Date(now);
    hour.setHours(now.getHours() - i);
    last24Hours.unshift(hour.getHours());
  }
  return last24Hours
};

export function generateData({
  eventNames,
  timeRange,
  date,
  sentimentType,
  language,
}) {
  const timeRangeValues = {
    "1d": { upper: 300, lower: 0 },
    "7d": { upper: 600, lower: 300 },
    "1M": { upper: 1000, lower: 600 },
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

  let totalResults = randomData(
    timeRangeValues[timeRange].lower,
    timeRangeValues[timeRange].upper,
    1
  )[0];
  totalResults =
    language.length === 2
      ? totalResults
      : language.length === 1
      ? totalResults * 0.4
      : totalResults * 0;

  totalResults =
    sentimentType.length === 3
      ? totalResults
      : sentimentType.length === 2
      ? totalResults * 0.8
      : sentimentType.length === 1
      ? totalResults * 0.6
      : totalResults * 0;

  totalResults = Math.trunc(totalResults);

  const resultsOverTime_sevenRandomNumbers = generateRandomValues(1, 7);
  const resultsOverTime_twentyFourRandomNumbers = generateRandomValues(1, 24);

  const sentiments_threeRandomNumbers = generateRandomValues(1, 3);

  const netPositiveSentimentsOverTime_sevenRandomNumbers = generateRandomValues(
    1,
    7
  );
  const netPositiveSentimentsOverTime_twentyFourRandomNumbers =
    generateRandomValues(1, 24);

  const netNegativeSentimentsOverTime_sevenRandomNumbers = generateRandomValues(
    1,
    7
  );
  const netNegativeSentimentsOverTime_twentyFourRandomNumbers =
    generateRandomValues(1, 24);
  const netNeutralSentimentsOverTime_sevenRandomNumbers = generateRandomValues(
    1,
    7
  );
  const netNeutralSentimentsOverTime_twentyFourRandomNumbers =
    generateRandomValues(1, 24);

  const sentimentData = [];
  if (sentimentType.includes("positive")) {
    sentimentData.push({
      label: "Positive",
      data: [Math.trunc(totalResults * sentiments_threeRandomNumbers[0])],
      backgroundColor: "green",
      borderColor: "green",
      borderWidth: 1,
    });
  }
  if (sentimentType.includes("negative")) {
    sentimentData.push({
      label: "Negative",
      data: [Math.trunc(totalResults * sentiments_threeRandomNumbers[1])],
      backgroundColor: "red",
      borderColor: "red",
      borderWidth: 1,
    });
  }
  if (sentimentType.includes("neutral")) {
    sentimentData.push({
      label: "Neutral",
      data: [Math.trunc(totalResults * sentiments_threeRandomNumbers[2])],
      backgroundColor: "blue",
      borderColor: "blue",
      borderWidth: 1,
    });
  }

  const netSentimentsOverTimeData = [];
  if (sentimentType.includes("positive")) {
    netSentimentsOverTimeData.push({
      label: "Positive",
      data:
        timeRange === "1d"
          ? [
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_twentyFourRandomNumbers[0]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_twentyFourRandomNumbers[1]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_twentyFourRandomNumbers[2]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_twentyFourRandomNumbers[3]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_twentyFourRandomNumbers[4]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_twentyFourRandomNumbers[5]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_twentyFourRandomNumbers[6]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_twentyFourRandomNumbers[7]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_twentyFourRandomNumbers[8]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_twentyFourRandomNumbers[9]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_twentyFourRandomNumbers[10]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_twentyFourRandomNumbers[11]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_twentyFourRandomNumbers[12]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_twentyFourRandomNumbers[13]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_twentyFourRandomNumbers[14]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_twentyFourRandomNumbers[15]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_twentyFourRandomNumbers[16]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_twentyFourRandomNumbers[17]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_twentyFourRandomNumbers[18]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_twentyFourRandomNumbers[19]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_twentyFourRandomNumbers[20]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_twentyFourRandomNumbers[21]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_twentyFourRandomNumbers[22]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_twentyFourRandomNumbers[23]
              ),
            ]
          : [
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_sevenRandomNumbers[0]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_sevenRandomNumbers[1]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_sevenRandomNumbers[2]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_sevenRandomNumbers[3]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_sevenRandomNumbers[4]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_sevenRandomNumbers[5]
              ),
              Math.trunc(
                totalResults *
                  netPositiveSentimentsOverTime_sevenRandomNumbers[6]
              ),
            ],
      backgroundColor: "green",
      borderColor: "green",
      borderWidth: 1,
    });
  }

  if (sentimentType.includes("negative")) {
    netSentimentsOverTimeData.push({
      label: "Negative",
      data:
        timeRange === "1d"
          ? [
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_twentyFourRandomNumbers[0]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_twentyFourRandomNumbers[1]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_twentyFourRandomNumbers[2]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_twentyFourRandomNumbers[3]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_twentyFourRandomNumbers[4]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_twentyFourRandomNumbers[5]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_twentyFourRandomNumbers[6]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_twentyFourRandomNumbers[7]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_twentyFourRandomNumbers[8]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_twentyFourRandomNumbers[9]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_twentyFourRandomNumbers[10]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_twentyFourRandomNumbers[11]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_twentyFourRandomNumbers[12]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_twentyFourRandomNumbers[13]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_twentyFourRandomNumbers[14]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_twentyFourRandomNumbers[15]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_twentyFourRandomNumbers[16]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_twentyFourRandomNumbers[17]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_twentyFourRandomNumbers[18]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_twentyFourRandomNumbers[19]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_twentyFourRandomNumbers[20]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_twentyFourRandomNumbers[21]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_twentyFourRandomNumbers[22]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_twentyFourRandomNumbers[23]
              ),
            ]
          : [
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_sevenRandomNumbers[0]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_sevenRandomNumbers[1]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_sevenRandomNumbers[2]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_sevenRandomNumbers[3]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_sevenRandomNumbers[4]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_sevenRandomNumbers[5]
              ),
              Math.trunc(
                totalResults *
                  netNegativeSentimentsOverTime_sevenRandomNumbers[6]
              ),
            ],
      backgroundColor: "red",
      borderColor: "red",
      borderWidth: 1,
    });
  }
  if (sentimentType.includes("neutral")) {
    netSentimentsOverTimeData.push({
      label: "Neutral",
      data:
        timeRange === "1d"
          ? [
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_twentyFourRandomNumbers[0]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_twentyFourRandomNumbers[1]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_twentyFourRandomNumbers[2]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_twentyFourRandomNumbers[3]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_twentyFourRandomNumbers[4]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_twentyFourRandomNumbers[5]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_twentyFourRandomNumbers[6]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_twentyFourRandomNumbers[7]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_twentyFourRandomNumbers[8]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_twentyFourRandomNumbers[9]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_twentyFourRandomNumbers[10]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_twentyFourRandomNumbers[11]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_twentyFourRandomNumbers[12]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_twentyFourRandomNumbers[13]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_twentyFourRandomNumbers[14]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_twentyFourRandomNumbers[15]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_twentyFourRandomNumbers[16]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_twentyFourRandomNumbers[17]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_twentyFourRandomNumbers[18]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_twentyFourRandomNumbers[19]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_twentyFourRandomNumbers[20]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_twentyFourRandomNumbers[21]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_twentyFourRandomNumbers[22]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_twentyFourRandomNumbers[23]
              ),
            ]
          : [
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_sevenRandomNumbers[0]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_sevenRandomNumbers[1]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_sevenRandomNumbers[2]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_sevenRandomNumbers[3]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_sevenRandomNumbers[4]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_sevenRandomNumbers[5]
              ),
              Math.trunc(
                totalResults *
                  netNeutralSentimentsOverTime_sevenRandomNumbers[6]
              ),
            ],
      backgroundColor: "blue",
      borderColor: "blue",
      borderWidth: 1,
    });
  }

  let data = eventNames.map((name, index) => {
    return {
      name: name,
      infoText: totalResults,
      color: colors[index],
      totalEngagement: {
        labels: [name],
        datasets: [
          {
            label: name,
            data: [totalResults + 1500],
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
            data: [totalResults + 3000],
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
                ? [
                    Math.trunc(
                      totalResults * resultsOverTime_twentyFourRandomNumbers[0]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_twentyFourRandomNumbers[1]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_twentyFourRandomNumbers[2]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_twentyFourRandomNumbers[3]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_twentyFourRandomNumbers[4]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_twentyFourRandomNumbers[5]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_twentyFourRandomNumbers[6]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_twentyFourRandomNumbers[7]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_twentyFourRandomNumbers[8]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_twentyFourRandomNumbers[9]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_twentyFourRandomNumbers[10]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_twentyFourRandomNumbers[11]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_twentyFourRandomNumbers[12]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_twentyFourRandomNumbers[13]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_twentyFourRandomNumbers[14]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_twentyFourRandomNumbers[15]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_twentyFourRandomNumbers[16]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_twentyFourRandomNumbers[17]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_twentyFourRandomNumbers[18]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_twentyFourRandomNumbers[19]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_twentyFourRandomNumbers[20]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_twentyFourRandomNumbers[21]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_twentyFourRandomNumbers[22]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_twentyFourRandomNumbers[23]
                    ),
                  ]
                : [
                    Math.trunc(
                      totalResults * resultsOverTime_sevenRandomNumbers[0]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_sevenRandomNumbers[1]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_sevenRandomNumbers[2]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_sevenRandomNumbers[3]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_sevenRandomNumbers[4]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_sevenRandomNumbers[5]
                    ),
                    Math.trunc(
                      totalResults * resultsOverTime_sevenRandomNumbers[6]
                    ),
                  ],
            backgroundColor: colors[index],
            borderColor: borderColors[index],
            borderWidth: 1,
          },
        ],
      },
      sentiments: {
        labels: [name],
        datasets: sentimentData,
      },
      netSentimentsOverTime: {
        labels:
          timeRange === "1d"
            ? generateLast24HoursArray()
            : generateLastDaysArray(),
        datasets: netSentimentsOverTimeData,
      },
    };
  });

  return data;
}
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
