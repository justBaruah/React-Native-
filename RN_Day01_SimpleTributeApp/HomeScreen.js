import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Modal,
  ImageBackground,
  Image,
  Alert,
  Linking,
  ScrollView, // Import ScrollView
  FlatList, // Import FlatList
} from "react-native";


export default function HomeScreen() {
  const DATA = [
    {
      ID: "1",
      Name: "Pre-Maratha Era: A Call to Greatness",
      Info: " The formidable might of the Mughal and Deccan Sultanates could have deterred any resistance. Yet, Shivaji saw not the strength of his adversaries but the possibility of freedom for his people. His initial conquest of the Torna Fort at the mere age of 16 is a testament to his early recognition of this call to greatness. This act was not just about capturing a fort but symbolizing the potential for change and the beginning of a new era of Maratha power.",
      Image: require("./shivaji2.jpg"),
    },
    {
      ID: "2",
      Name: "His Childhood: Foundations of a Leader",
      Info: " Shivaji's respect for all religions and his policies towards the non-Hindu subjects were rooted in the inclusive values taught by his mother, Jijabai, and his mentor, Dadaji Konddeo. This foundational belief in religious tolerance and justice was seen when he restored the mosques damaged during his campaigns and assured freedom of religion in his kingdom. His upbringing instilled in him a vision of leadership that was inclusive and just.",
      Image: require("./shivaji3.jpg"),
      Website: "https://en.wikipedia.org/wiki/Early_life_of_Shivaji"
    },
    {
      ID: "3",
      Name: "His Struggles: The Crucible of Leadership",
      Info: "  The siege of Purandar Fort in 1665 against the Mughals, where Shivaji faced the formidable forces of Mirza Raja Jai Singh I, was a significant struggle. Despite the daunting odds, Shivaji negotiated the Treaty of Purandar, which, while ceding some forts, allowed him to retain control over others. This strategic compromise showcased his ability to navigate through seemingly insurmountable challenges by finding innovative solutions, teaching us the value of strategic negotiation and the importance of choosing battles wisely.",
      Image: require("./shivaji4.jpg"),
      Website: ""
    },
    {
      ID: "4",
      Name: "His Achievements: Vision Turned Reality",
      Info: "  Shivaji's establishment of a proficient naval force was revolutionary at the time. Recognizing the strategic importance of the coastline for trade and defense against foreign invaders, he built a strong navy. This forward-thinking move not only protected the Konkan coast but also boosted trade and commerce, showing us the importance of foresight and innovation in achieving visionary goals.",
      Image: require("./shivaji5.jpg"),
      Website: "https://ebooks.inflibnet.ac.in/icp01/chapter/maratha-kingdom-shivaji-achievements/"
    },
    {
      ID: "5",
      Name: "His Comebacks: Resilience Personified",
      Info: "   After a humiliating capture and escape from Agra in 1666, Shivaji did not let this setback dampen his spirits. Instead, he used it as a catalyst for a series of military campaigns that significantly expanded his territory. His comeback was marked by the capture of significant forts and the establishment of Maratha dominance. This episode of his life exemplifies resilience, teaching us that even the most bitter experiences can be transformed into opportunities for growth and triumph.",
      Image: require("./shivaji6.jpg"),
    },
    {
      ID: "6",
      Name: "His Quotes: Eternal Wisdom",
      Info: "'Never bend your head. Always hold it high. Look the world straight in the eye.'' This quote encapsulates Shivaji's approach to life and leadership. An example of this can be seen in how he treated his prisoners of war with respect and honor, a rare practice in that era. This not only earned him the respect of his enemies but also the allegiance of many. His actions reflected his belief in dignity, courage, and integrity, inspiring us to lead with honor and valor in our lives.",
      Image: require("./shivaji7.jpg"),
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handlePress = (item) => {
    setSelectedPerson(item);
    setModalVisible(true);
  };

  const handleWebsite = (url) => {
    Linking.openURL(url);
  };

  const handlePressed = () => {
    console.log("Jai Bhavani Pressed");
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
      ],{
      backgroundColor: 'orange',
    color: 'orange'},
      { cancelable: true, style: "horizontal" }
    );
  };

  return (
    <ImageBackground
      source={require("./ShivajiBG1.jpg")}
      style={styles.backgroundImage}
    >
  <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 250, paddingLeft:5, paddingRight:5, backgroundColor:'rgba(0, 0, 0, .2)',textShadowColor: 'rgba(255, 255, 0, 2)', shadowColor: '#FF7911'  }}>
  <Text style={{ fontSize: 44, fontWeight: 'bold', textShadowColor: '#FF7911', textShadowOffset: { width: 0, height: 0, }, textShadowRadius: 13, color: 'white' }}>Happy Shivaji Jayanti</Text>
</View>


      <View style={styles.container}>
        <View style={{ paddingTop: 50 }}>
          {/* <Text style={{ color: "black", fontWeight: "bold", backgroundColor: "white", padding:1, alignItems: "center", justifyContent: "center", width: "100%"}}>Touch Below</Text> */}
          <View style={{ height: "200"}}></View>
          <View style={{ width: 150, height: 50, borderColor: '#FF7911',borderRadius:2, borderWidth:10 }}>
          <Button
            title="Jai Bhavani"
            color="orange"
            onPress={handlePressed}
            titleStyle={{ fontSize: 28, fontWeight: "bold", color: "black" }}
            style={{ width: 200, height: 220 }}
    
          />
          </View>
        </View>
        <View
          style={{
            height: 20,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "white",
            borderColor: "black",
            borderWidth: 2,
            borderRadius: 30,
            width: 300,
            height: 28,
            textAlign: "center"
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "black",
              backfaceVisibility: "visible",
              fontWeight: "bold",
              textAlign: "center",
              alignContent: "center",
            }}
          >
            Below is a short decree of his life
          </Text>
        </View>

        {/* Wrap the FlatList with ScrollView */}
        <ScrollView horizontal>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.card}
                onPress={() => handlePress(item)}
              ><ImageBackground
              source={item.Image}
              style={styles.backgroundImage}
              imageStyle={{ borderRadius: 30 }} // Apply borderRadius to the image
            >
                <Text style={styles.cardText}>{item.Name}</Text>
                </ImageBackground>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.ID}
            showsVerticalScrollIndicator={false}
            style={styles.flatList}
          />
        </ScrollView>
        <Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => {
    setModalVisible(false);
  }}
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Image
        source={selectedPerson?.Image} // Use the image path from the selected item
        style={styles.modalImage}
      />
      <Text style={styles.modalText}>{selectedPerson?.Name}</Text>
      <Text style={styles.modalText}>{selectedPerson?.Info}</Text>
      <Button
        title="Visit Website"
        onPress={() => handleWebsite(selectedPerson?.Website)}
      />
      <View style={{ height: 10 }}/> 
      <Button title="Close" onPress={() => setModalVisible(false)} />
    </View>
  </View>
</Modal>
</View>
</ImageBackground>
);
}




const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the container transparent so that the background image is visible
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: "stretch", // or "stretch"
    justifyContent: "center",

  },
  flatList: {
    paddingTop: 50,
    marginBottom: 0,
  },
  card: {
    borderBlockColor: "black",
    backgroundColor: "white",
    borderRadius: 20, // Adjust the border radius to your preference
    borderWidth: 4, // Add border width
    borderColor:"black",
    backgroundColor: '#FFD9A6',
    borderRadius: 40,
    padding: 10,
    margin: 10,
    elevation: 50,
    height: 350,
    width: 390,
    minWidth: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor:'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    height: 790,
    width: 350,
    borderRadius: 20,
    elevation: 100,
    alignItems: "center",
  },
  modalText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: 'Roboto',
    textAlign: "center",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height:80,
    width:300,
    marginTop: 200, // Adjust marginTop as needed
  },
  titleText: {
    fontFamily: 'Roboto',
    fontSize: 48,
    marginTop: 150,
    fontWeight: "bold",
    color: "black",
  },
  modalImage: {
    width: 350,
    height: 350,
    marginBottom: 10,
  },
});
