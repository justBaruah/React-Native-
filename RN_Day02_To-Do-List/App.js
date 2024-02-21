import React, { useState } from "react";
 
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from "react-native";
 
import Task from "./components/task";
 
export default function App() {
  const [task, setTask] = useState(""); //Keyboard Input
  const [taskItems, setTaskItems] = useState([]); // Display Task Infos
 
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask("");
  };
 
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
 
  return (
    <View style={styles.container}>
      <View style={styles.taskswrapper}>
        <Text style={styles.sectiontitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {taskItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={item} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
 
       <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "height" : "padding"}
        style={styles.writerTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
 
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.keyboardenterbutton}>
            <Text style={styles.addText}>🙄</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskswrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectiontitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30
  },
  writerTaskWrapper: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    paddingVertical: 15,
    maxWidth: 250,
    paddingHorizontal: 75,
    backgroundColor: "white",
    borderRadius: 30,
    borderColor: "black",
    borderWidth: 1.5,
    width: 300,
    height: 60,
    marginBottom: 20,
    shadowColor: "yellow", // Shadow color
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 1, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 10,
    marginLeft: 20,
    fontSize: 17,
  },
  writerkeyboard: {},
  keyboardenterbutton: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 60,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    marginBottom: 20,
    shadowColor: "yellow", // Shadow color
    shadowOffset: { width: 2, height: 2 }, // Shadow offset
    shadowOpacity: 0.75, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 10,
  },
  addText: {
    fontSize: 30,
  },
});