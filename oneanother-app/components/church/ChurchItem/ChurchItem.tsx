import { StyleSheet } from "react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Router, useRouter } from "expo-router";
import colors from "@/themes/colors";
import { IChurchDto } from "@/services/api/web-api-client";

const ChurchItem: React.FC<IChurchDto> = ({ id, name, image }) => {
  let router: Router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push(`/church/${id}`)}
      style={styles.touchable}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={image} resizeMode="cover" />
        {/* <LinearGradient
          colors={[
            colors.churchThumbnailGradientStart,
            colors.churchThumbnailGradientStart,
            colors.churchThumbnailGradientEnd,
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0.6583, 0.6584, 0.975]}
          style={{ flex: 1 }}
        /> */}
        <Text style={[styles.title, styles.churchThumbnailTitle]}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    marginTop: 0,
    marginBottom: 8,
    height: 150,
    marginRight: 8,
    width: "23%",
    alignContent: "center",
    backgroundColor: "white",
  },
  container: {
    borderRadius: 4,
    flex: 1,
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
  title: {
    position: "absolute",
    width: "100%",
    bottom: 12,
    textAlign: "center",
  },
  churchThumbnailTitle: {
    fontWeight: 700,
    fontSize: 10,
    fontFamily: "Inter",
    color: colors.secondary,
  },
});

export default ChurchItem;
