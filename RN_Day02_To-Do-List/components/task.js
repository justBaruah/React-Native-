import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
 
const Task = (props) => {
  return (
    <View style={styles.taskbox}>
      <View style={styles.itemleft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.texter}>{props.text}</Text>
      </View>
      <View><TouchableOpacity style={styles.circular}>
      {/* <View style={styles.circular}></View> */}
      </TouchableOpacity>
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  taskbox: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    flexDirection: 'row',
    padding:18,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    shadowColor: 'orange', // Shadow color
    shadowOffset: { width: 2, height: 2 }, // Shadow offset
    shadowOpacity: 0.75, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 10
  },
  itemleft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexwrap: 'wrap' },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "orange",
    opacity: 0.5,
    borderRadius: 2,
    marginRight: 15
  },
  texter: {
    fontWeight: "bold",
    fontSize: 15,
    maxWidth: '80%',
  },
  circular: {
    borderColor: "black",
    height: 18,
    width: 18,
    borderWidth: 2,
    borderRadius: 20
  },
});
 
export default Task;
 