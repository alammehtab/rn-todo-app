import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

export default function GoalItem({ onDelete, title, id }) {
  return (
    <TouchableOpacity onPress={() => onDelete(id)}>
      <View style={styles.goalContainer}>
        <Text style={styles.goalStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    backgroundColor: "#d9c798",
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 5,
    borderRadius: 5,
  },
  goalStyle: { fontSize: 15 },
});
