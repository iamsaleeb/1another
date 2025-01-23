import { StyleSheet } from "react-native";
import cardStyles from "@/styles/common/card.style";
import textStyles from "@/styles/common/text.style";

const styles = StyleSheet.create({
  card: {
    ...cardStyles.card,
    margin: 10,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  timeText: {
    ...textStyles.timeText,
    fontSize: 16,
    fontWeight: "bold",
  },
  textInputTitle: {
    ...textStyles.textInputTitle,
    fontSize: 18,
    marginTop: 5,
  },
});

export default styles;
