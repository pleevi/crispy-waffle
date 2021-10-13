import React, {useEffect, useState} from 'react';
import { StyleSheet, CheckBox, Text, View, Button, TextInput, Alert, Modal, FlatList } from 'react-native';
import { init, fetchAllCriteria } from '../db2';
import { StatusBar } from 'expo-status-bar';
import * as SQLite from 'expo-sqlite';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

init()
.then(()=>{
    console.log('Database creation succeeded!');
}).catch((err)=>{
  console.log('Database IS NOT initialized! '+err);
});

export default function CompareCriterias({ props, navigate, route }) {
    //const productName  =  props.navigation.route.params.productName;
    //const { navigate } = useNavigation();
    //const productName = useNavigationParam('productName');
  
    return (
      <View>
        <Text>asdasd</Text>
        <Text>asdsd</Text>
      </View>
    )
  }



