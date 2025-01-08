import styles from "@/app/styles/common/secondary-button.style";
import colors from "@/app/themes/colors";
import React from "react";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";

interface PrimaryButtonProps {
  text?: string;
  onPress?: () => void;
  style?: ViewStyle;
  children?: React.ReactNode;
  color?: string;
  textColor?: string;
  fill?: boolean;
}

const SecondaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onPress,
  style,
  children,
  color,
  textColor = colors.primary,
  fill = true,
}) => {
  return (
    <TouchableOpacity
      style={[fill ? { flex: 1 } : {}, style]}
      onPress={onPress}
    >
      <View style={[styles.container, { backgroundColor: color }]}>
        {children}
        <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SecondaryButton;
