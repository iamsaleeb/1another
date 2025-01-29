import { StyleSheet } from "react-native";
import { stylesApp } from "@/themes/app.styles";
import { colors as colorTheme } from "@/themes/theme.styles";

export const styles = StyleSheet.create({
  viewContainer: {
    ...stylesApp.flexRowCenter,
  },

  input: {
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 14,
    minHeight: 0,
  },
  inputContainer: {
    boxSizing: "border-box",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#727272",
  },
  containerStyle: {
    paddingHorizontal: 0,
    marginBottom: 24,
    
  },
  disabledInput: {
    backgroundColor: colorTheme.grey2,
  },
  label: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "700",
    color: colorTheme.black,
    marginBottom: 8,
  },
});

// /* Field / Text Field */

// box-sizing: border-box;

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 20px 8px;
// gap: 4px;

// position: absolute;
// left: 0%;
// right: 0%;
// top: 36.51%;
// bottom: 0%;

// /* Black 03 */
// border: 1px solid #727272;
// border-radius: 4px;
