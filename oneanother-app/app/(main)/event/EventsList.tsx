import EventItem from "@/components/events/EventItem/EventItem";
import { IEventDto } from "@/services/api/web-api-client";
import styles from "@/styles/screens/explore.style";
import React from "react";
import { FlatList, View } from "react-native";

interface EventsListProps {
    events: IEventDto[];
}

const EventsList: React.FC<EventsListProps> = ({ events }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <FlatList
                    style={styles.flatList}
                    data={events}
                    keyExtractor={(item) => item.id!.toString()}
                    renderItem={({ item }) => (
                        <EventItem
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

export default EventsList;