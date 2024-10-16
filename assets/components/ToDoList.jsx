import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ToDoList = ({ tasks, toggleCompletion, deleteTask }) => {
  return (
    <ScrollView>
      {tasks.map((task) => (
        <View key={task.id} style={[styles.task, task.completed && styles.completed]}>
          <TouchableOpacity onPress={() => toggleCompletion(task.id)} style={styles.checkbox}>
            {task.completed ? <Text style={styles.checked}>✓</Text> : <Text style={styles.unchecked}>⬜</Text>}
          </TouchableOpacity>
          <Text style={styles.taskText}>{task.text}</Text>
          <TouchableOpacity onPress={() => deleteTask(task.id)}>
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 18,
    flex: 1,
    marginLeft: 10,
  },
  checkbox: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
  },
  checked: {
    color: 'green',
    fontSize: 20,
  },
  unchecked: {
    color: 'black',
    fontSize: 20,
  },
  deleteText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default ToDoList;
