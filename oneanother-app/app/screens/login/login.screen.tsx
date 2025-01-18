import React, { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import PrimaryButton from "@/app/components/common/primary-button.component";
import styles from "@/app/styles/screens/user-profile.style";
import AuthService from "@/app/services/AuthService";
import { router } from "expo-router";
import TopBar from "@/app/components/common/top-bar.component";
import LabelledTextInput from "@/app/components/common/labled-text-input.component";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      setError(null);
      await AuthService.login(email, password);
      router.replace("/screens/main/main.screen");
    } catch (error) {
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TopBar>
        <View style={styles.titleContainer}>
          <Text style={styles.titleBoldText}>1</Text>
          <Text style={styles.titleRegularText}>another</Text>
        </View>
      </TopBar>
      <View style={styles.screenContentContainer}>
        <View style={styles.profileInfoCard}>
          <LabelledTextInput
            style={styles.fill}
            textStyle={{}}
            placeholder="Email"
            label="Email"
            disabled={false}
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
          />
          <LabelledTextInput
            style={styles.fill}
            textStyle={{}}
            placeholder="Password"
            label="Password"
            disabled={false}
            value={password}
            onChangeText={setPassword}
            containerStyle={styles.emailTextInput}
            keyboardType="visible-password"
          />
        </View>
      </View>
      <PrimaryButton
        text="Login"
        onPress={handleLogin}
      />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
