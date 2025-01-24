import PrimaryButton from "@/components/common/primary-button.component";
import DropdownBox from "@/components/DropdownBox/DropdownBox";
import InputWithLabel from "@/components/InputWithLabel/InputWithLabel";
import AuthService from "@/services/AuthService";
import styles from "@/styles/screens/user-profile.style";
import React, { useState } from "react";
import { router } from "expo-router";

import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
} from "react-native";

const setupProfileScreen: React.FC = () => {
  let [selectedCity, setSelectedCity] = useState("Sydney");
  const cityOptions = [
    { label: "Sydney", value: "Sydney" },
    { label: "Toronto", value: "Toronto" },
  ];

  const handleSignOut = () => {
    AuthService.logout();
    router.replace("/(auth)/login.screen");
  };

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
      <PrimaryButton text="Sign out" onPress={handleSignOut} />
    </KeyboardAvoidingView>
  );
};
export default setupProfileScreen;
