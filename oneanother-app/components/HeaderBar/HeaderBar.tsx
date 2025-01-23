import TopBar from "@/components/common/top-bar.component";
import mainTopBarStyles from "@/styles/components/common/main-top-bar.style";
import styles from "@/styles/screens/user-profile.style";
import { Router, useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import barStyles from "./styles";

const HeaderBar: React.FC = () => {
  let router: Router = useRouter();
  return (
    <TopBar style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleBoldText}>1</Text>
        <Text style={styles.titleRegularText}>another</Text>
      </View>
      <TouchableOpacity
        style={barStyles.profileThoucable}
        onPress={() => {
          router.push("/profile/EditProfile");
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
export default HeaderBar;
