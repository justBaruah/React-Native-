// import React, { useEffect, useRef, useState } from 'react';
// import { Animated, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

// const { width, height } = Dimensions.get('window');
// const cardSize = 300; // Adjust the size as needed
// const padding = (height - cardSize) / 2;
// const offset = cardSize;

// const data = ['violet', 'indigo', 'blue', 'orange'];

// export default function Swiper5() {
//     const [activeIndex, setActiveIndex] = useState({ current: 0, previous: null });
//     const scale = useRef(new Animated.Value(0)).current;
//     const scrollY = useRef(new Animated.Value(0)).current;

//     useEffect(() => {
//         animate();
//     }, [activeIndex]);

//     const animate = () => {
//         scale.setValue(0);
//         Animated.spring(scale, { toValue: 1, useNativeDriver: true, speed: 2, bounciness: 1000 }).start();
//     };

//     const onScroll = (e) => {
//         const y = e.nativeEvent.contentOffset.y;
//         let newIndex = Math.floor((y / offset) + 0.5);
//         if (activeIndex.current !== newIndex) {
//             setActiveIndex({ current: newIndex, previous: activeIndex.current });
//         }
//     };

//     return (
        
//         <View style={styles.container}>
//             <View style={styles.contentContainer}>
//                 {data.map((x, i) => (
//                     <Animated.View key={x} style={[styles.bgColor, {
//                         zIndex: i === activeIndex.current ? 0 : (i === activeIndex.previous ? -1 : -2),
//                         backgroundColor: x,
//                         transform: [{ scale: i === activeIndex.current ? scale : 1 }],
//                         marginVertical: 10, // Add margin between cards
//                     }]}/>
//                 ))}
//             </View>
//             <ScrollView
//                 vertical
//                 pagingEnabled
//                 decelerationRate="fast"
//                 style={styles.scrollView}
//                 contentContainerStyle={styles.scrollViewContent}
//                 showsVerticalScrollIndicator={false}
//                 snapToInterval={offset}
//                 onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
//                     useNativeDriver: false,
//                     listener: onScroll
//                 })}>
//                 {data.map((x, i) => (
//                     <Item key={x} data={x} i={i} scrollY={scrollY} />
//                 ))}
//             </ScrollView>
//             <View style={styles.indicatorContainer}>
//                 {data.map((x, i) => (
//                     <View key={x} style={[styles.indicator, i === activeIndex.current && { backgroundColor: '#fff' }]} />
//                 ))}
//             </View>
//         </View>
//     );
// }

// function Item({ i, data, scrollY }) {
//     const scale = scrollY.interpolate({
//         inputRange: [-offset + i * offset, i * offset, offset + i * offset],
//         outputRange: [0.9, 1, 0.9],
//     });
//     return <Animated.View style={[styles.item, { transform: [{ scale }] }]}>
//         <Text>{data}</Text>
//     </Animated.View>;
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     contentContainer: {
//         flex: 1,
//         justifyContent: 'flex-end', // Align content to bottom
//     },
//     scrollView: {
//         position: 'absolute',
//         bottom: 0, // Position ScrollView at the bottom
//         width: '100%', // Take full width
//         height: height - padding, // Adjust height
//         zIndex: 1
//     },
//     scrollViewContent: {
//         paddingTop: padding, // Add padding to top
//         alignItems: 'center',
//     },
//     item: {
//         height: cardSize,
//         width: cardSize,
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: 10,
//         backgroundColor: '#fff',
//         elevation: 5,
//     },
//     bgColor: {
//         position: 'absolute',
//         height: height * 3 / 2,
//         width: height * 3 / 2,
//         borderRadius: height,
//     },
//     indicatorContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     indicator: {
//         height: 0,
//         width: 10,
//         borderRadius: 5,
//         marginHorizontal: 3,
//         backgroundColor: '#444'
//     }
// });


// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   Alert,
//   Linking,
//   ActivityIndicator,
//   ScrollView,
//   FlatList,
// } from "react-native";

// export default function App() {
//   const DATA = [
//     { ID: "1", Name: "Shivaji Maharaj" },
//     { ID: "2", Name: "Baji Rao I" },
//     { ID: "3", Name: "Balaji Vishwanath" },
//     { ID: "4", Name: "Peshwa Madhavrao I" },
//     { ID: "5", Name: "Peshwa Nanasaheb" },
//     { ID: "6", Name: "Mahadji Shinde" },
//     { ID: "7", Name: "Raghunath Rao" },
//     { ID: "8", Name: "Peshwa Bajirao II" },
//     { ID: "9", Name: "Malhar Rao Holkar" },
//     { ID: "10", Name: "Ahilyabai Holkar" },
//     { ID: "11", Name: "Ranoji Shinde" },
//     { ID: "12", Name: "Govind Rao Ghatge" },
//     { ID: "13", Name: "Pilaji Jadhav" },
//     { ID: "14", Name: "Dhanaji Jadhav" },
//     { ID: "15", Name: "Sambhaji" },
//     { ID: "16", Name: "Prataprao Gujar" },
//     { ID: "17", Name: "Tukoji Rao Holkar" },
//     { ID: "18", Name: "Santaji Ghorpade" },
//     { ID: "19", Name: "Daulat Rao Sindhia" },
//   ];

//   const handlePress = () => {
//     console.log("Button Clicked");
//     Alert.alert(
//       "Jai Shivaji",
//       "A humble tribute to Chatrapati Shivaji",
//       [
//         {
//           text: "Know More about the great leader",
//           onPress: () => {
//             console.log("Hi");
//             Linking.openURL("https://en.wikipedia.org/wiki/Shivaji");
//           },
//         },
//         {
//           text: "Know More Maratha Wars",
//           onPress: () => {
//             Linking.openURL("https://www.britannica.com/event/Maratha-Wars");
//           },
//         },
//       ],
//       { cancelable: true, style: "horizontal" }
//     );
//     // Add more functions here if needed
//   };
//   const renderItem = ({ item }) => (console.log(item));
//   );
//   return (
//     <View style={styles.container}>
//       <View style={{ paddingTop: 250 }}>
//         <Text style={{ color: "orange" }}>Touch Below</Text>
//         <Button
//           title="Jai Bhavani"
//           color="orange"
//           onPress={handlePress}
//           titleStyle={{ color: "black", fontSize: 28, fontWeight: "bold" }}
//         />
//       </View>
//       <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
//         Here are some list of Maratha warriors
//       </Text>
//     </View>
//   );
// }




// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "pink",
//     color: "pale", // Corrected typo here
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: { fontSize: 28, fontWeight: "bold", paddingTop: 400, paddingLeft: 60 },
//   title1: { fontSize: 28, fontWeight: "bold", color: "green" },
//   bgtitle: { backgroundColor: "yellow" },
// });



// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   Alert,
//   Linking,
//   ActivityIndicator,
//   ScrollView,
//   FlatList,
// } from "react-native";

// export default function App() {
//   const DATA = [
//     { ID: "1", Name: "Shivaji Maharaj" },
//     { ID: "2", Name: "Baji Rao I" },
//     { ID: "3", Name: "Balaji Vishwanath" },
//     { ID: "4", Name: "Peshwa Madhavrao I" },
//      { ID: "5", Name: "Peshwa Nanasaheb" },
//      { ID: "6", Name: "Mahadji Shinde" },
//      { ID: "7", Name: "Raghunath Rao" },
//      { ID: "8", Name: "Peshwa Bajirao II" }
//     // Add more data as needed
//   ];

//   const handlePress = () => {
//     console.log("Button Clicked");
//     Alert.alert(
//       "Jai Shivaji",
//       "A humble tribute to Chatrapati Shivaji",
//       [
//         {
//           text: "Know More about the great leader",
//           onPress: () => {
//             console.log("Hi");
//             Linking.openURL("https://en.wikipedia.org/wiki/Shivaji");
//           },
//         },
//         {
//           text: "Know More Maratha Wars",
//           onPress: () => {
//             Linking.openURL("https://www.britannica.com/event/Maratha-Wars");
//           },
//         },
//       ],
//       { cancelable: true, style: "horizontal" }
//     );
//     // Add more functions here if needed
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.card}>
//       <Text style={styles.cardText}>{item.Name}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={{ paddingTop: 250 }}>
//         <Text style={{ color: "orange" }}>Touch Below</Text>
//         <Button
//           title="Jai Bhavani"
//           color="orange"
//           onPress={handlePress}
//           titleStyle={{ color: "black", fontSize: 28, fontWeight: "bold" }}
//         />
//       </View>
//       <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
//         Here are some list of Maratha warriors
//       </Text>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         vertical
//         showsHorizontalScrollIndicator={false}
//         showsVerticalScrollIndicator={false}
//         keyExtractor={(item) => item.ID}
//         contentContainerStyle={styles.flatListContainer}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "pink",
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   cardText: {
//     fontSize: 30,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   flatListContainer: {
//     alignItems: "center",
//   },
// });

// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   TouchableOpacity,
//   Modal,
//   FlatList,
// } from "react-native";

// export default function App() {
//   const DATA = [
//     { ID: "1", Name: "Shivaji Maharaj", Info: "Info about Shivaji Maharaj" },
//     { ID: "2", Name: "Baji Rao I", Info: "Info about Baji Rao I" },
//     { ID: "3", Name: "Balaji Vishwanath", Info: "Info about Balaji Vishwanath" },
//     // Add more data as needed
//   ];
//   const ANOTHER_DATA = [
//     { ID: "21", Name: "Some Name", Info: "Info about Some Name" },
//     { ID: "22", Name: "Another Name", Info: "Info about Another Name" },
//     // Add more data as needed
//   ];

//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedPerson, setSelectedPerson] = useState(null);

//   const handlePress = (item) => {
//     setSelectedPerson(item);
//     setModalVisible(true);
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.card}
//       onPress={() => handlePress(item)}
//     >
//       <Text style={styles.cardText}>{item.Name}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={{ paddingTop: 250 }}>
//         <Text style={{ color: "orange" }}>Touch Below</Text>
//         <Button
//           title="Jai Bhavani"
//           color="orange"
//           onPress={() => console.log("Jai Bhavani Pressed")}
//           titleStyle={{ color: "black", fontSize: 28, fontWeight: "bold" }}
//         />
//       </View>
//       <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
//         Here are some list of Maratha warriors
//       </Text>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.ID}
//         showsVerticalScrollIndicator={false}
//         vertical
//         style={styles.flatList}
//       />
     
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(false);
//         }}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalText}>{selectedPerson?.Name}</Text>
//             <Text style={styles.modalText}>{selectedPerson?.Info}</Text>
//             <Button
//               title="Close"
//               onPress={() => {
//                 setModalVisible(false);
//               }}
//             />
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   flatList: {
//     marginBottom: 20,
//   },
//   card: {
//     backgroundColor: "white",
//     borderRadius: 10,
//     padding: 20,
//     margin: 10,
//     elevation: 5,
//     height: 350,
//     width: 300,
//     minWidth: 150,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   cardText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   modalContent: {
//     backgroundColor: "white",
//     padding: 20,
//     borderRadius: 10,
//     elevation: 5,
//     alignItems: "center",
//   },
//   modalText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
// });


import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Modal,
  FlatList,
  Image,
  Linking,
} from "react-native";

export default function App() {
  const DATA = [
    { ID: "1", Name: "His Childhood: Pre-Maratha Era: A Call to Greatness", Info: " The formidable might of the Mughal and Deccan Sultanates could have deterred any resistance. Yet, Shivaji saw not the strength of his adversaries but the possibility of freedom for his people. His initial conquest of the Torna Fort at the mere age of 16 is a testament to his early recognition of this call to greatness. This act was not just about capturing a fort but symbolizing the potential for change and the beginning of a new era of Maratha power.", Image: require('./shivaji.jpg') ,
      ID: "2", Name: "His Childhood: Pre-Maratha Era: A Call to Greatness", Info: " The formidable might of the Mughal and Deccan Sultanates could have deterred any resistance. Yet, Shivaji saw not the strength of his adversaries but the possibility of freedom for his people. His initial conquest of the Torna Fort at the mere age of 16 is a testament to his early recognition of this call to greatness. This act was not just about capturing a fort but symbolizing the potential for change and the beginning of a new era of Maratha power.", Image: require('./shivaji.jpg')}
    // Add more data as needed
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handlePress = (item) => {
    setSelectedPerson(item);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handlePress(item)}
    >
      <Text style={styles.cardText}>{item.Name}</Text>
    </TouchableOpacity>
  );

  const handleWebsite = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 250 }}>
        <Text style={{ color: "orange" }}>Touch Below</Text>
        <Button
          title="Jai Bhavani"
          color="orange"
          onPress={() => console.log("Jai Bhavani Pressed")}
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
        horizontal
        style={styles.flatList}
      />
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
            <Image source={selectedPerson?.Image} style={styles.modalImage} />
            <Text style={styles.modalText}>{selectedPerson?.Name}</Text>
            <Text style={styles.modalText}>{selectedPerson?.Info}</Text>
            <Button
              title="Visit Website"
              onPress={() => handleWebsite('https://en.wikipedia.org/wiki/Shivaji')}
            />
            <Button
              title="Close"
              onPress={() => {
                setModalVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  flatList: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    margin: 10,
    elevation: 5,
    height: 350,
    width: 300,
    minWidth: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
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
    height: 700,
    width: 350,
    borderRadius: 20,
    elevation: 5,
    alignItems: "center",
  },
  modalText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});
