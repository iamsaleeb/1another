import ChurchThumbnailComponent from "@/app/components/church/church-thumbnail.component";
import MainTopBar from "@/app/components/top-bar/main-top-bar";
import { ChurchDto } from "@/app/services/api/web-api-client";
import ChurchService from "@/app/services/ChurchService";
import textStyles from "@/app/styles/common/text.style";
import styles from "@/app/styles/screens/churches.style";
import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TextInput, View } from "react-native";

// const churches: Array<Church> = [
//   {
//     id: "0",
//     name: "Mt. Druitt",
//     image: require("@/assets/images/tmp/church-sample-2.jpg"),
//   },
//   {
//     id: "1",
//     name: "Guildford",
//     image: require("@/assets/images/tmp/church-sample-3.jpg"),
//   },
//   {
//     id: "2",
//     name: "Rhodes",
//     image: require("@/assets/images/tmp/church-sample-4.jpg"),
//   },
//   {
//     id: "3",
//     name: "Arncliffe",
//     image: require("@/assets/images/tmp/church-sample-5.jpg"),
//   },
//   {
//     id: "4",
//     name: "Long Point",
//     image: require("@/assets/images/tmp/church-sample-6.jpg"),
//   },
//   {
//     id: "5",
//     name: "Peakhurst",
//     image: require("@/assets/images/tmp/church-sample-6.jpg"),
//   },
//   {
//     id: "6",
//     name: "Kensington",
//     image: require("@/assets/images/tmp/church-sample-7.jpg"),
//   },
//   {
//     id: "7",
//     name: "Punchbowl",
//     image: require("@/assets/images/tmp/church-sample-8.jpg"),
//   },
//   {
//     id: "8",
//     name: "Liverpool",
//     image: require("@/assets/images/tmp/church-sample-7.jpg"),
//   },
//   {
//     id: "9",
//     name: "Blacktown",
//     image: require("@/assets/images/tmp/church-sample-1.jpg"),
//   },
//   {
//     id: "10",
//     name: "Mt. Druitt",
//     image: require("@/assets/images/tmp/church-sample-2.jpg"),
//   },
//   {
//     id: "11",
//     name: "Guildford",
//     image: require("@/assets/images/tmp/church-sample-3.jpg"),
//   },
//   {
//     id: "12",
//     name: "Rhodes",
//     image: require("@/assets/images/tmp/church-sample-4.jpg"),
//   },
//   {
//     id: "13",
//     name: "Arncliffe",
//     image: require("@/assets/images/tmp/church-sample-5.jpg"),
//   },
//   {
//     id: "14",
//     name: "Long Point",
//     image: require("@/assets/images/tmp/church-sample-6.jpg"),
//   },
//   {
//     id: "15",
//     name: "Peakhurst",
//     image: require("@/assets/images/tmp/church-sample-6.jpg"),
//   },
//   {
//     id: "16",
//     name: "Kensington",
//     image: require("@/assets/images/tmp/church-sample-7.jpg"),
//   },
//   {
//     id: "17",
//     name: "Punchbowl",
//     image: require("@/assets/images/tmp/church-sample-8.jpg"),
//   },
//   {
//     id: "18",
//     name: "Liverpool",
//     image: require("@/assets/images/tmp/church-sample-7.jpg"),
//   },
//   {
//     id: "19",
//     name: "Blacktown",
//     image: require("@/assets/images/tmp/church-sample-1.jpg"),
//   },
//   {
//     id: "120",
//     name: "Punchbowl",
//     image: require("@/assets/images/tmp/church-sample-8.jpg"),
//   },
// ];

const ChurchesScreen: React.FC = () => {
  const [churches, setChurches] = useState<Array<ChurchDto>>([]);

  useEffect(() => {
    const fetchChurches = async () => {
      try {
        const paginatedChurches = await ChurchService.getPaginatedChurches(
          1,
          20
        );
        setChurches(paginatedChurches.items || []);
      } catch (error) {
        console.error("Error fetching churches:", error);
      }
    };

    fetchChurches();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MainTopBar />
      <View style={styles.container}>
        <Text style={textStyles.screenTitle}>Churches</Text>
        <View style={styles.contentContainer}>
          <View style={styles.userLocationContainer}>
            <Image
              style={styles.locationIcon}
              source={require("@/assets/images/icons/church-location-icon.png")}
            />
            <Text style={[styles.locationText, textStyles.userLocation]}>
              New South Wales
            </Text>
          </View>
          <View style={styles.searchContainer}>
            <Image
              source={require("@/assets/images/icons/search-icon.png")}
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchTextInput}
              placeholder="Search all churches..."
            />
          </View>
        </View>
        <FlatList
          numColumns={4}
          style={[styles.flatList]}
          data={churches}
          keyExtractor={(item) => item.id!.toString()}
          renderItem={({ item }) => (
            <ChurchThumbnailComponent
              id={item.id}
              name={item.name}
            //image={item.image}
            />
          )}
        />
      </View>
    </View>
  );
};

export default ChurchesScreen;
