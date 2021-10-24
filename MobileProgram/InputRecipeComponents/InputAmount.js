//Juho
import React, {useEffect, useState} from 'react';
import { init, addRecipe} from '../db2';
import { FlatList, Button, TextInput, StyleSheet, Text, View } from 'react-native';

init()
.then(()=>{
    console.log('Database creation succeeded!');
}).catch((err)=>{
  console.log('Database IS NOT initialized! '+err);
});

const InputAmount=(props) => {
    const [isInserted, setIsInserted]=useState(false);
    const [amount, setAmount]=useState('');

  

    
      
      const amountInputHandler=(enteredText)=>{
        setAmount(enteredText);
      }
      
    

    
    return (
      <View style={styles.container}>
            <View style={styles.inputcontainer}>
                <TextInput placeholder="Amount" 
                            style={styles.inputStyle} 
                            onChangeText={amountInputHandler}
                            value={amount}/>
            </View>  
     
            <View style={styles.buttoncontainer}>
            <Button title="Add" onPress={()=>props.onAddAmount(amount)}/>
            </View>
        </View>
        
        );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
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
    borderWidth: 1, 
    borderColor: 'blue', 
    padding: 5,
    backgroundColor:"#abc",
    marginVertical:5,
  },
  listItemStyle2: {
    borderWidth: 1, 
    borderColor: 'white', 
    padding: 5,
    backgroundColor:"white",
    marginVertical:5,
  },

});

export default InputAmount;
  
  