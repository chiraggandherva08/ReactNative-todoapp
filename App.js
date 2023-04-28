import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [Tasks, setTasks] = useState([]);
  const [currentInputTask, setCurrentInputTask] = useState("");

  const RemoveTodo = (index) => {
    const todos = [...Tasks];
    todos.splice(index, 1);
    setTasks(todos);
  };

  const AddTodo = () => {
    if (currentInputTask === null) return;
    if (
      currentInputTask.trim() === "" ||
      Tasks.includes(currentInputTask.trim())
    ) {
      return;
    }
    setTasks([...Tasks, currentInputTask]);
  };

  return (
    <ScrollView style={{ backgroundColor: "rgb(230, 230, 230)" }}>
      <Text style={styles.title}>Welcome to ToDoApp</Text>
      <View
        style={{
          width: "100%",
          height: 70,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          borderColor: "gray",
          borderBottomWidth: 0.2,
        }}
      >
        <TextInput
          id="new-todo"
          placeholder="Enter todos?"
          style={styles.inputStyle}
          onChangeText={(val) => setCurrentInputTask(val)}
        ></TextInput>

        <Pressable
          style={styles.button}
          onTouchEnd={() => {
            AddTodo();
          }}
        >
          <Text style={{ color: "white", fontSize: 30 }}> + </Text>
        </Pressable>
      </View>

      <View
        style={{
          display: "flex",
          backgroundColor: "rgb(230, 230, 230)",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          marginTop: 20,
          paddingBottom: 20,
        }}
      >
        {Tasks.map((task, index) => {
          return (
            <View key={index} style={styles.todoStyle}>
              <TouchableOpacity
                onPress={() => {
                  RemoveTodo(index);
                }}
              >
                <Image source={require("./assets/trash.png")}></Image>
              </TouchableOpacity>

              <Text style={{ width: "80%" }}>{task}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bodyStyle: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(230, 230, 230)",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    width: "100%",
    color: "rgb(69, 200, 208)",
    backgroundColor: "rgb(230, 230, 230)",
    paddingHorizontal: 30,
    paddingTop: 60,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: "rgb(69, 200, 208)",
  },

  inputStyle: {
    width: 250,
    height: 40,
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    backgroundColor: "rgb(240, 240, 240)",
    color: "rgb(69, 200, 208)",
    fontSize: 16,
    elevation: 3,
  },

  todoStyle: {
    width: "90%",
    maxWidth: 700,
    borderRadius: 10,
    borderColor: "rgb(220, 220, 220)",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "rgb(250, 250, 250)",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
  },
});
