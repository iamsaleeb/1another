import React, { FC, useState } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView } from "react-native";
import { styles } from "./styles";
import { Picker } from "@react-native-picker/picker";

interface Props {
  label?: string;
  options: Array<{ label: string; value: string }>;
  value?: string;
  onSelect: (value: string) => void;
}

const DropdownBox: FC<Props> = ({ label, options, value, onSelect }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.viewContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => onSelect(itemValue)}
          style={styles.picker}
        >
          {options.map((option, index) => (
            <Picker.Item
              key={index}
              label={option.label}
              value={option.value}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default DropdownBox;
