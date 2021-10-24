//Juho
import React, {useEffect, useState} from 'react';
import InputRecipeName from '../InputRecipeComponents/InputRecipeName';
import InputInstructions from '../InputRecipeComponents/InputInstructions';
import InputDifficulty from '../InputRecipeComponents/InputDifficulty';
import InputAmount from '../InputRecipeComponents/InputAmount';
import InputIngredient from '../InputRecipeComponents/InputIngredient';
import InputCookingTime from '../InputRecipeComponents/InputCookingTime';
import { init, addRecipe} from '../db2';
import { FlatList, Button, TextInput, StyleSheet, Text, View } from 'react-native';


init()
.then(()=>{
    console.log('Database creation succeeded!');
}).catch((err)=>{
  console.log('Database IS NOT initialized! '+err);
});


export default function inputRecipe() {
    const [isInserted, setIsInserted]=useState(false);
    const [amount, setAmount]=useState('');
    const [cookingTime, setCookingTime]=useState('');
    const [difficulty, setDifficulty]=useState('');
    const [ingredient, setIngredient]=useState('');
    const [instructions, setInstructions]=useState('');
    const [recipeName, setRecipeName]=useState('');

        
    const amountInputHandler=(enteredText)=>{
      setAmount(enteredText);
      saveRecipe();
    }
    const cookingTimeInputHandler=(enteredText)=>{
      setCookingTime(enteredText);
      saveRecipe();
    }
    const difficultyInputHandler=(enteredText)=>{
      setDifficulty(enteredText);
      saveRecipe();
    }
    const ingredientInputHandler=(enteredText)=>{
      setIngredient(enteredText);
      saveRecipe();
    }
    const instructionsInputHandler=(enteredText)=>{
      setInstructions(enteredText);
      saveRecipe();
    }  
    const recipeNameInputHandler=(enteredText)=>{
      setRecipeName(enteredText);
      saveRecipe();
    }

    
        async function saveRecipe(){
            try{
            const dbResult = await addRecipe(recipeName, ingredient, instructions, amount, difficulty, cookingTime);
            console.log(dbResult);
            }
            catch(err){
            console.log(err);
            }
            finally{
            setIsInserted(true);
            }
        }


    // async function removeRecipe(id){
    //     try{
    //       const dbResult = await deleteRecipe(id);
    //       console.log(dbResult);
    //     }
    //     catch(err){
    //       console.log(err);
    //     }
    //     finally{
    //       setIsInserted(true);
    //       readAllRecipe();
    //     }
    // }

  return (
  <View style={styles.container}>
        <InputRecipeName onAddRecipeName={recipeNameInputHandler} />
        <InputInstructions onAddInstructions={instructionsInputHandler} />
        <InputDifficulty onAddDifficulty={difficultyInputHandler} />
        <InputCookingTime onAddCookingTime={cookingTimeInputHandler} />
        <InputIngredient onAddIngredient={ingredientInputHandler} />
        <InputAmount onAddAmount={amountInputHandler} />
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
  