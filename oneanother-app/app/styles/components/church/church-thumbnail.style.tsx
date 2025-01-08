import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  touchable: {
    marginTop: 0,
    marginBottom: 8,
    height: 150,
    marginRight: 8,
    width: "23%",
    alignContent: "center",
    backgroundColor: "white",
  },
  container: {
    borderRadius: 4,
    flex: 1,
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
  title: {
    position: "absolute",
    width: "100%",
    bottom: 12,
    textAlign: "center",
  },
});

export default styles;
