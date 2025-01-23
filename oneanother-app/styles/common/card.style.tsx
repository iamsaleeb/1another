import colors from "@/themes/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.secondary,
    borderRadius: 8,
    marginTop: 32,
    boxShadow: `4px 4px 10px 0 ${colors.shadow}`,
    padding: 24,
    justifyContent: "space-between",
  },
});

export default styles;
