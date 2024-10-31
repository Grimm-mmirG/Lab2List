import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ToDoList = ({ tasks, toggleCompletion, deleteTask }) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {tasks.map((task) => (
        <View key={task.id} style={[styles.task, task.completed && styles.completed]}>
          <TouchableOpacity onPress={() => toggleCompletion(task.id)} style={styles.checkbox}>
            {task.completed ? <Text style={styles.checked}>✓</Text> : <Text style={styles.unchecked}>⬜</Text>}
          </TouchableOpacity>
          <Text style={[styles.taskText, task.completed && styles.completedText]}>{task.text}</Text>
          <TouchableOpacity onPress={() => deleteTask(task.id)} style={styles.deleteButton}>
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#3E3E3E', 
    padding: 10, // Increased padding for a better touch target
    borderColor: '#5C5E67', // Updated border color for consistency
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  completed: {
    backgroundColor: '#555', 
  },
  taskText: {
    fontSize: 18, // Slightly larger font size for better readability
    flex: 1,
    marginLeft: 10,
    color: '#FFFFFF', 
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#4AB596', 
  },
  checkbox: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#5C5E67', // Updated border color for consistency
    borderWidth: 2,
    borderRadius: 5,
    marginRight: 15,
  },
  checked: {
    color: '#4AB596', 
    fontSize: 20,
  },
  unchecked: {
    color: '#B0B0B0', 
    fontSize: 20,
  },
  deleteButton: {
    marginLeft: 10,
    padding: 5,
    borderRadius: 5, // Added border radius for better appearance
    backgroundColor: '#3E3E3E', // Match background for a cohesive look
  },
  deleteText: {
    color: '#FF3B30',
    fontWeight: 'bold',
  },
});

export default ToDoList;
