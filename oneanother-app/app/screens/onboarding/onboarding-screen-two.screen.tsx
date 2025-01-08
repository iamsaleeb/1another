import GradientBackground from "@/app/components/common/gradient-background.component";
import styles from "@/app/styles/screens/landing.style";
import colors from "@/app/themes/colors";
import { Router, useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const OnboardingScreenTwo: React.FC = () => {
  const router: Router = useRouter();
  return (
    <GradientBackground
      style={styles.container}
      colors={[colors.landingGradientStart, colors.primary]}
    >
      <View style={styles.infoContainer}>
        <Image
          style={styles.landingScreenPrimaryImage}
          source={require("@/assets/images/icons/church-circular-icon.png")}
        />
        <Text style={styles.titleText}>Stay in touch with your church</Text>
        <Text style={styles.descriptionText}>
          Follow the churches you usually attend and stay up to date with what's
          happening each week
        </Text>
        <TouchableOpacity
          style={styles.circularNextButton}
          onPress={() =>
            router.replace("/screens/onboarding/onboarding-screen-three.screen")
          }
        >
          <Image
            source={require("@/assets/images/next-button.png")}
            style={styles.nextButtonImage}
          />
        </TouchableOpacity>
        <View style={styles.flowIndicatorContainer}>
          <Image
            style={styles.flowIndicator}
            source={require("@/assets/images/icons/onboarding-filled-icon.png")}
          />
          <Image
            style={styles.flowIndicator}
            source={require("@/assets/images/icons/onboarding-empty-icon.png")}
          />
          <Image
            style={styles.flowIndicator}
            source={require("@/assets/images/icons/onboarding-empty-icon.png")}
          />
        </View>
      </View>
    </GradientBackground>
  );
};

export default OnboardingScreenTwo;
