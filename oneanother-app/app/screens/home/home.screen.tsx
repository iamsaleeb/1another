import EventSummaryComponent from "@/app/components/home/event-summary.component";
import MainTopBar from "@/app/components/top-bar/main-top-bar";
import Event from "@/app/data/event.struct";
import { EventDto } from "@/app/services/api/web-api-client";
import EventService from "@/app/services/EventService";
import cardStyles from "@/app/styles/common/card.style";
import textStyles from "@/app/styles/common/text.style";
import styles from "@/app/styles/screens/home.style";
import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

const HomeScreen: React.FC = () => {
  const [events, setEvents] = useState<Array<EventDto>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const paginatedEvents = await EventService.getEventsForFollowedChurches(1, 10);
        setEvents(paginatedEvents.items || []);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MainTopBar />
      <View style={styles.container}>
        <Text style={textStyles.screenTitle}>Home</Text>
        {events.length !== 0 ? (
          <FlatList
            style={styles.flatList}
            data={events}
            keyExtractor={(item) => item.id!.toString()}
            renderItem={({ item }) => (
              <EventSummaryComponent
                id={item.id}
                title={item.title}
                location={item.location}
                speaker={item.speaker}
                startDate={item.startDate}
              />
            )}
          />
        ) : (
          <View style={[cardStyles.card, styles.noEntryContainer]}>
            <Image
              source={require("@/assets/images/icons/church-orange-icon.svg")}
            />
            <Text style={[textStyles.midTitle, styles.noEntryTitle]}>
              Start following churches to see their events on your Homepage
            </Text>
            <Text style={[textStyles.subText, styles.noEntryDescription]}>
              Otherwise, you can find events by all churches on the explore page
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
