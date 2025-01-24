import React, {
  FC,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Input, InputProps } from "@rneui/base";
import { styles } from "./styles";
import { StyleProp, TextInput, View, ViewStyle } from "react-native";
import { colors as colorTheme } from "@/themes/theme.styles";

interface Props extends InputProps {
  containerMainStyle?: StyleProp<ViewStyle>;
  withEdit?: boolean;
  onSave?: () => void;
}

const InputWithLabel: FC<Props> = React.forwardRef((props, ref) => {
  const { withEdit, onSave } = props;

  return (
    <View style={[styles.viewContainer]}>
      <Input
        {...props}
        label={props.label}
        placeholder={props.label?.toString()}
        labelStyle={styles.label}
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainer}
        renderErrorMessage={false}
        disabledInputStyle={styles.disabledInput}
        inputStyle={{ paddingLeft: 6 }}
        placeholderTextColor={colorTheme.black2}
      />
    </View>
  );
});

export default InputWithLabel;
