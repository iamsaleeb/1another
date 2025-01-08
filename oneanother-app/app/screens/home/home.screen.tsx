import EventSummaryComponent from "@/app/components/home/event-summary.component";
import MainTopBar from "@/app/components/top-bar/main-top-bar";
import Event from "@/app/data/event.struct";
import cardStyles from "@/app/styles/common/card.style";
import textStyles from "@/app/styles/common/text.style";
import styles from "@/app/styles/screens/home.style";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";

const events: Array<Event> = [
  {
    id: "0",
    name: "The Cross of Forgiveness",
    location: "St Mary & St Mina's Church, Bexley",
    speaker: "Fr Dan Fanous",
    time: new Date("2025-05-10T19:30:00"),
  },
  {
    id: "1",
    name: "Winter Youth Camp",
    location: "St Mary & Sts Cosman and Demian Church",
    speaker: "Youthworks Chaldercot",
    time: new Date("2025-05-10T19:30:00"),
  },
  {
    id: "2",
    name: "Apologetics for the Resurrection 101",
    location: "St Mary & St Mina's Church, Arncliffe",
    speaker: "Bethany Kaldas",
    time: new Date("2025-10-22T19:30:00"),
  },
  {
    id: "3",
    name: "Saintly Strokes",
    location: "Archangel Michael and St Bishoy Church",
    speaker: "Paid Event",
    time: new Date("2025-05-10T19:30:00"),
  },
  {
    id: "4",
    name: "Gospel of St. Luke",
    location: "St Abanoub and The Holy Apostles Church",
    speaker: "Mark Shenouda",
    time: new Date("2025-05-10T19:30:00"),
  },
];

const HomeScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <MainTopBar />
      <View style={styles.container}>
        <Text style={textStyles.screenTitle}>Home</Text>
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
              source={require("@/assets/images/icons/church-orange-icon.png")}
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
