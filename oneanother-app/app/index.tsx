import OnboardingScreenOne from "@/app/screens/onboarding/onboarding-screen-one.screen";
import { useFonts } from "expo-font";
import React from "react";

export default function Index() {
  const [loaded] = useFonts({
    NeueHaasGrotesk: require("@/assets/fonts/NeueHaasGrotesk-Regular.otf"),
    NeueHaasGroteskBold: require("@/assets/fonts/NeueHaasGrotesk-Bold.otf"),
    Inter: require("@/assets/fonts/Inter.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return <OnboardingScreenOne />;
}
