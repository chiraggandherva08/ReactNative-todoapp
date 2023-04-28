import { ScrollView, StyleSheet, Text, View, FlatList, TextInput, Pressable } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [Tasks, setTasks] = useState([]);
  const [currentInputTask, setCurrentInputTask] = useState('');

  const AddTodo = () => {
    if (currentInputTask.trim() === "" || Tasks.includes(currentInputTask.trim())) {
      return;
    }
    const allTasksNew = [...Tasks, currentInputTask];
    setTasks(allTasksNew);
  };

  return (
    <ScrollView style={ {backgroundColor: 'rgb(230, 230, 230)'} }>
      <Text style={styles.title}>Welcome to ToDoApp</Text>

      <View style={ {width: "100%", height: 70, display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", borderColor: "gray", borderBottomWidth: 0.2} } >
        
        <TextInput id="new-todo" placeholder="Enter todos?" style={styles.inputStyle} onChangeText={val => setCurrentInputTask(val)}></TextInput>

        <Pressable style={styles.button} onTouchEnd={() => { AddTodo() }} >
          <Text style={{ color: "white" }}>Add</Text>
        </Pressable>

      </View>

      <View style={ {display: 'flex', backgroundColor: 'rgb(230, 230, 230)', flexDirection: 'column', alignItems: 'center', gap: 20, marginTop: 20} }> 
      {
        Tasks.map((task, index) => {
          return (
          <View key={index} style={ styles.todoStyle}>
            <Text>{task}</Text>
          </View>
          )})
      }</View>

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
    color: "black",
    backgroundColor: "rgb(230, 230, 230)",
    paddingHorizontal: 30,
    paddingTop: 60,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "black",
  },

  inputStyle: {
    width: 250,
    height: 40,
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    backgroundColor: "rgb(240, 240, 240)",
    fontSize: 16,
  },

  todoStyle: {
    width: '90%',
    maxWidth: 700,
    height: 50,
    borderRadius: 10,
    borderColor: 'rgb(220, 220, 220)',
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'rgb(250, 250, 250)',
    justifyContent: 'center'
  }
});