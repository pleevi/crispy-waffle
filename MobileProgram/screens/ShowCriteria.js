import React, { useEffect, useState } from 'react';
import { StyleSheet, CheckBox, Text, View, Button, TextInput, Alert, Modal, FlatList } from 'react-native';
import { init, fetchAllCriteria } from '../db2';
import * as SQLite from 'expo-sqlite';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import extraData from '../ExtraData';
import { useFocusEffect } from '@react-navigation/native';


const data = [
  { id: 1, isChecked: false },
  { id: 2, isChecked: false },
  { id: 3, isChecked: false },
  { id: 4, isChecked: false },
  { id: 5, isChecked: false },
  { id: 6, isChecked: false },
  { id: 7, isChecked: false },
];

init()
  .then(() => {
    console.log('Database creation succeeded!');
  }).catch((err) => {
    console.log('Database IS NOT initialized! ' + err);
  });

var index = 1;
let isLoading = true;
export default function showCriteria() {

  const [isInserted, setIsInserted] = useState(false);
  const [criteriaList, setCriteriaList] = useState([]);
  const [newCriteria, setCriteria] = useState('');
  const [shouldRead, setShouldRead] = useState(true);
  const [isSelected, setSelection] = useState(false);
  //const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState(data);


  const handleChange = (id) => {
    let temp = criteriaList.map((product) => {
      if (id === product.id) {
        return { ...product, isChecked: !product.isChecked };
      }
      return product;
    });
    setCriteriaList(temp);
  };

  useFocusEffect(() => {
    if (extraData.load == true) {
      readCriteria();
      extraData.load = false;

    }


  });

  async function readCriteria() {
    try {
      const dbResult = await fetchAllCriteria(newCriteria);
      console.log("dbResult");
      console.log(dbResult);
      for (i = 0; i < dbResult.rows._array.length; i++) {
        dbResult.rows._array[i].isChecked = false;

      }
      setCriteriaList(dbResult.rows._array);
    }
    catch (err) {
      console.log(err);
    }
    finally {
      console.log("");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.flatliststyle}>
        <FlatList
          // keyExtractor={item=>item.id.toString()}
          keyExtractor={item => criteriaList.indexOf(item).toString()}
          data={criteriaList}
          renderItem={({ item }) => (

            <View style={styles.listItemStyle}>
              <View style={styles.checkboxContainer}>

                <CheckBox
                  value={item.isChecked}
                  tintColors={{ true: 'orange', false: 'black' }}
                  onChange={() => {
                    handleChange(item.id);
                  }}
                  style={styles.checkbox}
                />
                <Text style={styles.label}>{item.id}. {item.checkbox}</Text>
              </View>
            </View>

          )}
        />
      </View>

    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#000',
    alignItems: 'center',
    width: '100%',
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
      color: "black",
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
      textAlign: "center",
      marginBottom: 10,
      height: 40,
      width: '90%',
      margin: 10,
      backgroundColor: 'white',
      borderColor: 'gray',
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 10,
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
  

