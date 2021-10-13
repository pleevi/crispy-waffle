import React from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';

const FlatListItem = (props) => {

    return (
        <View style={styles.flatListItemStyle}>
            <Text>{props.name} {"\n"}</Text>
            <Text>Difficulty: {props.difficulty} {"\n"}</Text>
            <Text>Cooking time: {props.cooking_time} {"\n"}</Text>
            <Text>Instructions: {"\n"}{"\n"}{props.instructions} </Text>
            <Button title="Show Ingredients" onPress={() => props.onShowIngredients()} />
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
});

export default FlatListItem;