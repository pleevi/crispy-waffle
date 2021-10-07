import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const FlatListItem = (props) => {

    return (
        <View style={styles.flatListItemStyle}>
            <Text>{props.firstName} {"\n"}</Text>
            <Text>Raaka-aineet: {"\n"}{"\n"}{props.lastName} {"\n"}</Text>
            <Text>Laittoaika: {props.age}h {"\n"}</Text>
            <Text>Ohje: {"\n"}{"\n"}{props.ohje} </Text>
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