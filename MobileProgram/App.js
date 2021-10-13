import { StatusBar } from 'expo-status-bar';
import React from 'react';
import InputCriteria from './screens/InputCriteria'
import ShowCriteria from './screens/ShowCriteria'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import showRecipes from './screens/ShowRecipes';
import CompareCriterias from './screens/CompareCriterias';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Show recipes" component={showRecipes} />
        <Drawer.Screen name="Show Criteria" component={ShowCriteria} />
        <Drawer.Screen name="Input Criteria" component={InputCriteria} />
        <Drawer.Screen name="Compare Criterias" component={CompareCriterias} />
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
