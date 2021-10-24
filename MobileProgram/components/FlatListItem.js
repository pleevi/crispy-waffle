// By Leevi Palo

import React from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';

const FlatListItem = (props) => {

    return (
        <View style={styles.loginContainer}>
            <Text>{props.name} {"\n"}</Text>
            <Text>Difficulty: {props.difficulty} {"\n"}</Text>
            <Text>Cooking time: {props.cooking_time} {"\n"}</Text>
            <Text>Instructions: {"\n"}{"\n"}{props.instructions} </Text>
            <Button title="Show Ingredients" onPress={() => props.onShowIngredients()} color="orange" />
        </View>
    );

}

const styles = StyleSheet.create({
    flatListItemStyle: {
        borderWidth: 1,
        borderColor: 'blue',
        padding: 5,
        backgroundColor: "#abc",
        marginVertical: 5,
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#000',
        alignItems: 'center',
        width: '100%',
    },
    loginContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        padding: 10,
        elevation: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'space-between',
    },
});

export default FlatListItem;