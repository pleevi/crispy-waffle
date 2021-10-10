import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen'
import { createDrawerNavigator } from 'react-navigation-drawer';



const MyDrawerNavigator = createDrawerNavigator({
    LoginScreen: {
        screen: LoginScreen,
    },
});

export default createAppContainer(MyDrawerNavigator);  