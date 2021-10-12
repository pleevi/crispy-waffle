import { StatusBar } from 'expo-status-bar';
import React from 'react';
import InputCriteria from './screens/InputCriteria'
import ShowCriteria from './screens/ShowCriteria'
import CompareCriterias from './screens/CompareCriterias'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Show Criteria" component={ShowCriteria} />
      <Drawer.Screen name="Input Criteria" component={InputCriteria} />
      <Drawer.Screen name="Compare Criterias" component={CompareCriterias} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

// <Drawer.Screen name="Compare Criteria" component={CompareCriteria} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
