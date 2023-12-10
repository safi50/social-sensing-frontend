// Assuming Chart.js is used for visualization

// Function to generate random data (similar to what we did in Python)
function randomData(min, max, count) {
  return Array.from(
    { length: count },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
}

export function generateData() {
  const eventNames = [
    "#lahorecarshow",
    "#sargodhacarshow",
    "#karachicarshow",
    "#faisalabadcarshow",
    // "#islamabadcarshow",
  ];
  const infos = ["526.5K", "176.5K", "676.5K", "376.5K", "576.2K"];

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

  let data = eventNames.map((name, index) => {
    return {
      name: name,
      infoText: infos[index],
      color: colors[index],
      totalEngagement: {
        labels: [name],
        datasets: [
          {
            label: name,
            data: randomData(0, 1000, 1),
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
            data: randomData(0, 1000, 1),
            backgroundColor: colors[index],
            borderColor: borderColors[index],
            borderWidth: 1,
          },
        ],
      },
      resultsOverTime: {
        labels: [
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
        ],
        datasets: [
          {
            label: name,
            data: randomData(0, 1000, 12),
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
            data: randomData(0, 1000, 1),
            backgroundColor: "green",
            borderColor: "green",
            borderWidth: 1,
          },
          {
            label: "Negative",
            data: randomData(0, 1000, 1),
            backgroundColor: "red",
            borderColor: "red",
            borderWidth: 1,
          },
        ],
      },
      netSentimentsOverTime: {
        labels: [
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
        ],
        datasets: [
          {
            label: name,
            data: randomData(0, 1000, 12),
            backgroundColor: colors[index],
            borderColor: borderColors[index],
            borderWidth: 1,
          },
        ],
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
