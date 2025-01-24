import EventItem from "@/components/events/EventItem/EventItem";
import { stylesApp } from "@/themes/app.styles";
import { styles as stylesTab } from "./styles";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { EventDto } from "@/services/api/web-api-client";
import EventService from "@/services/EventService";

const HomeScreen: React.FC = () => {
  const [events, setEvents] = useState<Array<EventDto>>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const paginatedEvents = await EventService.getEventsForFollowedChurches(
          1,
          20
        );
        setEvents(paginatedEvents.items || []);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <View style={stylesApp.viewContainer}>
      <Text style={stylesTab.txtHeaderTitle}>Home</Text>
      <FlatList
        style={stylesApp.flex1}
        data={events}
        keyExtractor={(item) => item.id!.toString()}
        renderItem={({ item }) => (
          <EventItem
            id={item.id}
            title={item.title}
            location={item.location}
            churchName={item.churchName}
            speaker={item.speaker}
            startDate={item.startDate}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;
