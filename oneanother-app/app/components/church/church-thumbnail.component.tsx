import Church from "@/app/data/church.struct";
import textStyles from "@/app/styles/common/text.style";
import styles from "@/app/styles/components/church/church-thumbnail.style";
import colors from "@/app/themes/colors";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from "@react-navigation/native";
import { IChurchDto } from "@/app/services/api/web-api-client";
import { router } from "expo-router";

const ChurchThumbnailComponent: React.FC<IChurchDto> = ({
  id,
  name,
  image,
}) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(`/screens/church/church-profile.screen?id=${id}`);
      }}
      style={styles.touchable}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={image} resizeMode="cover" />
        <LinearGradient
          colors={[
            colors.churchThumbnailGradientStart,
            colors.churchThumbnailGradientStart,
            colors.churchThumbnailGradientEnd,
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0.6583, 0.6584, 0.975]}
          style={{ flex: 1 }}
        />
        <Text style={[styles.title, textStyles.churchThumbnailTitle]}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChurchThumbnailComponent;
