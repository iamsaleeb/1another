import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import PrimaryButton from "@/components/common/primary-button.component";
import styles from "@/styles/screens/user-profile.style";
import AuthService from "@/services/AuthService";
import { router } from "expo-router";
import InputWithLabel from "@/components/InputWithLabel/InputWithLabel";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      setError(null);
      await AuthService.login(email, password);
      router.replace("/(main)/(tabs)");
    } catch (error) {
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.screenContentContainer}>
        <View style={styles.profileInfoCard}>
          <InputWithLabel
            label="Email"
            disabled={false}
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
          />
          <InputWithLabel
            label="Password"
            disabled={false}
            value={password}
            onChangeText={setPassword}
            keyboardType="visible-password"
            error={error!}
            secureTextEntry
          />
        </View>
      </View>
      <PrimaryButton text="Login" onPress={handleLogin} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
