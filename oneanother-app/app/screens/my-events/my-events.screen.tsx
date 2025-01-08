import EventSummaryComponent from "@/app/components/home/event-summary.component";
import MainTopBar from "@/app/components/top-bar/main-top-bar";
import Event from "@/app/data/event.struct";
import cardStyles from "@/app/styles/common/card.style";
import textStyles from "@/app/styles/common/text.style";
import styles from "@/app/styles/screens/my-events.style";
import { FlatList, Image, Text, View } from "react-native";

const events: Array<Event> = [
  {
    id: "0",
    name: "Apologetics for the Resurrection 101",
    location: "St Mary & St Mina's Church, Arncliffe",
    speaker: "Bethany Kaldas",
    time: new Date("2025-10-22T19:30:00"),
  },
];

const EventsScreen = () => (
  <View style={{ flex: 1 }}>
    <MainTopBar />
    <View style={styles.container}>
      <Text style={textStyles.screenTitle}>My Events</Text>
      {events.length !== 0 ? (
        <FlatList
          style={styles.flatList}
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <EventSummaryComponent
              id={item.id}
              name={item.name}
              location={item.location}
              speaker={item.speaker}
              time={item.time}
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

export default EventsScreen;
