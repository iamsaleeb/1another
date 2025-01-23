import PrimaryButton from "@/components/common/primary-button.component";
import LabelledTextInput from "@/components/common/TextInput";
import TopBar from "@/components/common/top-bar.component";
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
          <LabelledTextInput
            style={styles.fill}
            textStyle={{}}
            placeholder="Name"
            label="Name"
            disabled={false}
          />
          <LabelledTextInput
            style={styles.fill}
            textStyle={{}}
            placeholder="Email"
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
      <PrimaryButton text="Sign out" onPress={() => {}} />
    </KeyboardAvoidingView>
  );
};
export default setupProfileScreen;
