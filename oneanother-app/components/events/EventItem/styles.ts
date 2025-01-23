// import colors from "@/themes/colors";
// import { StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: colors.secondary,
//     height: 300,
//     borderRadius: 8,
//     marginTop: 32,
//     boxShadow: `4px 4px 10px 0 ${colors.shadow}`,
//     padding: 24,
//     justifyContent: "space-between",
//   },
//   touchable: { marginTop: 0, marginBottom: 16, height: 150, marginRight: 16 },
//   shareTouchable: {
//     position: "absolute",
//     right: 16,
//     top: 16,
//     height: 16,
//     width: 16,
//   },
//   shareImage: { width: "100%", height: "100%" },
// });

// export default styles;

import { StyleSheet } from "react-native";
import { stylesApp } from "@/themes/app.styles";
import { colors as colorTheme } from "@/themes/theme.styles";

export const styles = StyleSheet.create({
  viewContainer: {
    ...stylesApp.withShadow,
    padding: 16,
    backgroundColor: colorTheme.secondary,
    borderRadius: 8,
    marginBottom: 16,
    justifyContent: "space-between",
  },

  viewHeader: {
    ...stylesApp.flexRowCenter,
    marginBottom: 8,
  },

  viewContent: {
    ...stylesApp.flexRow,
    alignItems: "flex-end",
  },
  viewBody: {
    flex: 1,
    marginRight: 8,
  },

  txtTitle: {
    fontWeight: "800",
    fontSize: 19,
    lineHeight: 22,
    color: colorTheme.black,
    marginBottom: 4,
  },

  txtBody: {
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 14,
    color: colorTheme.grey1,
    marginBottom: 8,
  },
  txtFooter: {
    fontWeight: "500",
    fontSize: 10,
    lineHeight: 12,
    color: colorTheme.grey,
  },

  ctnButShare: {
    position: "absolute",
    top: 4,
    right: 4,
  },

  txtDate: {
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 14,
    color: colorTheme.primary,
  },

  tagType: {
    marginLeft: 8,
    paddingVertical: 4,
  },

  labelTag: {
    fontSize: 12,
    lineHeight: 14,
  },
});