
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.taskbox}>
      <View style={styles.itemleft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.tasktext}>{props.text}</Text>
      </View>
      
        <View style={styles.circular}>
          {
            //Codes
          }
        </View>
      </View>
   
  );
};

const styles = StyleSheet.create({
  taskbox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    shadowColor: "tomato",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.75,
    shadowRadius: 4,
    elevation: 10,
  },
  itemleft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "orange",
    opacity: 0.5,
    borderRadius: 5,
    marginRight: 15,
  },
  tasktext: {
    fontWeight: "bold",
    fontSize: 15,
    maxWidth: "100%",
  },

  circular: {
    borderColor: "black",
    borderRadius: 20,
    height: 18,
    width: 18,
    borderWidth: 2,
  },
});

export default Task;
