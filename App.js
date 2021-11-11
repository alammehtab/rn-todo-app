import React, { useState } from "react";
import { View, StyleSheet, Alert, FlatList } from "react-native";
import Constants from "expo-constants";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (goal) => {
    if (!goal) {
      Alert.alert("Warning", "a goal can not be empty!");
    } else {
      setGoals((currentGoals) => [
        ...currentGoals,
        { id: Math.random().toString(), value: goal },
      ]);
    }
  };

  const clearGoalsHandler = () => {
    setGoals([]);
  };

  const deleteGoalHandler = (goalId) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} onClearGoals={clearGoalsHandler} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={deleteGoalHandler}
          />
        )}
        style={styles.goalsContainer}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  goalsContainer: {
    width: "90%",
    padding: 5,
    marginVertical: 5,
  },
});
