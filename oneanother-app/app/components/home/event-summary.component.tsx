import { EventDto, IEventDto } from "@/app/services/api/web-api-client";
import cardStyles from "@/app/styles/common/card.style";
import textStyles from "@/app/styles/common/text.style";
import styles from "@/app/styles/components/event/event-summary.style";
import { Router, useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

const formatTime = (time: Date) => {
  if (!(time instanceof Date) || isNaN(time.getTime())) {
    return "Invalid Date";
  }

  const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const month = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const formattedTime = `${hours % 12 || 12}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${hours < 12 ? "AM" : "PM"}`;

  return `${weekday[time.getDay()]}, ${time.getDate()} ${
    month[time.getMonth()]
  } | ${formattedTime}`;
};

const EventSummaryComponent: React.FC<IEventDto> = ({
  id,
  title,
  churchName,
  speaker,
  startDate,
  endDate,
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
      <Text style={textStyles.timeText}>{formatTime(new Date(startDate!))}</Text>
      <Text style={textStyles.midTitle}>{title}</Text>
      <Text style={textStyles.textInputTitle}>{churchName}</Text>
      <Text style={textStyles.subText}>{speaker}</Text>
      <TouchableOpacity style={styles.shareTouchable}>
        <Image
          style={styles.shareImage}
          source={require("@/assets/images/icons/share-grey-icon.svg")}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default EventSummaryComponent;
