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
  noEntryContainer: { height: 200, padding: 8, paddingVertical: 16 },
  noEntryImage: { height: 80, width: 80 },
  noEntryTitle: { marginHorizontal: 16 },
  noEntryDescription: { marginHorizontal: 16, marginTop: 8 },
});

export default styles;
