import GradientBackground from "@/app/components/common/gradient-background.component";
import styles from "@/app/styles/screens/landing.style";
import colors from "@/app/themes/colors";
import { Router, useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const OnboardingScreenThree: React.FC = () => {
  const router: Router = useRouter();
  return (
    <GradientBackground
      style={styles.container}
      colors={[colors.landingGradientStart, colors.primary]}
    >
      <View style={styles.infoContainer}>
        <Image
          style={styles.landingScreenPrimaryImage}
          source={require("@/assets/images/icons/compass-circular-icon.png")}
        />
        <Text style={styles.titleText}>Explore other church events</Text>
        <Text style={styles.descriptionText}>
          Check out events from other churches you don't usually attend
        </Text>
        <TouchableOpacity
          style={styles.circularNextButton}
          onPress={() =>
            router.replace("/screens/onboarding/onboarding-screen-four.screen")
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
            source={require("@/assets/images/icons/onboarding-filled-icon.png")}
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

export default OnboardingScreenThree;
