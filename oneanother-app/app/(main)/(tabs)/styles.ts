import { StyleSheet } from "react-native";
import { colors as colorTheme } from "@/themes/theme.styles";

export const styles = StyleSheet.create({
  viewTabFooter: {
    position: "absolute",
    top: 26,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  viewDot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: colorTheme.primary,
  },

  tabbar: {
    height: 60,
    boxShadow: "0px -2px 31px 0 #0000001A",
    borderTopWidth: 0,
  },

  tabBarIcon: { alignSelf: "center", flex: 1, marginBottom: 5 },

  txtHeaderTitle: {
    fontWeight: "800",
    fontSize: 33,
    lineHeight: 38,
    marginBottom: 16,
    color: colorTheme.black,
  },
});
