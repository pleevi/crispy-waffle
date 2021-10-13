import React, {useEffect, useState} from 'react';
import { init, addCriteria} from '../db2';
import { FlatList, Button, TextInput, StyleSheet, Text, View } from 'react-native';

init()
.then(()=>{
    console.log('Database creation succeeded!');
}).catch((err)=>{
  console.log('Database IS NOT initialized! '+err);
});

export default function inputFish() {
    const [isInserted, setIsInserted]=useState(false);
    const [criteriaList, setCriteriaList]=useState([]);
    const [newCriteria, setCriteria]=useState('');
  

    const addCriteriaHandler=()=>{
        setCriteriaList(criteriaList=>[...criteriaList, {criteria:newCriteria}]);
        saveCriteria();
        
        
      }
      const criteriaInputHandler=(enteredText)=>{
        setCriteria(enteredText);
      }

    

    async function saveCriteria(){
        try{
          const dbResult = await addCriteria(newCriteria);
          console.log(dbResult);
        }
        catch(err){
          console.log(err);
        }
        finally{
          setIsInserted(true);
        }
    }

    async function removeCriteria(id){
        try{
          const dbResult = await deleteCriteria(id);
          console.log(dbResult);
        }
        catch(err){
          console.log(err);
        }
        finally{
          setIsInserted(true);
          readAllCriteria();
        }
    }

  return (
  <View style={styles.container}>
    <View style={styles.inputcontainer}>
      <TextInput placeholder="Criteria" 
                style={styles.textInput} 
                onChangeText={criteriaInputHandler}
                value={newCriteria}/>  
            
    </View>    
  

    <View style={styles.buttoncontainer}>
      <Button title="Add" onPress={addCriteriaHandler} color="orange"/>
    </View>
    <View style={styles.flatliststyle}>
      <FlatList 
        // keyExtractor={item=>item.id.toString()}
        keyExtractor={item=>criteriaList.indexOf(item).toString()}
        data={criteriaList} 
        renderItem={itemData=>(
          <View style={styles.listItemStyle}>
            <Text> New Criteria: {itemData.item.criteria} added successfully!</Text>
          </View>
        )}
      />
      </View>
    </View>
    );
}
    
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#000',
    alignItems: 'center',
    width: '100%',
},

    inputcontainer: {
      flex: 2,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
    },
    buttoncontainer: {
      
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
      
    },
    textInput: {
      textAlign: "center",
      marginBottom: 10,
      height: 50,
      width: '80%',
      margin: 10,
      backgroundColor: 'white',
      borderColor: 'gray',
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 10,
    },
    listItemStyle: {
      borderWidth: 1, 
      borderColor: 'orange', 
      padding: 5,
      backgroundColor:"#abc",
      marginVertical:5,
      borderRadius: 10,
    },
    listItemStyle2: {
      borderWidth: 1, 
      borderColor: 'white', 
      padding: 5,
      backgroundColor:"white",
      marginVertical:5,
    },
    flatliststyle: {
      borderColor:'black',
      borderWidth:2,
      height:'100%',
      width:'80%',
      flex:5,
    },
    
  h3: {
      paddingTop: 100,
      color: 'orange',
      fontSize: 40,
    },
    h2: {
      color: 'orange',
      fontSize: 18,
      marginTop: 8,
    },
  imageContainer:{
    
    height:200,
    width:'70%',
    backgroundColor: 'black',
    overflow:'hidden',
  
  },
  image:{
    height:'100%',
    width:'100%'
  },
  });
  