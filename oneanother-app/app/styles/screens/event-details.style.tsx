import colors from "@/app/themes/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  topBar: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  scrollView: { flex: 1 },
  contentContainer: {
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 24,
  },
  eventImage: { borderRadius: 4, maxHeight: 200, maxWidth: 200 },
  eventCardText: { width: "100%" },
  cardInfoRowContainer: { marginTop: 16, flex: 1, flexDirection: "row" },
  cardInfoRowIcon: { width: 16, height: 16 },
  cardInfoRowDescriptionContainer: { flex: 1, marginLeft: 8 },
  fullDescriptionCard: { width: "100%", height: "auto", marginBottom: 8 },
  bottomBarContainer: {
    backgroundColor: "white",
    height: 60,
    alignSelf: "flex-end",
    width: "100%",
    padding: 12,
    boxShadow: `0px -1px 1px ${colors.shadow}`,
  },
  saveButton: { width: "30%", alignSelf: "flex-end" },
  saveIcon: { width: 24, height: 24, marginRight: 8 },
});

export default styles;
