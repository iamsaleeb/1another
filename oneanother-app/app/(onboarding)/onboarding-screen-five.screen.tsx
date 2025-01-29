import GradientBackground from "@/components/common/gradient-background.component";
import landingCommonStyles from "@/styles/screens/landing.style";
import styles from "@/styles/screens/onboarding.sytle";
import colors from "@/themes/colors";
import { Router, useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const OnboardingScreenFive: React.FC = () => {
  const router: Router = useRouter();
  return (
    <View style={styles.mainContainer}>
      <GradientBackground
        style={landingCommonStyles.container}
        colors={[colors.landingGradientStart, colors.primary]}
      >
        <View style={styles.infoContainer}>
          <View style={styles.whiteBar} />
          <View style={styles.titleContainer}>
            <Text style={landingCommonStyles.logoTextBold}>1</Text>
            <Text style={landingCommonStyles.logoTextRegular}>another</Text>
          </View>
          <Text style={landingCommonStyles.descriptionText}>
            We connect Coptic people with Coptic church events around them
          </Text>
        </View>
      </GradientBackground>
      <View style={styles.authenticationOptionsContainer}>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() =>
            router.replace("/(auth)/register/Register")
          }
        >
          <View style={styles.signUpButtonHolder}>
            <Text style={styles.signUpText}>SIGN UP</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() =>
            router.replace("/(auth)/login/Login")
          }
        >
          <View style={styles.loginButtonHolder}>
            <Text style={styles.loginText}>LOGIN</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreenFive;
