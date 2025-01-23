import React, { useEffect, useState } from "react";
import { ChurchDto } from "@/services/api/web-api-client";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles as stylesTab } from "./styles";
import ChurchService from "@/services/ChurchService";
import { stylesApp } from "@/themes/app.styles";
import { colors as colorTheme } from "@/themes/theme.styles";

const ChurchesScreen: React.FC = () => {
  const [churches, setChurches] = useState<Array<ChurchDto>>([]);

  // Comment out API call for now, using mock data instead
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
    <View style={stylesApp.viewContainer}>
      <View style={styles.viewHeader}>
        <Text style={stylesTab.txtHeaderTitle}>Churches</Text>

        {/* location */}
        <TouchableOpacity style={styles.ctnButLocation}>
          <View style={styles.viewButLocation}>
            {/* <ImageScale
              source={Images.ICON_LOCATION}
              width={16}
              style={stylesApp.mr4}
            /> */}
            <View>
              <Text style={styles.txtButLocation}>New South Wales</Text>
              <View style={styles.viewButLocationText} />
            </View>
          </View>
        </TouchableOpacity>

        {/* search bar */}
        <SearchBar
          lightTheme={true}
          placeholder="Search all churches..."
          //value={search}
          //onChangeText={(text: string) => setSearch(text)}
          containerStyle={styles.ctnSearch}
          inputContainerStyle={styles.ctnSearchInput}
          inputStyle={styles.inputSearch}
          returnKeyType="search"
          autoCorrect={false}
          leftIconContainerStyle={styles.ctnIconSearch}
          rightIconContainerStyle={styles.ctnIconClose}
        />
      </View>

      <ScrollView
        style={stylesApp.flex1}
        contentContainerStyle={styles.contentCtnScroll}
      >
        <View style={styles.viewChurches}>
          {churches.map((c, i) => (
            <ChurchItem
              key={`church-${i}`}
              id={c.id}
              name={c.name}
              image={c.image}
              //width={itemWidth}
              //onPress={() => navigation.navigate(pages.CHURCH_DETAIL)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );

  // return (
  //   <View style={{ flex: 1 }}>
  //     <View style={styles.container}>
  //       <Text style={textStyles.screenTitle}>Churches</Text>
  //       <ChurchList churches={churches} />
  //     </View>
  //   </View>
  // );
};

export default ChurchesScreen;

import { StyleSheet } from "react-native";
import { SearchBar } from "@rneui/base";
import ChurchItem from "@/components/church/ChurchItem/ChurchItem";

export const styles = StyleSheet.create({
  viewHeader: {
    paddingHorizontal: 24,
  },

  ctnButLocation: {
    alignSelf: "flex-start",
  },
  viewButLocation: {
    ...stylesApp.flexRowCenter,
  },
  txtButLocation: {
    fontWeight: "600",
    fontSize: 10,
    lineHeight: 12,
    color: colorTheme.primary,
  },
  viewButLocationText: {
    marginTop: 4,
    borderWidth: 0.5,
    borderStyle: "dashed",
    borderColor: colorTheme.primary,
  },

  ctnSearch: {
    backgroundColor: colorTheme.transparent,
    padding: 0,
    marginVertical: 16,
    minHeight: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  ctnSearchInput: {
    backgroundColor: "#e4e4e4",
    minHeight: 0,
    borderRadius: 20,
  },
  inputSearch: {
    fontWeight: "600",
    fontSize: 10,
    lineHeight: 12,
    minHeight: 0,

    // for android
    paddingVertical: 0,
  },
  ctnIconSearch: {
    height: "auto",
    marginLeft: 16,
    marginRight: 0,
    paddingRight: 0,
    marginVertical: 8,
  },
  ctnIconClose: {
    height: "auto",
  },

  viewChurches: {
    ...stylesApp.flexRow,
    marginHorizontal: -4,
    flexWrap: "wrap",
  },
  contentCtnScroll: {
    paddingHorizontal: 24,
  },
});
