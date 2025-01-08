import ChurchesStack from "@/app/screens/church/church-stack";
import ExploreScreen from "@/app/screens/explore/explore.screen";
import HomeScreen from "@/app/screens/home/home.screen";
import EventsScreen from "@/app/screens/my-events/my-events.screen";
import styles from "@/app/styles/screens/main.style";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, ImageSourcePropType, View } from "react-native";

const homeIconUnselected: ImageSourcePropType = require("@/assets/images/icons/home-unselected-icon.png");
const homeIconSelected: ImageSourcePropType = require("@/assets/images/icons/home-selected-icon.png");
const churchesIconUnselected: ImageSourcePropType = require("@/assets/images/icons/churches-unselected-icon.png");
const churchesIconSelected: ImageSourcePropType = require("@/assets/images/icons/churches-selected-icon.png");
const eventsIconUnselected: ImageSourcePropType = require("@/assets/images/icons/events-unselected-icon.png");
const eventsIconSelected: ImageSourcePropType = require("@/assets/images/icons/events-selected-icon.png");
const browseIconUnselected: ImageSourcePropType = require("@/assets/images/icons/browse-unselected-icon.png");
const browseIconSelected: ImageSourcePropType = require("@/assets/images/icons/browse-selected-icon.png");
const notificationIconUnselected: ImageSourcePropType = require("@/assets/images/icons/notifications-unselected-icon.png");
const notificationIconSelected: ImageSourcePropType = require("@/assets/images/icons/notifications-unselected-icon.png");

const Tab = createBottomTabNavigator();

const MainScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconImage: ImageSourcePropType = homeIconSelected;
            if (route.name === "Home")
              iconImage = focused ? homeIconSelected : homeIconUnselected;
            else if (route.name === "Churches")
              iconImage = focused
                ? churchesIconSelected
                : churchesIconUnselected;
            else if (route.name === "Explore")
              iconImage = focused ? browseIconSelected : browseIconUnselected;
            else if (route.name === "Events")
              iconImage = focused ? eventsIconSelected : eventsIconUnselected;
            else if (route.name === "Notifications")
              iconImage = focused
                ? notificationIconSelected
                : notificationIconUnselected;
            return <Image source={iconImage} style={styles.screenIcon} />;
          },
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarIconStyle: styles.tabBarIcon,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Churches" component={ChurchesStack} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Events" component={EventsScreen} />
        <Tab.Screen name="Notifications" component={HomeScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default MainScreen;
