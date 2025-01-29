import { StyleSheet } from "react-native";
import { colors as colorTheme } from "@/themes/theme.styles";

export const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "700",
    color: colorTheme.black,
    marginBottom: 8,
  },
  picker: {
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    paddingHorizontal: 8,
    borderColor: "#727272",
    backgroundColor: 'white',
  },
  placeholderStyle: {
    fontSize: 14,
    color: colorTheme.black2,
  },
  selectedTextStyle: {
    fontSize: 14,
    color: colorTheme.black,
  },
});