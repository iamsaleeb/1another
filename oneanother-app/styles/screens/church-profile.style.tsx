import colors from "@/themes/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    paddingBottom: 0,
    backgroundColor: colors.background,
  },
  topBar: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  scrollView: { flex: 1, padding: 24, paddingRight: 8, paddingBottom: 0 },
  infoCard: {
    height: "auto",
    backgroundColor: "#F3614D0D",
    alignItems: "center",
    paddingBottom: 12,
    borderRadius: 8,
    marginRight: 16,
  },
  avatar: { width: 80, height: 80, marginTop: 12, borderRadius: 100 },
  nameText: { marginHorizontal: 32, textAlign: "center" },
  socialsContainer: {
    height: 32,
    width: 110,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 8,
  },
  socialsIcon: { width: 32, height: 32 },
  followButton: { width: 120, height: 35, marginTop: 16 },
  servicesTitleContainer: { marginTop: 16 },
  servicesListContainer: { marginTop: 32 },
  expandButton: { width: 100, alignItems: "center", alignSelf: "center" },
  expandIcon: { width: 16, height: 16 },
  eventsContainer: { marginTop: 32 },
  eventsTitle: { marginTop: 32 },
});

export default styles;
