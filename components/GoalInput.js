import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

export default function GoalInput({ onAddGoal, onClearGoals }) {
  const [goal, setGoal] = useState("");

  const addGoalHandler = () => {
    onAddGoal(goal);
    setGoal("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="your goal"
        defaultValue={goal}
        onChangeText={(goal) => setGoal(goal)}
      />
      <Button title="add" onPress={addGoalHandler} />
      <Button title="clear" onPress={onClearGoals} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "65%",
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 6,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    padding: 5,
  },
});
