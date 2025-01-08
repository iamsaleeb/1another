import ServiceSchedule from "@/app/data/service-schedule.struct";
import cardStyles from "@/app/styles/common/card.style";
import textStyles from "@/app/styles/common/text.style";
import styles from "@/app/styles/components/church/service-schedule.style";
import React from "react";
import { Text, View } from "react-native";

const formatTime = (startTime: Date, endTime: Date) => {
  return `${
    startTime.getHours() < 12 ? startTime.getHours() : startTime.getHours() - 12
  }:${startTime.getMinutes()} ${startTime.getHours() < 12 ? "AM" : "PM"} - ${
    endTime.getHours() < 12 ? endTime.getHours() : endTime.getHours() - 12
  }:${endTime.getMinutes()} ${endTime.getHours() < 12 ? "AM" : "PM"}`;
};

const ServiceScheduleComponent: React.FC<ServiceSchedule> = ({
  id,
  name,
  startTime,
  endTime,
}) => {
  return (
    <View key={id} style={[cardStyles.card, styles.card]}>
      <Text style={textStyles.timeText}>{formatTime(startTime, endTime)}</Text>
      <Text style={textStyles.textInputTitle}>{name}</Text>
    </View>
  );
};

export default ServiceScheduleComponent;
