import { StyleSheet } from "react-native";
import { stylesApp } from "@/themes/app.styles";
import { colors as colorTheme } from "@/themes/theme.styles";

export const styles = StyleSheet.create({
  viewContainer: {
    marginVertical: 16,
  },
  label: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "700",
    color: colorTheme.black,
    marginBottom: 8,
  },
  inputCtn: {
    paddingHorizontal: 0,
  },
  picker: {
    minHeight: 40,
  },
});
