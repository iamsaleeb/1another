import SecondaryButton from "@/app/components/common/secondary-button.component";
import EventSummaryComponent from "@/app/components/home/event-summary.component";
import MainTopBar from "@/app/components/top-bar/main-top-bar";
import EventService from "@/app/services/EventService";
import textStyles from "@/app/styles/common/text.style";
import styles from "@/app/styles/screens/explore.style";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { EventDto } from "@/app/services/api/web-api-client";

const ExploreScreen: React.FC = () => {
  const [events, setEvents] = useState<Array<EventDto>>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const paginatedEvents = await EventService.getPaginatedEvents(1, 10);
        setEvents(paginatedEvents.items || []);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MainTopBar />
      <View style={styles.container}>
        <Text style={textStyles.screenTitle}>Explore</Text>
        <View style={styles.titleContainer}>
          <View style={styles.timeSortHorizontalContainerTop}>
            <SecondaryButton text="Today" />
            <SecondaryButton text="Tomorrow" />
          </View>
          <View style={styles.timeSortHorizontalContainerBottom}>
            <SecondaryButton text="Next Week" />
            <SecondaryButton text="Next Weekend" />
          </View>
        </View>
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
      </View>
    </View>
  );
};

export default ExploreScreen;
