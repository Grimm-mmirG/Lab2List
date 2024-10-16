import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList'; // Import ToDoList component
import ToDoForm from './ToDoForm'; // Import ToDoForm component

export default function App() {
  // State for managing tasks
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Do laundry', completed: false },
    { id: 2, text: 'Go to gym', completed: false },
    { id: 3, text: 'Walk dog', completed: false },
  ]);
  
  // State for tracking the input value of the new task
  const [newTask, setNewTask] = useState('');

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, text: newTask, completed: false }]);
      setNewTask('');  // Clear the input after adding a task
    }
  };

  // Function to toggle task completion
  const toggleCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* ToDoList will handle displaying tasks */}
      <ToDoList tasks={tasks} toggleCompletion={toggleCompletion} deleteTask={deleteTask} />
      
      {/* ToDoForm will handle the input and submission of tasks */}
      <ToDoForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});
