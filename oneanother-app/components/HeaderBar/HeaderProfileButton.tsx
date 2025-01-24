import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function HeaderProfileButton() {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push("/(main)/profile/EditProfile")}
      style={{ marginRight: 15 }}
    >
      <Ionicons name="person-circle-outline" size={32} color="black" />
    </TouchableOpacity>
  );
}
