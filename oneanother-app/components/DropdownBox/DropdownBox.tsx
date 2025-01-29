import React, { FC } from "react";
import { View, Text } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from "./styles";

interface Props {
  label?: string;
  options: Array<{ label: string; value: string }>;
  value?: string;
  onSelect: (value: string) => void;
}

const DropdownBox: FC<Props> = ({ label, options, value, onSelect }) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <Dropdown
        data={options}
        labelField="label"
        valueField="value"
        value={value}
        onChange={item => onSelect(item.value)}
        style={styles.picker}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
      />
    </View>
  );
};

export default DropdownBox;