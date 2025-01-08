import styles from "@/app/styles/common/primary-button.style";
import React from "react";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";

interface PrimaryButtonProps {
  text?: string;
  onPress?: () => void;
  children?: React.ReactNode;
  style?: ViewStyle;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onPress,
  children,
  style,
}) => {
  return (
    <TouchableOpacity style={[styles.touchable, style]} onPress={onPress}>
      <View style={styles.container}>
        {children}
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
