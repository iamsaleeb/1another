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
    paddingBottom: 0,
    paddingRight: 8,
    backgroundColor: colors.background,
  },
  noEntryContainer: { height: 230, padding: 8, paddingVertical: 16 },
  noEntryTitle: { marginHorizontal: 16 },
  noEntryDescription: { marginHorizontal: 16, marginTop: 8 },
});

export default styles;
