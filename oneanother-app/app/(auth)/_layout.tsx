import HeaderBar from "@/components/HeaderBar/HeaderBar";
import { MaterialIcons } from "@expo/vector-icons";
import { Stack, Tabs, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors as colorTheme } from "@/themes/theme.styles";
import { styles } from "../(main)/styles";

export default function AuthLayout() {
    return (
        <SafeAreaProvider>
            <Stack>
                <Stack.Screen
                    name="register/Register"
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
                    name="login/Login"
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
    );
}
