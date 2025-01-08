import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ViewStyle } from "react-native";

interface GradientBackgroundProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  colors: readonly [string, string, ...string[]];
}
const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  style,
  colors,
}) => {
  return (
    <LinearGradient style={[style, { flex: 1 }]} colors={colors}>
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;
