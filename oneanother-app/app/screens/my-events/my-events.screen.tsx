import EventSummaryComponent from "@/app/components/home/event-summary.component";
import MainTopBar from "@/app/components/top-bar/main-top-bar";
import Event from "@/app/data/event.struct";
import { EventDto } from "@/app/services/api/web-api-client";
import EventService from "@/app/services/EventService";
import cardStyles from "@/app/styles/common/card.style";
import textStyles from "@/app/styles/common/text.style";
import styles from "@/app/styles/screens/my-events.style";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

const EventsScreen: React.FC = () => {
  const [events, setEvents] = useState<Array<EventDto>>([]);

  const fetchUserEvents = async () => {
    try {
      const paginatedUserEvents = await EventService.getUserEvents(1, 20);
      setEvents(paginatedUserEvents.items || []);
    } catch (error) {
      console.error("Error fetching user events:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchUserEvents();
    }, [])
  );

  useEffect(() => {
    fetchUserEvents();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MainTopBar />
      <View style={styles.container}>
        <Text style={textStyles.screenTitle}>My Events</Text>
        {events.length !== 0 ? (
          <FlatList
            style={styles.flatList}
            data={events}
            keyExtractor={(item) => item.id!.toString()}
            renderItem={({ item }) => (
              <EventSummaryComponent
                id={item.id!}
                title={item.title}
                location={item.location}
                churchName={item.churchName}
                speaker={item.speaker}
                startDate={item.startDate}
              />
            )}
          />
        ) : (
          <View style={[cardStyles.card, styles.noEntryContainer]}>
            <Image
              source={require("@/assets/images/icons/event-orange-icon.png")}
              style={styles.noEntryImage}
            />
            <Text style={[textStyles.midTitle, styles.noEntryTitle]}>
              Save events to see them here
            </Text>
            <Text style={[textStyles.subText, styles.noEntryDescription]}>
              You can find events by all churches on the explore page
            </Text>
          </View>
        )}
      </View>
    </View>
  )
};

export default EventsScreen;
