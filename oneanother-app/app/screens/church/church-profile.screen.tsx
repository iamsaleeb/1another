import ServiceScheduleComponent from "@/app/components/church/service-schedule.component";
import SecondaryButton from "@/app/components/common/secondary-button.component";
import TopBar from "@/app/components/common/top-bar.component";
import EventSummaryComponent from "@/app/components/home/event-summary.component";
import Event from "@/app/data/event.struct";
import ServiceSchedule from "@/app/data/service-schedule.struct";
import { ChurchDto, EventDto } from "@/app/services/api/web-api-client";
import ChurchService from "@/app/services/ChurchService";
import textStyles from "@/app/styles/common/text.style";
import styles from "@/app/styles/screens/church-profile.style";
import colors from "@/app/themes/colors";
import { Router, useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const ChurchProfileScreen: React.FC = () => {
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
        } catch (error) {
          console.error("Error fetching church data:", error);
        }
      }
    };

    fetchChurch();
  }, [id]);

  if (!church) {
    return (
      <View style={styles.conatiner}>
        <Text>Loading...</Text>
      </View>
    );
  }

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
            {church.name}
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
          {serviceEvents.map((item, index) =>
            index < 2 || isServicesExpanded ? (
              <ServiceScheduleComponent
                key={item.id}
                id={item.id}
                title={item.title}
                startDate={item.startDate}
                endDate={item.endDate}
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
              title={item.title}
              churchName={item.churchName}
              location={item.location}
              speaker={item.speaker}
              startDate={item.startDate}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ChurchProfileScreen;
