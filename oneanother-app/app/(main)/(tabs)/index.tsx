import EventItem from "@/components/events/EventItem/EventItem";
import { EventDto } from "@/services/api/web-api-client";
import { stylesApp } from "@/themes/app.styles";
import { styles as stylesTab } from "./styles";
import React from "react";
import { FlatList, Text, View } from "react-native";

const mockEvents: EventDto[] = [
  {
    id: 1,
    title: "Sunday Service",
    location: "Main Auditorium",
    speaker: "Pastor John",
    startDate: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Youth Meeting",
    location: "Youth Center",
    speaker: "Sarah Wilson",
    startDate: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
  },
  {
    id: 3,
    title: "Bible Study",
    location: "Room 101",
    speaker: "Dr. Michael Brown",
    startDate: new Date(Date.now() + 172800000).toISOString(), // Day after tomorrow
  },
];

const HomeScreen: React.FC = () => {
  return (
    <View style={stylesApp.viewContainer}>
      <Text style={stylesTab.txtHeaderTitle}>Home</Text>
      <FlatList
        style={stylesApp.flex1}
        contentContainerStyle={{ padding: 16 }}
        data={mockEvents}
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

export default HomeScreen;