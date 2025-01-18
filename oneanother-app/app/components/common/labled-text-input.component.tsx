import colors from "@/app/themes/colors";
import React from "react";
import { Text, TextInput, TextStyle, View, ViewStyle, StyleSheet } from "react-native";

interface LabledTextInputProps {
  containerStyle?: ViewStyle;
  style: TextStyle;
  textStyle: TextStyle;
  label: string;
  placeholder: string;
  disabled: boolean;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad' | 'url' | 'visible-password';
}

const LabelledTextInput: React.FC<LabledTextInputProps> = ({
  style,
  textStyle,
  label,
  placeholder,
  disabled,
  containerStyle,
  value,
  onChangeText,
  keyboardType = 'default',
}) => {
  return (
    <View style={[{ flex: 1 }, containerStyle]}>
      <Text style={[textStyle, styles.inputLabel]}>{label}</Text>
      <TextInput
        style={[
          style,
          styles.inputText,
          {
            backgroundColor: disabled
              ? colors.disabledTextInput
              : colors.secondary,
          },
        ]}
        placeholder={placeholder}
        editable={!disabled}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputText: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.border,
    paddingLeft: 8,
    marginTop: 8,
    fontWeight: 400,
    fontFamily: "Inter",
    fontSize: 14,
    color: colors.hintText,
  },
  inputLabel: {
    fontWeight: 700,
    fontFamily: "Inter",
    fontSize: 12,
    color: colors.greyText,
  },
});

export default LabelledTextInput;
