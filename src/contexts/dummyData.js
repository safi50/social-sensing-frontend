// Assuming Chart.js is used for visualization

// Function to generate random data (similar to what we did in Python)
function randomData(min, max, count) {
  return Array.from(
    { length: count },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
}

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

  const sentimentConfig = {
    positive: {
      label: "Positive",
      backgroundColor: "green",
      borderColor: "green",
    },
    negative: {
      label: "Negative",
      backgroundColor: "red",
      borderColor: "red",
    },
    neutral: {
      label: "Neutral",
      backgroundColor: "blue",
      borderColor: "blue",
    }
  };

  let data = eventNames.map((name, index) => {
    return {
      name: name,
      infoText: randomData(
        timeRangeValues[timeRange].lower,
        timeRangeValues[timeRange].upper,
        1
      )[0],
      color: colors[index],
      totalEngagement: {
        labels: [name],
        datasets: [
          {
            label: name,
            data: randomData(
              timeRangeValues[timeRange].lower,
              timeRangeValues[timeRange].upper,
              1
            ),
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
            data: randomData(
              timeRangeValues[timeRange].lower,
              timeRangeValues[timeRange].upper,
              1
            ),
            backgroundColor: colors[index],
            borderColor: borderColors[index],
            borderWidth: 1,
          },
        ],
      },
      resultsOverTime: {
        labels:
          timeRange === "1d"
            ? [
                "00",
                "01",
                "02",
                "03",
                "04",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
              ]
            : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: name,
            data:
              timeRange === "1d"
                ? randomData(
                    timeRangeValues[timeRange].lower,
                    timeRangeValues[timeRange].upper,
                    24
                  )
                : randomData(
                    timeRangeValues[timeRange].lower,
                    timeRangeValues[timeRange].upper,
                    7
                  ),
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
            data: randomData(
              timeRangeValues[timeRange].lower,
              timeRangeValues[timeRange].upper,
              1
            ),
            backgroundColor: "green",
            borderColor: "green",
            borderWidth: 1,
          },
          {
            label: "Negative",
            data: randomData(
              timeRangeValues[timeRange].lower,
              timeRangeValues[timeRange].upper,
              1
            ),
            backgroundColor: "red",
            borderColor: "red",
            borderWidth: 1,
          },
        ],
      },
      netSentimentsOverTime: {
        labels:
          timeRange === "1d"
            ? [
                "00",
                "01",
                "02",
                "03",
                "04",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
              ]
            : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        // datasets: [
        //   {
        //     label: "Positive",
        //     data:
        //       timeRange === "1d"
        //         ? randomData(
        //             timeRangeValues[timeRange].lower,
        //             timeRangeValues[timeRange].upper,
        //             24
        //           )
        //         : randomData(
        //             timeRangeValues[timeRange].lower,
        //             timeRangeValues[timeRange].upper,
        //             7
        //           ),
        //     backgroundColor: "green",
        //     borderColor: "green",
        //     borderWidth: 1,
        //   },
        //   {
        //     label: "Negative",
        //     data: randomData(
        //       timeRangeValues[timeRange].lower,
        //       timeRangeValues[timeRange].upper,
        //       24
        //     ),
        //     backgroundColor: "red",
        //     borderColor: "red",
        //     borderWidth: 1,
        //   },
        //   {
        //     label: "Neutral",
        //     data: randomData(
        //       timeRangeValues[timeRange].lower,
        //       timeRangeValues[timeRange].upper,
        //       24
        //     ),
        //     backgroundColor: "blue",
        //     borderColor: "blue",
        //     borderWidth: 1,
        //   },
        // ],
        datasets: sentimentType.map(type => ({
          ...sentimentConfig[type],
          data: randomData(
            timeRangeValues[timeRange].lower,
            timeRangeValues[timeRange].upper,
            timeRange === "1d" ? 24 : 7
          ),
          borderWidth: 1,
        }))
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
