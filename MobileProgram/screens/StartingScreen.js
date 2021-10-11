import React from 'react';
import { View, Text, Button, StyleSheet, Image, Pressable } from 'react-native';
  
const StartingScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>FoodRoulette</Text>
        <View style={styles.imageContainer}>
            <Image fadeDuration={3000}
            source={{uri:'https://www.onlineroulette.org/images/cms/icons/icon-roulette.png'}}
            style={styles.image} resizeMode='cover'/>
        </View> 
        <Text style={styles.h2}>Do you want to play a game</Text> 
        <View style={styles.buttonContainer}>
        <Button
          title="LET'S START"
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
          color="orange"
        />
        </View> 
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#000',
        alignItems: 'center',
        width: '100%',
    },
    h1: {
        paddingTop: 50,
        color: 'orange',
        fontSize: 40,
      },
      h2: {
        color: 'orange',
        fontSize: 18,
        marginTop: 8,
      },
    imageContainer:{
      
      height:200,
      width:'70%',
      backgroundColor: 'black',
      overflow:'hidden',

    },
    image:{
      height:'100%',
      width:'100%'
    },
    
  });
 
export default StartingScreen;