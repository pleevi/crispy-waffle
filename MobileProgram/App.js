import * as React from 'react';
import { StyleSheet, Text, View, Button,StatusBar, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import * as SQLite from 'expo-sqlite';


import {init, addUsers, fetchUsers} from './screens/db';
import StartingScreen from './screens/StartingScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import InputCriteria from './screens/InputCriteria';
import ShowCriteria from './screens/ShowCriteria';

 
const Drawer = createDrawerNavigator();
 
const HomeScreenDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home Screen" component={HomeScreen} />
      <Drawer.Screen name="Input Criteria" component={InputCriteria} />
      <Drawer.Screen name="Show Criteria" component={ShowCriteria} />
    </Drawer.Navigator>
  );
};



const RootStack = createStackNavigator();
 
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
 
  const handleSignIn = (user) => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {isAuthenticated ? (
          <RootStack.Screen
          name="FoodRoulette" 
          component={HomeScreenDrawer}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff',
            },
            headerStyle: {
              backgroundColor: 'orange',
            },
            headerRight: () => (
              <Button onPress={handleSignOut} title="Logout" color="grey" />
            ),
          }}
          />
        ) : (
          <>
            <RootStack.Screen
              name="Starting"
              component={StartingScreen}
              options={{
              headerShown: false,
              animationTypeForReplace: 'pop',
              }}
            />
            <RootStack.Screen 
              name="Login"
              options={{
                headerShown: false,
                animationTypeForReplace: 'pop',
                }}>
              {(props) => (
                <LoginScreen {...props} onSignIn={handleSignIn} />
              )}
            </RootStack.Screen>
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    width: '80%',
    alignItems: 'center',
  }
});

export default App;