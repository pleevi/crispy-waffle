import React, { useState, useEffect, setState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal, ScrollView, FlatList, Alert, ActivityIndicator } from 'react-native';
import FlatListItem from '../components/FlatListItem';
import IngredientListItem from '../components/IngredientListItem';
import SpinningImage from 'react-native-spinning-image';

export default function showRecipes() {
    const [hasError, setErrors] = useState(false);
    const [someError, setSomeErrors] = useState('');
    const [recipe, setRecipe] = useState([]);
    const [ingredient, setIngredient] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isVisible, setVisibility] = useState(false);
    const [id, setId] = useState(1);
    const [isShowingImage, setShowingImage] = React.useState(false);
    const [count, setCount] = useState(0);
    const [shouldShow, setShouldShow] = useState(true);
    const [isShowingBtn, setShowingBtn] = React.useState(true);


    
    async function fetchRecipe() {
        await fetch("http://10.0.2.2:8080/rest/mealsservice/getAll")//Function returns a value, which is a parameter 
            .then(parameter => parameter.json())//to the next part (parameter). And parameter.json() returns a value, which is a parameter 
            .then(anotherParameter => setRecipe(anotherParameter));//to the next (anotherParameter), which is set to movies

    }

    async function fetchIngredient() {
        await fetch("http://10.0.2.2:8080/rest/mealsservice/getAllIngredients")//Function returns a value, which is a parameter 
            .then(parameter => parameter.json())//to the next part (parameter). And parameter.json() returns a value, which is a parameter 
            .then(anotherParameter => setIngredient(anotherParameter));//to the next (anotherParameter), which is set to movies

    }

    // async function sendData() {

    //     const response = await fetch("http://10.0.2.2:8080/rest/mealsservice/getAll",
    //         {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ id: 1 })
    //         });

    // }

    const imgShow = () => {
        setShowingImage(true);
    }

    const imgHide = () => {
        setShowingImage(false);
    }
    const btnHide = () => {
        setShowingBtn(false);
    }

    const fetchHandler = () => {
        imgShow({count});
        setTimeout(() => {
            fetchRecipe();
            }, 3000);
            setTimeout(() => {
                imgHide();
                }, 3000);
                setTimeout(() => {
                    btnHide();
                    }, 3000);
        fetchIngredient();

    }

    const backToRecipe = () => {
        setVisibility(false);
    }

    useEffect(() => {
        if (isLoading == true) {
            setLoading(false);
        }
        const countTimer = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
          // every 1000 milliseconds
          }, 1000);
          // and clear this timer when the component is unmounted
          return function cleanup() {
            clearInterval(countTimer);
          };

    });



    

    if (isLoading == true) {
        return (
            <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        );
    }
    //If errors

    else if (hasError) {
        return (
            <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
                <Text>{hasError}</Text>
                <Text>{"" + someError}</Text>
            </View>
        );
    }

    //Otherwise the list is shown
    else {
        return (
            <View style={styles.container}>
                <FlatList style={styles.loginContainer}
                    keyExtractor={item => item.recipe_id.toString()}
                    data={recipe}
                    renderItem={itemData => <FlatListItem style={styles.loginContainer} onShowIngredients={() => { setVisibility(true) }} name={itemData.item.name} difficulty={itemData.item.difficulty} cooking_time={itemData.item.cooking_time} instructions={itemData.item.instructions} />}
                />
                <Modal visible={isVisible} animationType="slide">
                <Text style={styles.h1}>Incredients</Text>
                    <FlatList style={styles.loginContainer2}
                    
                        keyExtractor={item => item.ingredient_id.toString()}
                        data={ingredient}
                        renderItem={itemData => <IngredientListItem visibility={isVisible} onBackToRecipe={backToRecipe} ingredient={itemData.item.ingredient} amount={itemData.item.amount} unit={itemData.item.unit} />}
                    />
                    <Button title="Show Recipe" onPress={() => { setVisibility(false) }} color="orange" />
                </Modal>


                <View style={styles.imageContainer}>
                <Text>Rouletteiing your food {count}</Text>
                    {
                        isShowingImage ?
                        (
                            <SpinningImage
                                source={'https://www.onlineroulette.org/images/cms/icons/icon-roulette.png'}
                                style={styles.image}
                                fadeDuration={3000}
                                speed={3000}
                                rotations={10}
                                resizeMode='cover'
                                height={200}
                                width={200}
                                direction='counter'
                        
                            />
                        ) : (
            
                                
                <Button
                    title="SPIN THE WHEEL"
                    style={styles.button}
                    onPress={fetchHandler}
                    color="orange"
                />)
                        }  
            </View>
                
            </View>

        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#000',
        alignItems: 'center',
        width: '100%',
    },
    loginContainer: {
        width: '80%',
        backgroundColor: 'white',
        padding: 10,
        elevation: 10,
        backgroundColor: 'black'
      },
      loginContainer2: {
        width: '100%',
        backgroundColor: 'white',
        padding: 10,
        elevation: 10,
        backgroundColor: 'black'
      },
    screen: {
        padding: 60,
    },
    formStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },

    inputStyle: {
        borderWidth: 2,
        borderColor: 'red',
        padding: 10,
        width: '80%',
    },

    listItemStyle: {
        borderWidth: 1,
        borderColor: 'blue',
        padding: 5,
        backgroundColor: "#abc",
        marginVertical: 5,
    },
    h1: {
        paddingTop: 30,
        paddingBottom:20,
        color: 'orange',
        fontSize: 40,
        textAlign: 'center',
        backgroundColor: "black",
      },
});
