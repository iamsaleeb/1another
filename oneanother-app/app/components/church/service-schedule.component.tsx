import ServiceSchedule from "@/app/data/service-schedule.struct";
import { IEventDto } from "@/app/services/api/web-api-client";
import cardStyles from "@/app/styles/common/card.style";
import textStyles from "@/app/styles/common/text.style";
import styles from "@/app/styles/components/church/service-schedule.style";
import React from "react";
import { Text, View } from "react-native";

const formatTime = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM/PM
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};

const ServiceScheduleComponent: React.FC<IEventDto> = ({
  id,
  title,
  startDate,
  endDate,
}) => {
  return (
    <View key={id} style={[cardStyles.card, styles.card]}>
      <Text style={textStyles.timeText}>
        {formatTime(new Date(startDate!))} - {formatTime(new Date(endDate!))}
      </Text>
      <Text style={textStyles.textInputTitle}>{title}</Text>
    </View>
  );
};

export default ServiceScheduleComponent;
