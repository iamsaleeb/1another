import React, { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";
import PrimaryButton from "@/app/components/common/primary-button.component";
import SecondaryButton from "@/app/components/common/secondary-button.component";
import textStyles from "@/app/styles/common/text.style";
import colors from "@/app/themes/colors";
import AuthService from "@/app/services/AuthService";
import { router } from "expo-router";

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
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/images/icon.png")} />
      <Text style={textStyles.screenTitle}>Login</Text>
      <View style={styles.inputContainer}>
        <Text style={textStyles.caption}>Email</Text>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={textStyles.caption}>Password</Text>
        <TextInput
          style={styles.textInput}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <PrimaryButton
        style={styles.loginButton}
        text="LOGIN"
        onPress={handleLogin}
      />
      {/* <SecondaryButton
        style={styles.registerButton}
        text="REGISTER"
        onPress={() => {
          // Navigate to register screen
        }}
        textColor={colors.secondary}
        color={colors.primary}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 32,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 16,
  },
  textInput: {
    ...textStyles.textInput,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  loginButton: {
    width: "100%",
    marginTop: 16,
  },
  registerButton: {
    width: "100%",
    marginTop: 8,
  },
});

export default LoginScreen;
