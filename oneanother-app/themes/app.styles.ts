import { StyleSheet } from "react-native";
import { colors as colorTheme } from "./theme.styles";

export const stylesApp = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: colorTheme.background,
    padding: 20,
  },

  //
  // layout
  //
  flexColCenter: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  flexRow: {
    flexDirection: "row",
  },
  flexRowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  flex1: {
    flex: 1,
  },

  justifyCenter: {
    justifyContent: "center",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },

  viewOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },

  // width
  width100: {
    width: "100%",
  },

  // height
  height100: {
    height: "100%",
  },

  //
  // margins
  //
  m0: {
    margin: 0,
  },
  mt2: {
    marginTop: 2,
  },
  mt4: {
    marginTop: 4,
  },
  mt6: {
    marginTop: 6,
  },
  mt8: {
    marginTop: 8,
  },
  mt10: {
    marginTop: 10,
  },
  mt12: {
    marginTop: 12,
  },
  mt14: {
    marginTop: 14,
  },
  mt16: {
    marginTop: 16,
  },
  mt18: {
    marginTop: 18,
  },
  mt20: {
    marginTop: 20,
  },
  mt24: {
    marginTop: 24,
  },
  mt30: {
    marginTop: 30,
  },
  mt32: {
    marginTop: 32,
  },
  mt54: {
    marginTop: 54,
  },

  mb2: {
    marginBottom: 2,
  },
  mb8: {
    marginBottom: 8,
  },
  mb16: {
    marginBottom: 16,
  },
  mb24: {
    marginBottom: 24,
  },
  mv0: {
    marginVertical: 0,
  },

  ml4: {
    marginLeft: 4,
  },
  ml8: {
    marginLeft: 8,
  },
  ml12: {
    marginLeft: 12,
  },
  ml14: {
    marginLeft: 14,
  },
  ml16: {
    marginLeft: 16,
  },
  ml20: {
    marginLeft: 20,
  },
  "-ml8": {
    marginLeft: -8,
  },
  "-ml16": {
    marginLeft: -16,
  },

  mr0: {
    marginRight: 0,
  },
  mr4: {
    marginRight: 4,
  },
  mr8: {
    marginRight: 8,
  },
  "-mr8": {
    marginRight: -8,
  },
  mr16: {
    marginRight: 16,
  },
  mh16: {
    marginHorizontal: 16,
  },

  //
  // paddings
  //
  ph0: {
    paddingHorizontal: 0,
  },
  ph2: {
    paddingHorizontal: 2,
  },
  ph12: {
    paddingHorizontal: 12,
  },
  ph16: {
    paddingHorizontal: 16,
  },
  ph24: {
    paddingHorizontal: 24,
  },
  pv0: {
    paddingVertical: 0,
  },
  p20: {
    padding: 20,
  },
  p24: {
    padding: 24,
  },

  //
  // buttons
  //
  butPrimary: {
    backgroundColor: colorTheme.primary,
    borderRadius: 4,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  titleButPrimary: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "700",
    color: colorTheme.light,
  },

  butSmallOutline: {
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderWidth: 1,
    borderColor: colorTheme.primary,
  },
  titleButSmallOutline: {
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 14,
    color: colorTheme.primary,
  },

  butTransparent: {
    paddingVertical: 16,
  },
  titleButClear: {
    fontSize: 16,
    fontWeight: "500",
    color: colorTheme.dark,
  },

  //
  // input
  //
  input: {
    borderBottomWidth: 0,
  },

  //
  // text
  //
  txtSemiBold: {
    fontWeight: "500",
  },
  txtBold: {
    fontWeight: "600",
  },

  // border radius
  br10: {
    borderRadius: 10,
  },

  //
  // loading
  //
  viewLoading: {
    height: 130,
    justifyContent: "center",
    alignItems: "center",
  },
  txtEmptyItem: {
    color: "#bbb",
  },

  //
  // other
  //
  semiTrans: {
    opacity: 0.7,
  },
  bgPrimary: {
    backgroundColor: colorTheme.primary,
  },

  // text color
  txtLight: {
    color: colorTheme.light,
  },
  txtDark: {
    color: colorTheme.black,
  },
  txtPrimary: {
    color: colorTheme.primary,
  },

  // shadow
  withShadow: {
    boxShadow: `4px 4px 10px 0 ${colorTheme.shadow}`,
    borderRadius: 8,
  },
  shadowSmall: {
    shadowRadius: 3,
    shadowColor: colorTheme.dark,
    shadowOpacity: 0.25,
    shadowOffset: {
      height: 2,
      width: 3,
    },
  },

  //
  // modal
  //
  viewModalBg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000040",
  },
});
