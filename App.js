import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import TaskScreen from './screens/TaskScreen';
import AddTaskScreen from './screens/AddTaskScreen';
import { TaskProvider } from './context/TaskContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Tasks" component={TaskScreen} />
          <Stack.Screen name="AddTask" component={AddTaskScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}

