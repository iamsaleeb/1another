import colors from "@/themes/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputText: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.border,
    paddingLeft: 8,
    marginTop: 8,
    fontWeight: 400,
    fontFamily: "Inter",
    fontSize: 14,
    color: colors.hintText,
  },
  textInputTitle: {
    fontWeight: 700,
    fontFamily: "Inter",
    fontSize: 12,
    color: colors.greyText,
  },
  screenTitle: {
    fontWeight: 800,
    fontSize: 33,
    fontFamily: "Inter",
    color: colors.greyText,
  },
  midTitle: {
    fontWeight: 800,
    fontSize: 19,
    fontFamily: "Inter",
    color: colors.greyText,
  },
  subText: {
    fontWeight: 400,
    fontSize: 14,
    fontFamily: "Inter",
    color: colors.subText,
  },
  timeText: {
    fontWeight: 600,
    fontSize: 12,
    fontFamily: "Inter",
    color: colors.primary,
  },
  caption: {
    fontWeight: 500,
    fontSize: 10,
    fontFamily: "Inter",
    color: colors.border,
  },
  churchThumbnailTitle: {
    fontWeight: 700,
    fontSize: 10,
    fontFamily: "Inter",
    color: colors.secondary,
  },
  userLocation: {
    fontWeight: 600,
    fontSize: 10,
    fontFamily: "Inter",
    color: colors.primary,
  },
  churchProfileName: {
    fontWeight: 800,
    fontSize: 19,
    fontFamily: "Inter",
    color: colors.primary,
  },
  churchServicesExpand: {
    fontWeight: 700,
    fontFamily: "Inter",
    fontSize: 12,
    color: colors.primary,
  },
});

export default styles;
