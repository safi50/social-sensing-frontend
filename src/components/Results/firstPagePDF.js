import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const FirstPage = ({
  totalEngagement,
  totalReach,
  positiveCount,
  negativeCount,
  neutralCount,
  searchedHashtag,
}) => (
  <Page size="A4" style={styles.page}>
    <View style={styles.header}>
      <Text style={styles.heading}>Walee-Social Sensing Export Results</Text>
      <View style={styles.headerInfo}>
        <Text style={styles.headerText}>
          Searched Hashtag: {searchedHashtag}
        </Text>
        <Text style={styles.headerText}>Filter: Filter Applied</Text>
      </View>
      <Text style={styles.totalStats}>
        Total Engagement and Reach:
      </Text>
    </View>

    {/* Horizontal Bar Chart */}
    <View style={styles.barChart}>
      {/* Code to render the horizontal bar chart */}
    </View>

    {/* Sentiment Results */}
    <View style={styles.sentimentResults}>
      <Text style={styles.sentimentHeading}>Sentiment Results:</Text>
      {/* Vertical Bar Chart */}
      <View style={styles.verticalBarChart}>
        Chart
        {/* Code to render the vertical bar chart */}
      </View>
      {/* Pie Chart */}
      <View style={styles.pieChart}>
        Chart
        {/* Code to render the pie chart */}
      </View>
    </View>

    {/* {renderFooter(1)} */}
  </Page>
);

const renderFooter = (pageNumber) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerTextLeft}>WALEE-SOCIAL SENSING </Text>
      <Text style={styles.footerTextRight}>Page {pageNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
    borderWidth: 1,
    borderColor: "#000",
  },
  header: {
    marginBottom: 20,
    textAlign: "center",
  },
  heading: {
    fontSize: 18,
    color: "#1B95E0",
    marginBottom: 10,
    fontWeight: "bold",
  },
  headerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 12,
    marginBottom: 5,
    fontWeight: "bold",
  },
  totalStats: {
    fontSize: 12,
  },
  barChart: {
    marginBottom: 20,
    // Add styles for the bar chart container
  },
  sentimentResults: {
    marginBottom: 20,
    // Add styles for the sentiment results container
  },
  sentimentHeading: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  verticalBarChart: {
    marginBottom: 10,
    // Add styles for the vertical bar chart container
  },
  pieChart: {
    // Add styles for the pie chart container
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

export default FirstPage;
