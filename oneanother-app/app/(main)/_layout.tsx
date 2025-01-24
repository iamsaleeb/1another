import HeaderBar from "@/components/HeaderBar/HeaderBar";
import { MaterialIcons } from "@expo/vector-icons";
import { Stack, Tabs, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors as colorTheme } from "@/themes/theme.styles";
import { styles } from "./styles";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function TabsLayout() {
  return (
    <ProtectedRoute>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="church/[id]"
            options={{
              headerShown: true,
              headerTitle: "",
              headerBackButtonMenuEnabled: true,
              headerStyle: styles.header,
              animationTypeForReplace: "push",
              headerTintColor: colorTheme.light,
            }}
          />
          <Stack.Screen
            name="event/[id]"
            options={{
              headerShown: true,
              headerTitle: "",
              headerBackButtonMenuEnabled: true,
              headerStyle: styles.header,
              animationTypeForReplace: "push",
              headerTintColor: colorTheme.light,
            }}
          />
          <Stack.Screen
            name="profile/EditProfile"
            options={{
              headerShown: true,
              headerTitle: "",
              headerBackButtonMenuEnabled: true,
              headerStyle: styles.header,
              animationTypeForReplace: "push",
              headerTintColor: colorTheme.light,
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </ProtectedRoute>
  );
}
