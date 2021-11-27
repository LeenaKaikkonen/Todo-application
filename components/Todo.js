import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Todo = (props) => {
  const [done, setDone] = useState();

  const changeColor = () => {
    if (done) {
      setDone(false);
    } else {
      setDone(true);
    }
  };

  return (
    <View style={styles.item}>
      <View style={styles.itemsLeft}>
        <TouchableOpacity
          onPress={() => props.completeTask(props.index)}
          style={styles.closeButton}
        >
          <Text>X</Text>
        </TouchableOpacity>
        <Text
          style={done ? styles.itemTextDone : styles.itemText}
          onPress={changeColor}
        >
          {props.text}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemsLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  closeButton: {
    width: 24,
    height: 24,
    backgroundColor: "#ffefd5",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#cccccc",
    borderWidth: 1,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemTextDone: {
    maxWidth: "90%",
    color: "#cccccc",
    textDecorationLine: "line-through",
  },
  itemText: {
    maxWidth: "90%",
    color: "#000000",
    textDecorationStyle: "solid",
  },
});

export default Todo;
