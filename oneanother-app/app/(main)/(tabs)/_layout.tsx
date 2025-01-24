import {
  FontAwesome,
  Entypo,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import colors from "@/themes/colors";
import { Tabs } from "expo-router";
import { Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HeaderBar from "@/components/HeaderBar/HeaderBar";
import { colors as colorTheme } from "@/themes/theme.styles";
import { styles } from "./styles";
import { styles as HeaderStyles } from "../styles";
import ProtectedRoute from "@/components/ProtectedRoute";

function Logo() {
  return <Image source={require("@/assets/1anotherLogo.svg")} />;
}

export default function TabsLayout() {
  return (
    <ProtectedRoute>
      <SafeAreaProvider>
        <Tabs
          screenOptions={{
            // tab bar
            tabBarStyle: styles.tabbar,
            tabBarActiveTintColor: colorTheme.primary,
            tabBarInactiveTintColor: colorTheme.black,
            tabBarIconStyle: styles.tabBarIcon,

            // header
            headerShown: true,
            headerStyle: HeaderStyles.header,
            headerTitle: Logo,
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "",
              tabBarIcon: ({ color }) => (
                <Entypo name="home" size={24} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="churches"
            options={{
              title: "",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="church" size={24} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="explore"
            options={{
              title: "",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="explore" size={24} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="my-events"
            options={{
              title: "",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="calendar-month" size={24} color={color} />
              ),
            }}
          />
        </Tabs>
      </SafeAreaProvider>
    </ProtectedRoute>
  );
}

// const styles = StyleSheet.create({
//   screenIcon: { width: 48, height: 48 },
//   tabBar: {
//     height: 60,
//     boxShadow: "0px -2px 31px 0 #0000001A",
//     borderTopWidth: 0,
//   },
//   tabBarIcon: { alignSelf: "center", flex: 1, marginBottom: 5 },
//   activeDot: {
//     width: 6,
//     height: 6,
//     borderRadius: 3,
//     backgroundColor: colors.primary,
//     marginTop: 2,
//   },
// });
