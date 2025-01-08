import LabledTextInput from "@/app/components/common/labled-text-input.component";
import PrimaryButton from "@/app/components/common/primary-button.component";
import TopBar from "@/app/components/common/top-bar.component";
import textStyles from "@/app/styles/common/text.style";
import styles from "@/app/styles/screens/user-profile.style";
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
  let [selectedCity, setSelectedCity] = useState("Sydney");
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
          <LabledTextInput
            style={styles.fill}
            textStyle={{}}
            hint="Name"
            label="Name"
            disabled={false}
          />
          <LabledTextInput
            style={styles.fill}
            textStyle={{}}
            hint="Email"
            label="Email"
            disabled={true}
            containerStyle={styles.emailTextInput}
          />
          <View style={styles.fill}>
            <Text style={textStyles.textInputTitle}>City</Text>
            <View style={[textStyles.inputText, styles.cityPicker]}>
              <Picker
                style={styles.fill}
                onValueChange={(itemValue: string) => {
                  setSelectedCity(itemValue);
                }}
              >
                <Picker.Item label="Sydney" value="Sydney" />
                <Picker.Item label="Toronto" value="Toronto" />
              </Picker>
              <Text style={styles.cityPickerOverlayText}>{selectedCity}</Text>
            </View>
          </View>
        </View>
      </View>
      <PrimaryButton
        text="Next"
        onPress={() => {
          router.replace("/screens/main/main.screen");
        }}
      />
    </KeyboardAvoidingView>
  );
};
export default setupProfileScreen;
