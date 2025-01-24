import { IEventDto } from "@/services/api/web-api-client";
import { styles } from "./styles";
import { stylesApp } from "@/themes/app.styles";
import { colors as colorTheme } from "@/themes/theme.styles";
import { Router, useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Button, Icon } from "@rneui/base";

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
      onPress={() => router.push(`/event/${id}`)}
      activeOpacity={0.5}
    >
      <View style={styles.viewContainer}>
        <View style={styles.viewHeader}>
          {/* time */}
          <Text style={styles.txtDate}>{formatTime(startDate!)}</Text>
        </View>

        {/* title */}
        <Text style={styles.txtTitle}>{title}</Text>

        <View style={styles.viewContent}>
          <View style={styles.viewBody}>
            <Text style={styles.txtBody}>{churchName}</Text>
            <Text style={styles.txtFooter}>{speaker}</Text>
          </View>
        </View>

        {/* share  */}
        <Button
          type="clear"
          containerStyle={styles.ctnButShare}
          icon={
            <Icon
              type="ionicon"
              name="share-social-outline"
              size={18}
              color={colorTheme.grey}
            />
          }
        />
      </View>
    </TouchableOpacity>

    // <TouchableOpacity
    //   key={id}
    //   style={[styles.card, styles.touchable]}
    //   onPress={() => router.push(`/event/${id}`)}
    // >
    //   <Text style={textStyles.timeText}>
    //     {formatTime(new Date(startDate!))}
    //   </Text>
    //   <Text style={textStyles.midTitle}>{title}</Text>
    //   <Text style={textStyles.textInputTitle}>{churchName}</Text>
    //   <Text style={textStyles.subText}>{speaker}</Text>
    //   <TouchableOpacity style={styles.shareTouchable}>
    //     <Image
    //       style={styles.shareImage}
    //       source={require("@/assets/images/icons/share-grey-icon.svg")}
    //     />
    //   </TouchableOpacity>
    // </TouchableOpacity>
  );
};

export default EventSummaryComponent;
