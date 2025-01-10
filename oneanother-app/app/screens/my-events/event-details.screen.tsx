import SecondaryButton from "@/app/components/common/secondary-button.component";
import TopBar from "@/app/components/common/top-bar.component";
import { EventDto } from "@/app/services/api/web-api-client";
import EventService from "@/app/services/EventService";
import cardStyles from "@/app/styles/common/card.style";
import textStyles from "@/app/styles/common/text.style";
import styles from "@/app/styles/screens/event-details.style";
import colors from "@/app/themes/colors";
import { Router, useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const EventDetailsScreen: React.FC = () => {
  let router: Router = useRouter();
  const [isSaved, setIsSaved] = useState(false);
  const [event, setEvent] = useState<EventDto | null>(new EventDto());
  const { id } = useLocalSearchParams();

  useEffect(() => {
    const fetchEvent = async () => {
      if (id) {
        try {
          const eventData = await EventService.getEventById(Number(id));
          setEvent(eventData);
          console.log("Event data:", eventData);
        } catch (error) {
          console.error("Error fetching event data:", error);
        }
      }
    };

    fetchEvent();
  }, [id]);

  if (!event) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

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
            <Text style={textStyles.midTitle}>{event?.title}</Text>
            <View style={styles.cardInfoRowContainer}>
              <Image
                source={require("@/assets/images/icons/church-orange-event-icon.png")}
                style={styles.cardInfoRowIcon}
              />
              <View style={styles.cardInfoRowDescriptionContainer}>
                <Text style={textStyles.caption}>Church</Text>
                <Text style={textStyles.textInputTitle}>
                  {event.churchName}
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
                <Text style={textStyles.textInputTitle}>
                  {event.date?.toDateString()}
                </Text>
              </View>
            </View>
            <View style={styles.cardInfoRowContainer}>
              <Image
                source={require("@/assets/images/icons/time-orange-icon.png")}
                style={styles.cardInfoRowIcon}
              />
              <View style={styles.cardInfoRowDescriptionContainer}>
                <Text style={textStyles.caption}>Time</Text>
                <Text style={textStyles.textInputTitle}>
                  {event.date?.toLocaleTimeString()}
                </Text>
              </View>
            </View>
            <View style={styles.cardInfoRowContainer}>
              <Image
                source={require("@/assets/images/icons/location-orange-icon.png")}
                style={styles.cardInfoRowIcon}
              />
              <View style={styles.cardInfoRowDescriptionContainer}>
                <Text style={textStyles.caption}>Location</Text>
                <Text style={textStyles.textInputTitle}>{event.location}</Text>
              </View>
            </View>
          </View>
          <View style={[cardStyles.card, styles.fullDescriptionCard]}>
            <Text>{event.description}</Text>
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
