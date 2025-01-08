import colors from "@/app/themes/colors";
import React from "react";
import { View, ViewStyle } from "react-native";

interface TopBarProps {
  children?: React.ReactNode;
  style?: ViewStyle;
}

const TopBar: React.FC<TopBarProps> = ({ children, style }) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          height: 64,
          backgroundColor: colors.primary,
          paddingHorizontal: 16,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default TopBar;
