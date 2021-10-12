import { StatusBar } from "expo-status-bar";
import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { Formik } from 'formik'
 


const LoginScreen = ({ onSignIn }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>FoodRoulette</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          value={username}
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setUsername(text)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          value={password}
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button
          title="LOGIN"
          style={styles.button}
          onPress={onSignIn}
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
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "orange",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
  h1: {
    paddingTop: 50,
    paddingBottom:200,
    color: 'orange',
    fontSize: 40,
  },
});

export default LoginScreen;
 
