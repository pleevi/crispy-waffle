//Juho
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, FlatList } from 'react-native';
import { init, fetchAllRecipe } from '../db2';
import * as SQLite from 'expo-sqlite';
import { TouchableOpacity } from 'react-native-gesture-handler';


init()
.then(()=>{
    console.log('Database creation succeeded!');
}).catch((err)=>{
  console.log('Database IS NOT initialized! '+err);
});

var index=1;
export default function showRecipe() {

    const [isInserted, setIsInserted]=useState(false);
    const [recipeList, setRecipeList]=useState([]);
    const [amount, setAmount]=useState('');
    const [cookingTime, setCookingTime]=useState('');
    const [difficulty, setDifficulty]=useState('');
    const [ingredient, setIngredient]=useState('');
    const [instructions, setInstructions]=useState('');
    const [recipeName, setRecipeName]=useState('');

    const [shouldRead, setShouldRead]=useState(true);
    const [isLoading, setLoading] = useState(true);

    const longPressHandler = (id) => {
        alert('Recipe successfully removed from database!');
        removeRecipe(id);
      }

    useEffect(()=>{
      if (isLoading == true){
        setLoading(false);
        readAllRecipe();
      }
    });


    async function removeRecipe(id){
        try{
          const dbResult = await deleteRecipe(id);
          console.log(dbResult);
        }
        catch(err){
          console.log(err);
        }
        finally{
          setIsInserted(true);
          readAllRecipe();
        }
      }

    async function readAllRecipe(){
        try{
          const dbResult = await fetchAllRecipe(recipeName, ingredient, instructions, amount, difficulty, cookingTime);
          console.log("dbResult");
          console.log(dbResult);
          setRecipeList(dbResult.rows._array);
        }
        catch(err){
          console.log(err);
        }
        finally{
          console.log("All recipes has been read");
        }
      }

      return (
        <View style={styles.container}>
          <View style={styles.flatliststyle}>
          <FlatList 
            // keyExtractor={item=>item.id.toString()}
            keyExtractor={item=>recipeList.indexOf(item).toString()}
            data={recipeList} 
            renderItem={itemData=>(
              <TouchableOpacity
                onLongPress={()=>{longPressHandler(itemData.item.id)}}
                style={styles.listItemStyle2}>
              <View style={styles.listItemStyle}>
                <Text>{itemData.item.id}) {itemData.item.recipeName}, {itemData.item.ingredient}, {itemData.item.instructions}, {itemData.item.amount}, {itemData.item.difficulty}, {itemData.item.cookingTime} </Text>
              </View>
              </TouchableOpacity>
            )}
          />
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
    flatliststyle: {
      borderColor:'black',
      borderWidth:2,
      height:'100%',
      width:'80%',
      flex:5,
    },
  });
  
