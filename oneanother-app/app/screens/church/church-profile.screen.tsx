import ServiceScheduleComponent from "@/app/components/church/service-schedule.component";
import SecondaryButton from "@/app/components/common/secondary-button.component";
import TopBar from "@/app/components/common/top-bar.component";
import EventSummaryComponent from "@/app/components/home/event-summary.component";
import Event from "@/app/data/event.struct";
import ServiceSchedule from "@/app/data/service-schedule.struct";
import textStyles from "@/app/styles/common/text.style";
import styles from "@/app/styles/screens/church-profile.style";
import colors from "@/app/themes/colors";
import { Router, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

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

const services: Array<ServiceSchedule> = [
  {
    id: "0",
    name: "English Liturgy",
    startTime: new Date("2025-05-10T07:30:00"),
    endTime: new Date("2025-05-10T08:30:00"),
  },
  {
    id: "1",
    name: "Arabic Liturgy",
    startTime: new Date("2025-05-10T07:30:00"),
    endTime: new Date("2025-05-10T08:30:00"),
  },
  {
    id: "2",
    name: "English Liturgy",
    startTime: new Date("2025-05-10T07:30:00"),
    endTime: new Date("2025-05-10T08:30:00"),
  },
];

const ChurchProfileScreen: React.FC = () => {
  let router: Router = useRouter();
  const [isFollowing, setIsFollowing] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  return (
    <View style={styles.conatiner}>
      <TopBar style={styles.topBar}>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <Image source={require("@/assets/images/icons/back-icon.png")} />
        </TouchableOpacity>
      </TopBar>
      <ScrollView style={styles.scrollView}>
        <View style={styles.infoCard}>
          <Image
            source={require("@/assets/images/tmp/church-profile-sample.png")}
            style={styles.avatar}
          />
          <Text style={[textStyles.churchProfileName, styles.nameText]}>
            Archangel Michael & St Bishoy Church
          </Text>
          <View style={styles.socialsContainer}>
            <TouchableOpacity>
              <Image
                style={styles.socialsIcon}
                source={require("@/assets/images/icons/web-icon.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.socialsIcon}
                source={require("@/assets/images/icons/location-circular-orange-icon.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.socialsIcon}
                source={require("@/assets/images/icons/facebook-icon.png")}
              />
            </TouchableOpacity>
          </View>
          {isFollowing ? (
            <SecondaryButton
              onPress={() => {
                setIsFollowing(!isFollowing);
              }}
              text="Following"
              color={colors.primary}
              textColor={colors.secondary}
              fill={false}
              style={styles.followButton}
            />
          ) : (
            <SecondaryButton
              onPress={() => {
                setIsFollowing(!isFollowing);
              }}
              text="Follow"
              fill={false}
              style={styles.followButton}
            />
          )}
        </View>
        <View style={styles.servicesTitleContainer}>
          <Text style={textStyles.midTitle}>Service Schedule</Text>
          <Text style={textStyles.textInputTitle}>Sunday</Text>
        </View>
        <View style={styles.servicesListContainer}>
          {services.map((item, index) =>
            index < 2 || isServicesExpanded ? (
              <ServiceScheduleComponent
                key={item.id}
                id={item.id}
                name={item.name}
                startTime={item.startTime}
                endTime={item.endTime}
              />
            ) : (
              <View key={item.id} />
            )
          )}
        </View>
        {!isServicesExpanded ? (
          <TouchableOpacity
            onPress={() => {
              setIsServicesExpanded(true);
            }}
            style={styles.expandButton}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={textStyles.churchServicesExpand}>See More</Text>
              <Image
                source={require("@/assets/images/icons/expand-icon.png")}
                style={styles.expandIcon}
              />
            </View>
          </TouchableOpacity>
        ) : (
          <></>
        )}
        <Text style={[textStyles.midTitle, styles.eventsTitle]}>
          Upcoming Events
        </Text>
        <View style={styles.eventsContainer}>
          {events.map((item) => (
            <EventSummaryComponent
              key={item.id}
              id={item.id}
              name={item.name}
              location={item.location}
              speaker={item.speaker}
              time={item.time}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ChurchProfileScreen;
