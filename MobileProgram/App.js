import { StatusBar } from 'expo-status-bar';
import React from 'react';
import InputCriteria from './screens/InputCriteria'
import ShowCriteria from './screens/ShowCriteria'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import MyDrawerNavigator from './navigation/MyDrawerNavigation';

export default function App() {
  return (
    <MyDrawerNavigator />
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
