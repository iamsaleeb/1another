import React, {
  FC,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Button, Input, InputProps } from "@rneui/base";
import { styles } from "./styles";
import { StyleProp, TextInput, View, ViewStyle } from "react-native";
import { stylesApp } from "@/themes/app.styles";
//import ViewIf from "../ViewIf/ViewIf";

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
        //containerStyle={styles.ctnInput}
        inputContainerStyle={styles.inputCtn}
        renderErrorMessage={false}
      />
    </View>
  );
});

export default InputWithLabel;
