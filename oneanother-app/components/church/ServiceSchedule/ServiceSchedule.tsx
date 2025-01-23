import { IEventDto } from "@/services/api/web-api-client";
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const formatTime = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM/PM
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};

const ServiceSchedule: React.FC<IEventDto> = ({
  id,
  title,
  startDate,
  endDate,
}) => {
  return (
    <View key={id} style={styles.card}>
      <Text style={styles.timeText}>
        {formatTime(new Date(startDate!))} - {formatTime(new Date(endDate!))}
      </Text>
      <Text style={styles.textInputTitle}>{title}</Text>
    </View>
  );
};

export default ServiceSchedule;
