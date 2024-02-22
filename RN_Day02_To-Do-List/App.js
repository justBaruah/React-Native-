import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Task from "./components/task";
const App = () => {
  const [task, setTask] = useState(""); // Keyboard Input
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss(); // to add task
    setTaskItems([...taskItems, task]);
    setTask("");
  };
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    // to delete task by clicking on it
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskwrapper}>
        <Text style={styles.sectiontitle}>Today's Task</Text>
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
          placeholder={"Write your Task"}
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskwrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectiontitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: { marginTop: 20 },
  writerTaskWrapper: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    paddingVertical: 10,
    maxWidth: 250,
    paddingHorizontal: 60,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1.5,
    width: 300,
    height: 60,
    borderRadius: 30,
    marginBottom: 20,
    shadowColor: "black",
    shadowOffset: { height: -2, width: -2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 10,
    marginLeft: 20,
    fontSize: 17,
  },
  keyboardenterbutton: {
    width: 60,
    height: 60,
    borderRadius: 60,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    marginBottom: 20,
    shadowOffset: { height: -2, width: -2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 10,
    marginRight: 20,
    backgroundColor: "white",
  },
  addText: { fontSize: 30 },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default App;
