import { StyleSheet } from "react-native";
import { stylesApp } from "@/themes/app.styles";
import { colors as colorTheme } from "@/themes/theme.styles";

export const styles = StyleSheet.create({
  viewContainer: {
    ...stylesApp.viewContainer,
    paddingHorizontal: 24,
  },
  viewPhoto: {
    alignSelf: "center",
    marginVertical: 40,
  },
  imgPhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 0.5,
    borderColor: colorTheme.light,
  },
  viewPhotoImage: {
    ...stylesApp.shadowSmall,
  },

  ctnButPhoto: {
    position: "absolute",
    right: -16,
  },
  butPhoto: {
    width: 32,
    height: 32,
    borderRadius: 20,
    padding: 0,
    backgroundColor: colorTheme.primary,
  },

  viewForm: {
    ...stylesApp.withShadow,
    padding: 24,
    backgroundColor: colorTheme.light,
    borderRadius: 8,
  },

  ctnButNext: {
    marginBottom: 48,
    marginHorizontal: 24,
  },
});
