import PrimaryButton from "@/components/common/primary-button.component";
import LabelledTextInput from "@/components/common/TextInput";
import TopBar from "@/components/common/top-bar.component";
import DropdownBox from "@/components/DropdownBox/DropdownBox";
import InputWithLabel from "@/components/InputWithLabel/InputWithLabel";
import textStyles from "@/styles/common/text.style";
import styles from "@/styles/screens/user-profile.style";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";

import {
  Image,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const setupProfileScreen: React.FC = () => {
  let [selectedCity, setSelectedCity] = useState("Sydney");
  const cityOptions = [
    { label: "Sydney", value: "Sydney" },
    { label: "Toronto", value: "Toronto" },
  ];

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.screenContentContainer}>
        <TouchableOpacity style={styles.profilePicker}>
          <Image
            style={styles.avatar}
            source={require("@/assets/images/no-avatar.png")}
          />
          <Image
            style={styles.cameraIcon}
            source={require("@/assets/images/icons/camera-circular-icon.png")}
          />
        </TouchableOpacity>
        <View style={styles.profileInfoCard}>
          <InputWithLabel placeholder="Name" label="Name" disabled={false} />
          <InputWithLabel placeholder="Email" label="Email" disabled={true} />
          <DropdownBox
            label="City"
            options={cityOptions}
            value={selectedCity}
            onSelect={setSelectedCity}
          />{" "}
        </View>
      </View>
      <PrimaryButton text="Sign out" onPress={() => {}} />
    </KeyboardAvoidingView>
  );
};
export default setupProfileScreen;
