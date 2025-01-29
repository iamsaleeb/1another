import React, { FC } from "react";
import { Input, InputProps } from "@rneui/base";
import { styles } from "./styles";
import { StyleProp, View, ViewStyle } from "react-native";
import { colors as colorTheme } from "@/themes/theme.styles";

interface Props extends InputProps {
  containerMainStyle?: StyleProp<ViewStyle>;
  error?: string;
}

const InputWithLabel: FC<Props> = React.forwardRef((props, ref) => {
  const { error } = props;

  return (
    <View style={[styles.viewContainer]}>
      <Input
        {...props}
        label={props.label}
        placeholder={props.label?.toString()}
        labelStyle={styles.label}
        containerStyle={styles.containerStyle}
        inputContainerStyle={[
          styles.inputContainer,
          error ? { borderColor: colorTheme.red } : {}
        ]}
        renderErrorMessage={!!error}
        errorMessage={error}
        errorStyle={{ color: colorTheme.red }}
        disabledInputStyle={styles.disabledInput}
        inputStyle={{ paddingLeft: 6 }}
        placeholderTextColor={colorTheme.black2}
      />
    </View>
  );
});

export default InputWithLabel;