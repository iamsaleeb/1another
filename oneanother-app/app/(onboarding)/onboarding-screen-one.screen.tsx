import GradientBackground from "@/components/common/gradient-background.component";
import landingCommonStyles from "@/styles/screens/landing.style";
import styles from "@/styles/screens/onboarding.sytle";
import colors from "@/themes/colors";
import { Router, useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const OnboardingScreenOne: React.FC = () => {
  const router: Router = useRouter();
  return (
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
        <TouchableOpacity
          style={landingCommonStyles.circularNextButton}
          onPress={() =>
            router.replace("/(onboarding)/onboarding-screen-two.screen")
          }
        >
          <Image
            source={require("@/assets/images/next-button.png")}
            style={landingCommonStyles.nextButtonImage}
          />
        </TouchableOpacity>
      </View>
    </GradientBackground>
  );
};

export default OnboardingScreenOne;
