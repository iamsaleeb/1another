import textStyles from "@/app/styles/common/text.style";
import colors from "@/app/themes/colors";
import React from "react";
import { Text, TextInput, TextStyle, View, ViewStyle } from "react-native";

interface LabledTextInputProps {
  containerStyle?: ViewStyle;
  style: TextStyle;
  textStyle: TextStyle;
  label: string;
  hint: string;
  disabled: boolean;
}

const LabledTextInput: React.FC<LabledTextInputProps> = ({
  style,
  textStyle,
  label,
  hint,
  disabled,
  containerStyle,
}) => {
  return (
    <View style={[{ flex: 1 }, containerStyle]}>
      <Text style={[textStyle, textStyles.textInputTitle]}>{label}</Text>
      <TextInput
        style={[
          style,
          textStyles.inputText,
          {
            backgroundColor: disabled
              ? colors.disabledTextInput
              : colors.secondary,
          },
        ]}
        placeholder={hint}
        editable={!disabled}
      />
    </View>
  );
};

export default LabledTextInput;
