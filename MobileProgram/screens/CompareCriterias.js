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








const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:30,
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 8,
    },
    inputcontainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
    },
    buttoncontainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
      
    },
    inputStyle:{
      width:200,
      height:50,
      padding:10,
      borderWidth:2,
      borderColor:'#f00',
    },
    listItemStyle: { 
      padding: 1,
      backgroundColor:"white",
      marginVertical:1,
    },
    listItemStyle2: {
      borderColor: 'white', 
      padding: 1,
      backgroundColor:"white",
      marginVertical:2,
    },
    flatliststyle: {
      borderColor:'black',
      borderWidth:1,
      height:'80%',
      width:'100%',
      flex:2,
    },
  });
  