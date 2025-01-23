import { StyleSheet } from "react-native";
import colors from "../../themes/colors";

const styles = StyleSheet.create({
  logoTextBold: {
    color: colors.secondary,
    fontSize: 56,
    fontWeight: 900,
    fontFamily: "NeueHaasGroteskBold",
    marginTop: 12,
  },
  logoTextRegular: {
    color: colors.secondary,
    fontSize: 56,
    fontWeight: 500,
    fontFamily: "NeueHaasGrotesk",
    marginTop: 12,
    flex: 1,
    alignContent: "flex-end",
  },
  titleText: {
    color: colors.secondary,
    fontSize: 32,
    fontWeight: 700,
    fontFamily: "Inter",
    marginTop: 80,
  },
  circularNextButton: {
    width: 56,
    height: 56,
    position: "absolute",
    bottom: 60,
    alignSelf: "center",
  },
  descriptionText: {
    fontSize: 16,
    fontFamily: "Inter",
    color: colors.secondary,
  },
  flowIndicatorContainer: {
    flexDirection: "row",
    height: 16,
    width: 54,
    alignSelf: "center",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
  },
  flowIndicator: {
    height: 16,
    width: 16,
  },
  landingScreenPrimaryImage: {
    width: 120,
    height: 120,
    alignSelf: "center",
  },
  container: {
    padding: 24,
    flex: 1,
    justifyContent: "flex-end",
  },
  infoContainer: {
    width: "100%",
    height: "80%",
  },
  nextButtonImage: { width: "100%", height: "100%" },
});

export default styles;
