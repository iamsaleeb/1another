import TopBar from "@/app/components/common/top-bar.component";
import mainTopBarStyles from "@/app/styles/components/common/main-top-bar.style";
import styles from "@/app/styles/screens/user-profile.style";
import { Router, useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MainTopBar: React.FC = () => {
  let router: Router = useRouter();
  return (
    <TopBar style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleBoldText}>1</Text>
        <Text style={styles.titleRegularText}>another</Text>
      </View>
      <TouchableOpacity
        style={mainTopBarStyles.profileThoucable}
        onPress={() => {
          router.push("/screens/user-profile/edit-profile.screen");
        }}
      >
        <Image
          source={require("@/assets/images/no-avatar.png")}
          style={{
            borderRadius: 50,
            height: "100%",
            width: "100%",
          }}
        />
      </TouchableOpacity>
    </TopBar>
  );
};
export default MainTopBar;
