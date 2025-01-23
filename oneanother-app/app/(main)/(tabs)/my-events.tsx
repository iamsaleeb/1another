import { EventDto } from "@/services/api/web-api-client";
import EventService from "@/services/EventService";
import cardStyles from "@/styles/common/card.style";
import textStyles from "@/styles/common/text.style";
import styles from "@/styles/screens/my-events.style";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { stylesApp } from "@/themes/app.styles";
import EventItem from "@/components/events/EventItem/EventItem";
import { styles as stylesTab } from "./styles";

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
      <View style={stylesApp.viewContainer}>
        <Text style={stylesTab.txtHeaderTitle}>My Events</Text>
        {events.length !== 0 ? (
          <FlatList
            style={stylesApp.flex1}
            contentContainerStyle={{ padding: 16 }}
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
  );
};

export default EventsScreen;
