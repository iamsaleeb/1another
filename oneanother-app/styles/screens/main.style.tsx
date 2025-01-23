import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1 },
  screenIcon: { width: 48, height: 48 },
  tabBar: {
    height: 60,
    boxShadow: `0px -2px 31px 0 #0000001A`,
    borderTopWidth: 0,
  },
  tabBarIcon: { alignSelf: "center", flex: 1, marginBottom: 5 },
});

export default styles;
