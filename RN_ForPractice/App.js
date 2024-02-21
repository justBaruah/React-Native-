import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Linking,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const DATA = [
    { ID: "1", Name: "Shivaji Maharaj" },
    { ID: "2", Name: "Baji Rao I" },
    { ID: "3", Name: "Balaji Vishwanath" },
    { ID: "4", Name: "Peshwa Madhavrao I" },
    { ID: "5", Name: "Peshwa Nanasaheb" },
    { ID: "6", Name: "Mahadji Shinde" },
    { ID: "7", Name: "Raghunath Rao" },
    { ID: "8", Name: "Peshwa Bajirao II" },
    { ID: "9", Name: "Malhar Rao Holkar" },
    { ID: "10", Name: "Ahilyabai Holkar" },
    { ID: "11", Name: "Ranoji Shinde" },
    { ID: "12", Name: "Govind Rao Ghatge" },
    { ID: "13", Name: "Pilaji Jadhav" },
    { ID: "14", Name: "Dhanaji Jadhav" },
    { ID: "15", Name: "Sambhaji" },
    { ID: "16", Name: "Prataprao Gujar" },
    { ID: "17", Name: "Tukoji Rao Holkar" },
    { ID: "18", Name: "Santaji Ghorpade" },
    { ID: "19", Name: "Daulat Rao Sindhia" },
  ];

  const handlePress = () => {
    console.log("Button Clicked");
    Alert.alert(
      "Jai Shivaji",
      "A humble tribute to Chatrapati Shivaji",
      [
        {
          text: "Know More about the great leader",
          onPress: () => {
            console.log("Hi");
            Linking.openURL("https://en.wikipedia.org/wiki/Shivaji");
          },
        },
        {
          text: "Know More Maratha Wars",
          onPress: () => {
            Linking.openURL("https://www.britannica.com/event/Maratha-Wars");
          },
        },
      ],
      { cancelable: true, style: "horizontal" }
    );
    // Add more functions here if needed
  };
  const renderItem = ({ item }) => (
    <Text style={{ fontWeight: "bold", fontSize: 30, padding: 20 }}>
      {item.Name}
    </Text>
  );
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 250 }}>
        <Text style={{ color: "orange" }}>Touch Below</Text>
        <Button
          title="Jai Bhavani"
          color="orange"
          onPress={handlePress}
          titleStyle={{ color: "black", fontSize: 28, fontWeight: "bold" }}
        />
      </View>
      <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
        Here are some list of Maratha warriors
      </Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.ID}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
    />

      {/* by default scrollview is vertical */}
      {/* <ScrollView style={{ color: "orange" }} showsVerticalScrollIndicator={false}>
      {
    DATA.map(item => <Text key={item.id} style={{fontWeight: "bold", fontSize: 30, padding:20 }}>{item.Name}</Text>)
 }
 </ScrollView> */}
      {/* <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
     {
          DATA.map(item => <Text key={item.ID} style={{ fontWeight: "bold", fontSize: 30, padding: 20 }}>{item.Name}</Text>)
        }
 </ScrollView>       */}

      {/* <ActivityIndicator size="large" color="orange" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    color: "pale", // Corrected typo here
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 28, fontWeight: "bold", paddingTop: 400, paddingLeft: 60 },
  title1: { fontSize: 28, fontWeight: "bold", color: "green" },
  bgtitle: { backgroundColor: "yellow" },
});
