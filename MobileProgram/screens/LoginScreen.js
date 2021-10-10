import React from 'react';
import {View, Text, Button, Image, StyleSheet, Alert} from 'react-native';


export default class LoginScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Login',
      
    };
  
    render() {
      return (
        <View style={styles.container}>
          <View  style={styles.onthetop}>
          <Button
            onPress={() => {this.props.navigation.goBack();}}
            title="Go Back"
          />
          </View>
          <View style={styles.imageContainer}>
          <Image source={require('../assets/images/ahven.jpg')}
            style={styles.image} resizeMode='cover'/>
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        marginTop:40,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    onthetop:{
      flex:1,
      justifyContent:'flex-start',
    },
    imageContainer:{
      flex:2,
      height:"50%",
      width:"50%",
      borderRadius:200,
      overflow:'hidden',
      borderWidth:3,
      borderColor:'red',
    },
    icon: {
      width: 24,
      height: 24,
    },
    image:{
        height:'100%',
        width:'100%'
    }
  });