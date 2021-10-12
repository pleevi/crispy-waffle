import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SpinningImage from 'react-native-spinning-image';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

LogBox.ignoreLogs(['Animated: `useNativeDriver` was not specified.']);
LogBox.ignoreLogs(["Warning: Can't perform a React state update on an unmounted component."]);

 
const HomeScreen = ({ onSignIn }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h3}>WELCOME USER!</Text>
      <View style={styles.imageContainer}>
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
            
        </View>  
        <View style={styles.buttonContainer}>
        <Button
          title="SPIN THE WHEEL"
          style={styles.button}
          onPress={() => navigation.navigate('Show Criteria')}
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
h3: {
    paddingTop: 100,
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

export default HomeScreen;