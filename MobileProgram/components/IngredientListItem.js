import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const IngredientListItem = (props) => {

    return (

        <View style={styles.container}>
            
            
                <View style={styles.flatListItemStyle}>
                    <Text>{props.ingredient}: {props.amount} {props.unit} </Text>
                </View>
            
        </View>
        
    );

}

const styles = StyleSheet.create({
    flatListItemStyle: {
        borderWidth: 1,
        borderColor: 'orange',
        padding: 5,
        backgroundColor: "white",
        marginVertical: 20,
        borderRadius: 20,
        textAlign: 'center',
        width: '80%',
        justifyContent: 'space-between',
        alignContent: "center",
        alignItems: 'center',
    },
    container: {
        flex: 3,
        justifyContent: 'space-between',
        backgroundColor: 'black',
        alignItems: 'center',
        width: '100%',
    },
    loginContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        padding: 10,
        elevation: 10,
        backgroundColor: 'black',
        borderRadius: 20,
        justifyContent: 'space-between',
      },
      h1: {
        paddingTop: 50,
        paddingBottom:2,
        color: 'orange',
        fontSize: 40,
      },
});

export default IngredientListItem;