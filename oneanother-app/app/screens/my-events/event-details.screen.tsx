import SecondaryButton from "@/app/components/common/secondary-button.component";
import TopBar from "@/app/components/common/top-bar.component";
import cardStyles from "@/app/styles/common/card.style";
import textStyles from "@/app/styles/common/text.style";
import styles from "@/app/styles/screens/event-details.style";
import colors from "@/app/themes/colors";
import { Router, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const EventDetailsScreen: React.FC = () => {
  let router: Router = useRouter();
  const [isSaved, setIsSaved] = useState(false);
  return (
    <View style={styles.container}>
      <TopBar style={styles.topBar}>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <Image source={require("@/assets/images/icons/back-icon.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("@/assets/images/icons/share-white-icon.png")}
          />
        </TouchableOpacity>
      </TopBar>
      <ScrollView style={styles.scrollView}>
        <View style={styles.contentContainer}>
          <Image
            style={styles.eventImage}
            source={require("@/assets/images/tmp/event-sample.png")}
          />
          <View style={[cardStyles.card, styles.eventCardText]}>
            <Text style={textStyles.midTitle}>
              Apologetics for the Resurrection 101
            </Text>
            <View style={styles.cardInfoRowContainer}>
              <Image
                source={require("@/assets/images/icons/church-orange-event-icon.png")}
                style={styles.cardInfoRowIcon}
              />
              <View style={styles.cardInfoRowDescriptionContainer}>
                <Text style={textStyles.caption}>Church</Text>
                <Text style={textStyles.textInputTitle}>
                  St Mary & St Mina's Church, Arncliffe
                </Text>
              </View>
            </View>
            <View style={styles.cardInfoRowContainer}>
              <Image
                source={require("@/assets/images/icons/calendar-orange-icon.png")}
                style={styles.cardInfoRowIcon}
              />
              <View style={styles.cardInfoRowDescriptionContainer}>
                <Text style={textStyles.caption}>Date</Text>
                <Text style={textStyles.textInputTitle}>Friday, Oct 22</Text>
              </View>
            </View>
            <View style={styles.cardInfoRowContainer}>
              <Image
                source={require("@/assets/images/icons/time-orange-icon.png")}
                style={styles.cardInfoRowIcon}
              />
              <View style={styles.cardInfoRowDescriptionContainer}>
                <Text style={textStyles.caption}>Time</Text>
                <Text style={textStyles.textInputTitle}>07:30 - 8:30 PM</Text>
              </View>
            </View>
            <View style={styles.cardInfoRowContainer}>
              <Image
                source={require("@/assets/images/icons/location-orange-icon.png")}
                style={styles.cardInfoRowIcon}
              />
              <View style={styles.cardInfoRowDescriptionContainer}>
                <Text style={textStyles.caption}>Location</Text>
                <Text style={textStyles.textInputTitle}>
                  The Tops Conference Centre
                </Text>
              </View>
            </View>
          </View>
          <View style={[cardStyles.card, styles.fullDescriptionCard]}>
            <Text>
              {
                "| FRIDAY NIGHT YOUTH MEETING |\n\nJoin us this Friday night for some words of wisdom from our special guest Bethany Kaldas followed by loaded parmigiana and chips to fill your empty stomachs 🍗 🍟\n\nWe look forward to seeing you all @8:30 😊\n\n[same text again to show longer description]\n\n| FRIDAY NIGHT YOUTH MEETING |\n\nJoin us this Friday night for some words of wisdom from our special guest Bethany Kaldas followed by loaded parmigiana and chips to fill your empty stomachs 🍗 🍟\n\nWe look forward to seeing you all @8:30 😊"
              }
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBarContainer}>
        {isSaved ? (
          <SecondaryButton
            style={styles.saveButton}
            text="SAVED"
            onPress={() => {
              setIsSaved(!isSaved);
            }}
            children={
              <Image
                style={styles.saveIcon}
                source={require("@/assets/images/icons/save-white-icon.png")}
              />
            }
            textColor={colors.secondary}
            color={colors.primary}
          />
        ) : (
          <SecondaryButton
            style={styles.saveButton}
            text="SAVE"
            onPress={() => {
              setIsSaved(!isSaved);
            }}
            children={
              <Image
                style={styles.saveIcon}
                source={require("@/assets/images/icons/save-orange-icon.png")}
              />
            }
          />
        )}
      </View>
    </View>
  );
};

export default EventDetailsScreen;
