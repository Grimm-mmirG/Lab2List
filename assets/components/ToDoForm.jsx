import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ToDoForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        placeholderTextColor="#b0b0b0" 
        value={newTask}
        onChangeText={setNewTask}
        maxLength={50} 
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Use space-between for better spacing
    alignItems: 'center',
    padding: 10,
    maxWidth: '100%',
    backgroundColor: '#2c2f33', // Match the app background for consistency
    borderRadius: 8, // Add a border radius for a smoother look
    elevation: 5, // Add elevation for a shadow effect
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#5C5E67', 
    paddingHorizontal: 10,
    paddingVertical: 12, // Increased padding for better touch targets
    borderRadius: 5,
    backgroundColor: '#3B3E45', 
    marginRight: 10,
    color: '#FFFFFF', 
    fontSize: 16, // Increased font size for readability
  },
  addButton: {
    backgroundColor: '#6A5ACD', 
    paddingVertical: 12, // Consistent button height
    paddingHorizontal: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  addButtonText: {
    color: '#FFFFFF', 
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ToDoForm;
