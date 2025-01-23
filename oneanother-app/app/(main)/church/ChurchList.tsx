import React from "react";
import { FlatList, View } from "react-native";
import { ChurchDto } from "@/services/api/web-api-client";
import styles from "@/styles/screens/churches.style";
import ChurchItem from "@/components/church/ChurchItem/ChurchItem";

interface ChurchListProps {
  churches: ChurchDto[];
}

const ChurchList: React.FC<ChurchListProps> = ({ churches }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          numColumns={4}
          data={churches}
          keyExtractor={(item) => item.id!.toString()}
          renderItem={({ item }) => (
            <ChurchItem id={item.id} name={item.name} />
          )}
        />
      </View>
    </View>
  );
};

export default ChurchList;
