import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="screens/onboarding/onboarding-screen-one.screen"
        options={{
          headerShown: false,
          animation: "fade",
          animationDuration: 1000,
        }}
      />
      <Stack.Screen
        name="screens/onboarding/onboarding-screen-two.screen"
        options={{
          headerShown: false,
          animation: "fade",
          animationDuration: 1000,
        }}
      />
      <Stack.Screen
        name="screens/onboarding/onboarding-screen-three.screen"
        options={{
          headerShown: false,
          animation: "fade",
          animationDuration: 1000,
        }}
      />
      <Stack.Screen
        name="screens/onboarding/onboarding-screen-four.screen"
        options={{
          headerShown: false,
          animation: "fade",
          animationDuration: 1000,
        }}
      />
      <Stack.Screen
        name="screens/onboarding/onboarding-screen-five.screen"
        options={{
          headerShown: false,
          animation: "fade",
          animationDuration: 1000,
        }}
      />
    </Stack>
  );
}
