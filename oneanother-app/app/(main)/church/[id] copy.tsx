// import SecondaryButton from "@/components/common/secondary-button.component";
// import TopBar from "@/components/common/top-bar.component";
// import { ChurchDto, EventDto } from "@/services/api/web-api-client";
// import ChurchService from "@/services/ChurchService";
// import textStyles from "@/styles/common/text.style";
// import styles from "@/styles/screens/church-profile.style";
// import colors from "@/themes/colors";
// import { Router, useLocalSearchParams, useRouter } from "expo-router";
// import React, { useEffect, useState } from "react";
// import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
// import EventsList from "../event/EventsList";
// import ServiceSchedule from "@/components/church/ServiceSchedule/ServiceSchedule";

// const ChurchDetailsScreen: React.FC = () => {
//   let router: Router = useRouter();
//   const { id } = useLocalSearchParams();
//   const [isFollowing, setIsFollowing] = useState(false);
//   const [isServicesExpanded, setIsServicesExpanded] = useState(false);
//   const [church, setChurch] = useState<ChurchDto | null>(null);
//   const [events, setEvents] = useState<Array<EventDto>>([]);
//   const [serviceEvents, setServiceEvents] = useState<Array<EventDto>>([]);

//   useEffect(() => {
//     const fetchChurch = async () => {
//       if (id) {
//         try {
//           const churchData = await ChurchService.getChurchById(Number(id));
//           const filteredEvents = churchData.events?.filter(
//             (event) => event.eventType !== 1
//           );
//           const filteredServiceEvents = churchData.events?.filter(
//             (event) => event.eventType === 1
//           );
//           setEvents(filteredEvents!);
//           setServiceEvents(filteredServiceEvents!);
//           setChurch(churchData);
//           setIsFollowing(churchData.isFollowed ?? false);
//         } catch (error) {
//           console.error("Error fetching church data:", error);
//         }
//       }
//     };

//     fetchChurch();
//   }, [id]);

//   const handleFollow = async () => {
//     if (id) {
//       try {
//         if (isFollowing) {
//           await ChurchService.unfollowChurch(Number(id));
//         } else {
//           await ChurchService.followChurch(Number(id));
//         }
//         setIsFollowing(!isFollowing);
//       } catch (error) {
//         console.error("Error updating follow status:", error);
//       }
//     }
//   };

//   if (!church) {
//     return (
//       <View style={styles.conatiner}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.conatiner}>
//       <TopBar style={styles.topBar}>
//         <TouchableOpacity
//           onPress={() => {
//             router.back();
//           }}
//         >
//           <Image source={require("@/assets/images/icons/back-icon.png")} />
//         </TouchableOpacity>
//       </TopBar>
//       <ScrollView style={styles.scrollView}>
//         <View style={styles.infoCard}>
//           <Image
//             source={require("@/assets/images/tmp/church-profile-sample.png")}
//             style={styles.avatar}
//           />
//           <Text style={[textStyles.churchProfileName, styles.nameText]}>
//             {church.name}
//           </Text>
//           <View style={styles.socialsContainer}>
//             <TouchableOpacity>
//               <Image
//                 style={styles.socialsIcon}
//                 source={require("@/assets/images/icons/web-icon.png")}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image
//                 style={styles.socialsIcon}
//                 source={require("@/assets/images/icons/location-circular-orange-icon.png")}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image
//                 style={styles.socialsIcon}
//                 source={require("@/assets/images/icons/facebook-icon.png")}
//               />
//             </TouchableOpacity>
//           </View>
//           <SecondaryButton
//             onPress={handleFollow}
//             text={isFollowing ? "Following" : "Follow"}
//             color={isFollowing ? colors.primary : undefined}
//             textColor={isFollowing ? colors.secondary : undefined}
//             fill={false}
//             style={styles.followButton}
//           />
//         </View>
//         <View style={styles.servicesTitleContainer}>
//           <Text style={textStyles.midTitle}>Service Schedule</Text>
//           <Text style={textStyles.textInputTitle}>Sunday</Text>
//         </View>
//         <View style={styles.servicesListContainer}>
//           {serviceEvents.map((item, index) =>
//             index < 2 || isServicesExpanded ? (
//               <ServiceSchedule
//                 key={item.id}
//                 id={item.id}
//                 title={item.title}
//                 startDate={item.startDate}
//                 endDate={item.endDate}
//               />
//             ) : (
//               <View key={item.id} />
//             )
//           )}
//         </View>
//         {!isServicesExpanded ? (
//           <TouchableOpacity
//             onPress={() => {
//               setIsServicesExpanded(true);
//             }}
//             style={styles.expandButton}
//           >
//             <View style={{ flexDirection: "row" }}>
//               <Text style={textStyles.churchServicesExpand}>See More</Text>
//               <Image
//                 source={require("@/assets/images/icons/expand-icon.png")}
//                 style={styles.expandIcon}
//               />
//             </View>
//           </TouchableOpacity>
//         ) : (
//           <></>
//         )}
//         <Text style={[textStyles.midTitle, styles.eventsTitle]}>
//           Upcoming Events
//         </Text>
//         <View style={styles.eventsContainer}>
//           {events.map((item) => (
//             <EventsList key={item.id} events={events} />
//           ))}
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default ChurchDetailsScreen;
