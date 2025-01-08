import colors from "@/app/themes/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    marginTop: 20,
  },
  container: {
    flex: 1,
    padding: 24,
    paddingRight: 8,
    paddingBottom: 0,
    backgroundColor: colors.background,
  },
  titleContainer: { width: "100%", height: 100, marginTop: 12 },
  timeSortHorizontalContainerTop: {
    flex: 1,
    flexDirection: "row",
    marginRight: 16,
  },
  timeSortHorizontalContainerBottom: {
    marginTop: 8,
    flex: 1,
    flexDirection: "row",
    marginRight: 16,
  },
});

export default styles;
