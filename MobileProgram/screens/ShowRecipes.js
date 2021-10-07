import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, Alert, ActivityIndicator } from 'react-native';
import FlatListItem from '../components/FlatListItem';

export default function showRecipes() {
    const [hasError, setErrors] = useState(false);
    const [someError, setSomeErrors] = useState('');
    const [people, setPeople] = useState([]);
    const [isLoading, setLoading] = useState(true);

    async function fetchPeople() {
        await fetch("http://10.0.2.2:8080/rest/personservice/getAll")//Function returns a value, which is a parameter 
            .then(parameter => parameter.json())//to the next part (parameter). And parameter.json() returns a value, which is a parameter 
            .then(anotherParameter => setPeople(anotherParameter));//to the next (anotherParameter), which is set to movies

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
                    keyExtractor={item => item.id.toString()}
                    data={people}
                    renderItem={itemData => <FlatListItem id={itemData.item.id} firstName={itemData.item.firstName} lastName={itemData.item.lastName} age={itemData.item.age} ohje={itemData.item.ohje} />}
                />

                <Button title="Show recipes" onPress={fetchPeople} />
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
});
