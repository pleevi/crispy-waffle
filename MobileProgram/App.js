import { StatusBar } from 'expo-status-bar';
import React from 'react';
import LoginScreen from './screens/LoginScreen'
import InputCriteria from './screens/InputCriteria'
import ShowCriteria from './screens/ShowCriteria'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginSCreen from './screens/LoginScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
    <Drawer.Screen name="Login" component={LoginSCreen} />
      <Drawer.Screen name="Show Criteria" component={ShowCriteria} />
      <Drawer.Screen name="Input Criteria" component={InputCriteria} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});