import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const IngredientListItem = (props) => {

    return (
        <View style={styles.flatListItemStyle}>
            <Text>{props.ingredient}: {props.amount} {props.unit} </Text>
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

export default IngredientListItem;