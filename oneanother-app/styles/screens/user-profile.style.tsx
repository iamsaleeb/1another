import colors from "@/themes/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  titleContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  titleBoldText: {
    fontWeight: 900,
    fontSize: 24,
    lineHeight: 28.87,
    fontFamily: "NeueHaasGroteskBold",
    color: colors.secondary,
  },
  titleRegularText: {
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 27.46,
    fontFamily: "NeueHaasGrotesk",
    color: colors.secondary,
  },
  screenContentContainer: {
    flex: 1,
    padding: 24,
  },
  profilePicker: {
    height: 80,
    width: 100,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 32,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100,
    shadowColor: colors.shadow,
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 0.25,
    elevation: 5,
    boxShadow: `3px 2px 2px ${colors.shadow}`,
  },
  cameraIcon: {
    position: "absolute",
    right: 0,
    top: 0,
    width: 32,
    height: 32,
  },
  profileInfoCard: {
    backgroundColor: colors.secondary,
    height: "55%",
    borderRadius: 8,
    marginTop: 32,
    boxShadow: `4px 4px 10px ${colors.shadow}`,
    padding: 24,
  },
  picker: {
    borderWidth: 1,
    borderColor: "black",
  },
  cityPicker: { paddingLeft: 0, flex: 1 },
  fill: { flex: 1 },
  emailTextInput: { marginVertical: 16 },
  cityPickerOverlayText: {
    position: "absolute",
    left: 2,
    paddingLeft: 8,
    right: 48,
    top: 2,
    bottom: 2,
    backgroundColor: "white",
    textAlignVertical: "center",
    alignContent: "center",
    fontFamily: "Inter",
    pointerEvents: "none",
  },
});

export default styles;
