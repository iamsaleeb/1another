import colors from "@/app/themes/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  touchable: {
    height: 56,
    marginBottom: 56,
  },
  container: {
    backgroundColor: colors.primary,
    borderRadius: 4,
    flex: 1,
    alignContent: "center",
    marginHorizontal: 24,
    justifyContent: "center",
  },
  text: {
    color: colors.secondary,
    fontWeight: 700,
    fontSize: 20,
    fontFamily: "Inter",
    textAlign: "center",
  },
});

export default styles;
