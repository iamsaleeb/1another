import PrimaryButton from "@/components/common/primary-button.component";
import LabelledTextInput from "@/components/common/TextInput";
import TopBar from "@/components/common/top-bar.component";
import DropdownBox from "@/components/DropdownBox/DropdownBox";
import InputWithLabel from "@/components/InputWithLabel/InputWithLabel";
import textStyles from "@/styles/common/text.style";
import styles from "@/styles/screens/user-profile.style";
import { Picker } from "@react-native-picker/picker";
import { Router, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from "react-native";

const setupProfileScreen: React.FC = () => {
  const router: Router = useRouter();
  const [selectedCity, setSelectedCity] = useState("Sydney");
  const cityOptions = [
    { label: "Sydney", value: "Sydney" },
    { label: "Toronto", value: "Toronto" }
  ];

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TopBar>
        <View style={styles.titleContainer}>
          <Text style={styles.titleBoldText}>1</Text>
          <Text style={styles.titleRegularText}>another</Text>
        </View>
      </TopBar>
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
          <InputWithLabel
            label="Name"
            disabled={false}
          />
          <InputWithLabel
            label="Email"
          />
          <DropdownBox
            label="City"
            options={cityOptions}
            value={selectedCity}
            onSelect={setSelectedCity}
          />
        </View>
      </View>
      <PrimaryButton
        text="Next"
        onPress={() => {
          router.replace("/(main)/(tabs)");
        }}
      />
    </KeyboardAvoidingView>
  );
};
export default setupProfileScreen;
