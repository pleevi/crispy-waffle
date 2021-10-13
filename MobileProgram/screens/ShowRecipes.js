import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal, ScrollView, FlatList, Alert, ActivityIndicator } from 'react-native';
import FlatListItem from '../components/FlatListItem';
import IngredientListItem from '../components/IngredientListItem';

export default function showRecipes() {
    const [hasError, setErrors] = useState(false);
    const [someError, setSomeErrors] = useState('');
    const [recipe, setRecipe] = useState([]);
    const [ingredient, setIngredient] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isVisible, setVisibility] = useState(false);
    const [id, setId] = useState(1);


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

    const fetchHandler = () => {
        // sendData();
        fetchRecipe();
        fetchIngredient();

    }

    const backToRecipe = () => {
        setVisibility(false);
    }

    useEffect(() => {
        if (isLoading == true) {
            setLoading(false);
        }
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
            <View style={styles.screen}>
                <FlatList
                    keyExtractor={item => item.recipe_id.toString()}
                    data={recipe}
                    renderItem={itemData => <FlatListItem onShowIngredients={() => { setVisibility(true) }} name={itemData.item.name} difficulty={itemData.item.difficulty} cooking_time={itemData.item.cooking_time} instructions={itemData.item.instructions} />}
                />
                <Modal visible={isVisible} animationType="slide">
                    <FlatList
                        keyExtractor={item => item.ingredient_id.toString()}
                        data={ingredient}
                        renderItem={itemData => <IngredientListItem visibility={isVisible} onBackToRecipe={backToRecipe} ingredient={itemData.item.ingredient} amount={itemData.item.amount} unit={itemData.item.unit} />}
                    />
                    <Button title="Show Recipe" onPress={() => { setVisibility(false) }} />
                </Modal>

                <Button title="Show recipes" onPress={fetchHandler} />
            </View>

        );
    }
}



const styles = StyleSheet.create({
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
});
