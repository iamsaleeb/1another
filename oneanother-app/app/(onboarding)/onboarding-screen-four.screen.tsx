import GradientBackground from "@/components/common/gradient-background.component";
import landingCommonStyles from "@/styles/screens/landing.style";
import styles from "@/styles/screens/onboarding.sytle";
import colors from "@/themes/colors";
import { Router, useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const OnboardingScreenFour: React.FC = () => {
  const router: Router = useRouter();
  return (
    <GradientBackground
      style={landingCommonStyles.container}
      colors={[colors.landingGradientStart, colors.primary]}
    >
      <View style={landingCommonStyles.infoContainer}>
        <Image
          style={landingCommonStyles.landingScreenPrimaryImage}
          source={require("@/assets/images/icons/calendar-circular-icon.png")}
        />
        <View style={styles.comingSoonHolder}>
          <Text style={styles.comingSoonText}>Coming soon</Text>
        </View>
        <Text style={landingCommonStyles.titleText}>Camps. Talks. Events.</Text>
        <Text style={landingCommonStyles.descriptionText}>
          One-stop shop to register and attend church events or camps
        </Text>
        <TouchableOpacity
          style={landingCommonStyles.circularNextButton}
          onPress={() =>
            router.replace("/(onboarding)/onboarding-screen-five.screen")
          }
        >
          <Image
            source={require("@/assets/images/next-button.png")}
            style={landingCommonStyles.nextButtonImage}
          />
        </TouchableOpacity>
        <View style={landingCommonStyles.flowIndicatorContainer}>
          <Image
            style={landingCommonStyles.flowIndicator}
            source={require("@/assets/images/icons/onboarding-filled-icon.png")}
          />
          <Image
            style={landingCommonStyles.flowIndicator}
            source={require("@/assets/images/icons/onboarding-filled-icon.png")}
          />
          <Image
            style={landingCommonStyles.flowIndicator}
            source={require("@/assets/images/icons/onboarding-filled-icon.png")}
          />
        </View>
      </View>
    </GradientBackground>
  );
};

export default OnboardingScreenFour;
