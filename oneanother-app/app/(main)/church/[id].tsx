import SecondaryButton from "@/components/common/secondary-button.component";
import TopBar from "@/components/common/top-bar.component";
import { ChurchDto, EventDto } from "@/services/api/web-api-client";
import ChurchService from "@/services/ChurchService";
import { colors as colorTheme } from "@/themes/theme.styles";
import { stylesApp } from "@/themes/app.styles";
import { Router, useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Image,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ServiceSchedule from "@/components/church/ServiceSchedule/ServiceSchedule";
import { Button, Icon } from "@rneui/base";

const ChurchDetailsScreen: React.FC = () => {
  let router: Router = useRouter();
  const { id } = useLocalSearchParams();
  const [isFollowing, setIsFollowing] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const [church, setChurch] = useState<ChurchDto | null>(null);
  const [events, setEvents] = useState<Array<EventDto>>([]);
  const [serviceEvents, setServiceEvents] = useState<Array<EventDto>>([]);

  useEffect(() => {
    const fetchChurch = async () => {
      if (id) {
        try {
          const churchData = await ChurchService.getChurchById(Number(id));
          const filteredEvents = churchData.events?.filter(
            (event) => event.eventType !== 1
          );
          const filteredServiceEvents = churchData.events?.filter(
            (event) => event.eventType === 1
          );
          setEvents(filteredEvents!);
          setServiceEvents(filteredServiceEvents!);
          setChurch(churchData);
          setIsFollowing(churchData.isFollowed ?? false);
        } catch (error) {
          console.error("Error fetching church data:", error);
        }
      }
    };

    fetchChurch();
  }, [id]);

  const handleFollow = async () => {
    if (id) {
      try {
        if (isFollowing) {
          await ChurchService.unfollowChurch(Number(id));
        } else {
          await ChurchService.followChurch(Number(id));
        }
        setIsFollowing(!isFollowing);
      } catch (error) {
        console.error("Error updating follow status:", error);
      }
    }
  };

  const headerList = () => (
    <View style={styles.viewChurchInfo}>
      {/* image */}
      <Image
        source={require("@/assets/images/tmp/church-profile-sample.png")}
        style={styles.imgChurch}
        resizeMode="cover"
      />

      {/* title */}
      <Text style={[styles.txtTitle, stylesApp.mt16]}>
        Archangel Michael & St Bishoy Church
      </Text>

      {/* icons */}
      <View style={[styles.viewInfoIconWrapper, stylesApp.mt8]}>
        <View style={[styles.viewInfoIcon]}>
          <Image
            source={require("@/assets/images/icons/web-icon.png")}
            width={20}
          />
        </View>
        <View style={[styles.viewInfoIcon, stylesApp.ml8]}>
          <Image
            source={require("@/assets/images/icons/location-circular-orange-icon.png")}
            width={20}
          />
        </View>
        <View style={[styles.viewInfoIcon, stylesApp.ml8]}>
          <Image source={require("@/assets/images/icons/facebook-icon.png")} />
        </View>
      </View>

      {/* follow */}
      <Button
        type={isFollowing ? "solid" : "outline"}
        containerStyle={stylesApp.mt16}
        buttonStyle={
          isFollowing
            ? [
                stylesApp.butSmallOutline,
                { backgroundColor: colorTheme.primary },
              ]
            : stylesApp.butSmallOutline
        }
        titleStyle={
          isFollowing
            ? [stylesApp.titleButSmallOutline, { color: colorTheme.light }]
            : stylesApp.titleButSmallOutline
        }
        title={isFollowing ? "Following" : "Follow"}
        onPress={handleFollow}
      />
    </View>
  );

  const sectionHeader = (section: any) => {
    if (section.title === "Service Schedule") {
      return (
        <View style={styles.viewSectionHeader}>
          <Text style={[styles.txtTitle, stylesApp.txtDark]}>
            Service Schedule
          </Text>
        </View>
      );
    }

    return (
      <View style={styles.viewSectionHeader}>
        <Text style={[styles.txtTitle, stylesApp.txtDark]}>
          Upcoming Events
        </Text>
      </View>
    );
  };

  const sectionFooter = (section: any) => {
    if (section.title === "Service Schedule" && serviceEvents.length > 2) {
      return (
        <Button
          type="clear"
          titleStyle={stylesApp.titleButSmallOutline}
          title="See More"
          icon={
            <Icon
              type="ionicon"
              name="arrow-down"
              size={20}
              color={colorTheme.primary}
              style={stylesApp.ml8}
            />
          }
          iconRight
          onPress={() => setIsServicesExpanded(!isServicesExpanded)}
        />
      );
    }
    return null;
  };

  const renderSectionItem = ({ item, section }: any) => {
    if (section.title === "Service Schedule") {
      return (
        <View style={styles.viewScheduleItem}>
          <Text style={[styles.txtScheduleDate, stylesApp.mb2]}>
            {new Date(item.startDate).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            -{" "}
            {new Date(item.endDate).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
          <Text style={styles.txtSmall}>{item.title}</Text>
        </View>
      );
    } else {
      return <EventItem {...item} />;
    }
  };

  const sections = [
    {
      title: "Service Schedule",
      data: isServicesExpanded ? serviceEvents : serviceEvents.slice(0, 2),
    },
    {
      title: "Upcoming Events",
      data: events,
    },
  ];

  return (
    <View style={stylesApp.viewContainer}>
      <SectionList
        contentContainerStyle={styles.contentCtnList}
        ListHeaderComponent={headerList()}
        stickySectionHeadersEnabled={false}
        keyExtractor={(item, index) => `section${index}`}
        renderItem={renderSectionItem}
        renderSectionHeader={({ section }) => sectionHeader(section)}
        renderSectionFooter={({ section }) => sectionFooter(section)}
        sections={sections}
      />
    </View>
  );
};

export default ChurchDetailsScreen;

import { StyleSheet } from "react-native";
import { styles as stylesEventItem } from "@/components/events/EventItem/styles";
import EventItem from "@/components/events/EventItem/EventItem";

export const styles = StyleSheet.create({
  contentCtnList: {
    padding: 24,
  },

  viewChurchInfo: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: colorTheme.primaryOpacity(0.05),
    alignItems: "center",
  },
  imgChurch: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },

  txtTitle: {
    fontWeight: "800",
    fontSize: 19,
    lineHeight: 22,
    color: colorTheme.primary,
    textAlign: "center",
  },
  viewInfoIconWrapper: {
    ...stylesApp.flexRow,
  },
  viewInfoIcon: {
    width: 32,
    height: 32,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: colorTheme.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  txtSmall: {
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 14,
    color: colorTheme.black,
  },

  viewSectionHeader: {
    marginTop: 24,
    marginBottom: 16,
    alignItems: "flex-start",
  },

  viewScheduleItem: {
    ...stylesEventItem.viewContainer,
    marginBottom: 8,
  },
  txtScheduleDate: {
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 14,
    color: colorTheme.primary,
  },
});
