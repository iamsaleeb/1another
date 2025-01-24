import SecondaryButton from "@/components/common/secondary-button.component";
import EventService from "@/services/EventService";
import textStyles from "@/styles/common/text.style";
import styles from "@/styles/screens/explore.style";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { EventDto } from "@/services/api/web-api-client";
import EventItem from "@/components/events/EventItem/EventItem";
import { styles as stylesTab } from "./styles";
import { stylesApp } from "@/themes/app.styles";

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
    <View style={stylesApp.viewContainer}>
      <Text style={stylesTab.txtHeaderTitle}>Explore</Text>
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
        style={stylesApp.flex1}
        data={events}
        keyExtractor={(item) => item.id!.toString()}
        renderItem={({ item }) => (
          <EventItem
            id={item.id}
            title={item.title}
            location={item.location}
            churchName="Church Name"
            speaker={item.speaker}
            startDate={item.startDate}
          />
        )}
      />
    </View>
  );
};

export default ExploreScreen;
