import colors from "@/themes/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    marginTop: 20,
  },
  container: {
    flex: 1,
    padding: 24,
    paddingBottom: 0,
    backgroundColor: colors.background,
  },
  contentContainer: { width: "100%", height: 70, marginTop: 12 },
  userLocationContainer: { flexDirection: "row" },
  locationIcon: { width: 16, height: 16 },
  locationText: {
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderColor: colors.primary,
    marginLeft: 8,
  },
  searchContainer: {
    flex: 1,
    marginTop: 16,
    backgroundColor: colors.searchTextInput,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: { width: 16, height: 16, marginLeft: 16 },
  searchTextInput: { marginLeft: 8 },
});

export default styles;
