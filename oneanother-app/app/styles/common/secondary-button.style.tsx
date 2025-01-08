import colors from "@/app/themes/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.primary,
    flex: 1,
    alignContent: "center",
    marginHorizontal: 4,
    justifyContent: "center",
    flexDirection:"row",
    alignItems:"center"
  },
  text: {
    color: colors.primary,
    fontWeight: 700,
    fontSize: 12,
    fontFamily: "Inter",
    textAlign: "center",
  },
});

export default styles;
