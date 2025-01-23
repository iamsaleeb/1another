import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  infoContainer: {
    width: "100%",
    height: "50%",
  },
  whiteBar: {
    width: "15%",
    height: 4,
    backgroundColor: "white",
  },
  titleContainer: {
    flexDirection: "row",
  },
  nextButton: {
    width: 56,
    height: 56,
    position: "absolute",
    bottom: 60,
    alignSelf: "center",
  },
  authenticationOptionsContainer: {
    height: "25%",
    position: "absolute",
    width: "100%",
    bottom: 0,
    flexDirection: "column",
    backgroundColor: "white",
    paddingHorizontal: 32,
    justifyContent: "space-evenly",
  },
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  signUpButton: {
    height: "35%",
  },
  signUpText: {
    fontFamily: "Inter",
    fontSize: 18,
    fontWeight: 700,
    color: "white",
    alignSelf: "center",
  },
  loginText: {
    fontFamily: "Inter",
    fontSize: 18,
    fontWeight: 700,
    color: "#F3614D",
    alignSelf: "center",
  },
  signUpButtonHolder: {
    backgroundColor: "#F3614D",
    flex: 1,
    justifyContent: "center",
    borderRadius: 4,
  },
  loginButtonHolder: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#F3614D",
  },
  comingSoonHolder: {
    width: "30%",
    height: 24,
    backgroundColor: "white",
    borderRadius: 26,
    marginTop: 46,
    justifyContent: "center",
  },
  comingSoonText: {
    color: "#F3614D",
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: 700,
    alignSelf: "center",
  },
});

export default styles;
