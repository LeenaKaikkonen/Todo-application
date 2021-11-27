import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { auth } from "../firebase";
import Todo from "../components/Todo";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [taskName, setTaskName] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTodoItem = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, taskName]);
    setTaskName(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignOut} style={styles.signoutButton}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      <ScrollView
        style={styles.todoContainer}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index}>
                <Todo text={item} index={index} completeTask={completeTask} />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      <Text style={styles.title}>Todo List</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTodo}
      >
        <TextInput
          style={styles.input}
          placeholder={"Add task here"}
          value={taskName}
          onChangeText={(text) => setTaskName(text)}
        />
        <TouchableOpacity onPress={() => handleAddTodoItem()}>
          <View style={styles.addButton}>
            <Text style={styles.addText}>Add</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffefd5",
    justifyContent: "center",
    alignItems: "center",
  },
  todoContainer: {
    marginTop: 180,
    paddingHorizontal: 20,
  },

  title: {
    position: "absolute",
    top: 60,
    fontSize: 24,
    paddingHorizontal: 20,
  },

  items: {
    marginTop: 10,
  },

  writeTodo: {
    position: "absolute",
    top: 100,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    width: 270,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  addButton: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: "#23b7e5",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  addText: {},

  signoutButton: {
    position: "absolute",
    top: 30,
    backgroundColor: "#23b7e5",
    width: "100%",
    padding: 6,
    borderRadius: 1,
    alignItems: "center",
    marginTop: 0,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 12,
  },
});
