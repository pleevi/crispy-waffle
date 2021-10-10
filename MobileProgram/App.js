import 'react-native-gesture-handler';

import * as React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';

import LoggedIn from './screens/LoggedIn';
import LoginScreen from './screens/LoginScreen'
import InputCriteria from './screens/InputCriteria'
import ShowCriteria from './screens/ShowCriteria'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        
      </TouchableOpacity>
    </View>
  );
};

const firstScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: 'LoginScreen', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const secondScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="LoggedIn"
        component={LoggedIn}
        options={{
          title: 'LoggedIn', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const thirdScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="InputCriteria"
        component={InputCriteria}
        options={{
          title: 'InputCriteria', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const fourthScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="ShowCriteria"
        component={ShowCriteria}
        options={{
          title: 'ShowCriteria', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {padding: 0},
        }}
        drawerContent={(props) => {
          const filteredProps = {
            ...props,
            state: {
              ...props.state,
              routeNames: props.state.routeNames.filter(
                // To hide single option
                // (routeName) => routeName !== 'HiddenPage1',
                // To hide multiple options you can add & condition
                (routeName) => {
                  routeName !== 'InputCriteria'
                  && routeName !== 'ShowCriteria'  
                },
              ),
              routes: props.state.routes.filter(
                (route) =>
                  route.name !== 'InputCriteria'
                  && route.name !== 'ShowCriteria'
              ),
            },
          };
          return (
            <DrawerContentScrollView {...filteredProps}>
              <DrawerItemList {...filteredProps} />
            </DrawerContentScrollView>
          );
        }}>
        <Drawer.Screen
          name="Login"
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="LoggedIn"
          options={{drawerLabel: 'LoggedIn'}}
          component={secondScreenStack}
        />
        <Drawer.Screen
          name="InputCriteria"
          options={{drawerLabel: 'Hidden Page One option'}}
          component={thirdScreenStack}
        />
        <Drawer.Screen
          name="ShowCriteria"
          options={{drawerLabel: 'Hidden Page Two option'}}
          component={fourthScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;