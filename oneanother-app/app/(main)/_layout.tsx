import HeaderBar from "@/components/HeaderBar/HeaderBar";
import { MaterialIcons } from "@expo/vector-icons";
import { Stack, Tabs, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors as colorTheme } from "@/themes/theme.styles";
import { styles } from "./styles";

export default function TabsLayout() {
    return (
        <SafeAreaProvider>
            <Stack>
                <Stack.Screen name="(tabs)"
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="church/[id]"
                    options={{
                        headerShown: true,
                        headerBackButtonMenuEnabled: true,
                        headerStyle: styles.header,
                        animationTypeForReplace: "push",
                        headerTintColor: colorTheme.light,
                    }}
                />
                <Stack.Screen name="event/[id]"
                    options={{
                        headerShown: true,
                        headerBackButtonMenuEnabled: true,
                        headerStyle: styles.header,
                        animationTypeForReplace: "push",
                        headerTintColor: colorTheme.light,
                    }}
                />
            </Stack>
        </SafeAreaProvider>
    );
}