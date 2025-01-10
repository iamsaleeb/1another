import Event from "@/app/data/event.struct";
import cardStyles from "@/app/styles/common/card.style";
import textStyles from "@/app/styles/common/text.style";
import styles from "@/app/styles/components/event/event-summary.style";
import { Router, useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

const formatTime = (time: Date) => {
  const weekday = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const month = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  return `${weekday[time.getDay()]}, ${time.getDate()} ${
    month[time.getMonth()]
  } | ${
    time.getHours() < 12 ? time.getHours() : time.getHours() - 12
  }:${time.getMinutes()} ${time.getHours() < 12 ? "am" : "pm"}`.toUpperCase();
};

const EventSummaryComponent: React.FC<Event> = ({
  id,
  name,
  location,
  speaker,
  time,
}) => {
  let router: Router = useRouter();
  return (
    <TouchableOpacity
      key={id}
      style={[cardStyles.card, styles.touchable]}
      onPress={() => {
        router.push(`/screens/my-events/event-details.screen?id=${id}`);
      }}
    >
      <Text style={textStyles.timeText}>{formatTime(time)}</Text>
      <Text style={textStyles.midTitle}>{name}</Text>
      <Text style={textStyles.textInputTitle}>{location}</Text>
      <Text style={textStyles.subText}>{speaker}</Text>
      <TouchableOpacity style={styles.shareTouchable}>
        <Image
          style={styles.shareImage}
          source={require("@/assets/images/icons/share-grey-icon.png")}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default EventSummaryComponent;
