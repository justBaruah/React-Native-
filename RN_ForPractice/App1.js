// Import necessary components and styles from the React Native library

import {
  StyleSheet, // Import StyleSheet for styling components
  Text, // Import Text component for displaying text
  View,
  Button,
  // Import View component for layout
  Alert,
  Linking,
  ActivityIndicator,
  // Import TouchableOpacity component for creating touchable elements
} from "react-native";

// Define a reusable Name component that takes a 'name' prop
// const Name = (props) => {
//   return (
//     <View>                          {/* Render a View component */}
//       <Text style={{ fontSize: 30, color: "blue" }}>{props.name}</Text>  {/* Render a Text component with specified style and display 'name' prop */}
//     </View>
//   );
// };
// const MyName = (props) => {
//   return (
//     <View>
//       <Text style= {styles.title1}>{props.name}</Text>
//     </View>
//   );
// };

// Define a reusable Button component that takes 'text' and 'onPress' props

// Define the main App component using a functional component

// export default function App() {
//   return (
//     <View styles={{backgroundColor: 'green', paddingTop:800}}>
//       {/* Render a View component */}
//       {/* //   <Name name ="Hi Ky" />            {/* Render the Name component with 'name' prop set to "Hi Ky" */}
//       {/* //   <Name name ="Hi Py" />            {/* Render the Name component with 'name' prop set to "Hi Py" */}
//       {/* //   <Name name ="Hi Cutie" />         Render the Name component with 'name' prop set to "Hi Cutie" */}
//       {/* <Text
//         style={{ fontSize: 20 }}
//         numberOfLines={10}
//         onPress={() => {
//           console.log("text clicked");
//         }}
//         selectable
//       >
//         Shivaji I Chhatrapati Shivaji Shahaji Bhonsale was an Indian ruler and a
//         member of the Bhonsle Maratha clan. Shivaji carved out his own
//         independent kingdom from the declining Adilshahi Sultanate of Bijapur
//         that formed the genesis of the Maratha Empire. In 1674, he was formally
//         crowned the Chhatrapati of his realm at Raigad Fort. Over the course of
//         his life, Shivaji engaged in both alliances and hostilities with the
//         Mughal Empire, the Sultanate of Golkonda, the Sultanate of Bijapur and
//         the European colonial powers. Shivaji's military forces expanded the
//         Maratha sphere of influence, capturing and building forts, and forming a
//         Maratha navy.
//       </Text> */}
//       <Text style={[styles.title, styles.bgtitle]}>
//         <Text style={{ color: "orange" }}>Chhatrapati </Text>
//         <Text>Shivaji</Text>
//         <Text style={{ color: "orange" }}> Maharaj </Text>
//       </Text>
//     </View>
//   );
// }

export default function App() {

  const DATA = [
    { ID: '1', Name: 'Shivaji Maharaj' },
    { ID: '2', Name: 'Baji Rao I' },
    { ID: '3', Name: 'Balaji Vishwanath' },
    { ID: '4', Name: 'Peshwa Madhavrao I' },
    { ID: '5', Name: 'Peshwa Nanasaheb' },
    { ID: '6', Name: 'Mahadji Shinde' },
    { ID: '7', Name: 'Raghunath Rao' },
    { ID: '8', Name: 'Peshwa Bajirao II' },
    { ID: '9', Name: 'Malhar Rao Holkar' },
    { ID: '10', Name: 'Ahilyabai Holkar' },
    { ID: '11', Name: 'Ranoji Shinde' },
    { ID: '12', Name: 'Govind Rao Ghatge' },
    { ID: '13', Name: 'Pilaji Jadhav' },
    { ID: '14', Name: 'Dhanaji Jadhav' },
    { ID: '15', Name: 'Sambhaji' },
    { ID: '16', Name: 'Prataprao Gujar' },
    { ID: '17', Name: 'Tukoji Rao Holkar' },
    { ID: '18', Name: 'Santaji Ghorpade' },
    { ID: '19', Name: 'Daulat Rao Sindhia' }
  ];
  




  const handlPress = () => {
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

  return (
    <View style={[styles.container]}>
      {/* <Text style={{ color: "orange" }}>Touch Below</Text>
      <Button
        titleStyle={{ color: "black", fontWeight: "bold" }}
        title="Jai Bhavani"
        color="orange"
        /*disabled onPress={handlPress} /*console.log("Button Clicked")} Alert.alert(This is an alert message)*/}
      {/* /> */}
      <ActivityIndicator size="large" color="orange" /> */
      {/*       
      <ActivityIndicator size="small" color="blue" />
      
      <ActivityIndicator size="large" color="green" /> */}
    </View>
  );


// Define styles using StyleSheet

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink", // Set background color to pink
    color: "pinion-light", // Set text color to pinion-light (a typo here, should be 'pale' not 'pinion')
    flex: 1, // Set flex to 1 to take up available space
    backgroundColor: "#fff", // Background color commented out
    alignItems: "center", // Center items horizontally
    justifyContent: "center", // Center items vertically
  },
  title: { fontSize: 28, fontWeight: "bold", paddingTop: 400, paddingLeft: 60 },
  title1: { fontSize: 28, fontWeight: "bold", color: "green" },
  bgtitle: { backgroundColor: "yellow" },
  // buttonsContainer: {
  //   flexDirection: 'row', // arrange buttons horizontally
  //   justifyContent: 'space-around', // space buttons evenly
  //   backgroundColor: 'white',
  //   padding: 20,
  //   borderRadius: 10,
  // }
})};
