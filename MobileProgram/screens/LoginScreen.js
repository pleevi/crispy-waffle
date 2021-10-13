import { StatusBar } from "expo-status-bar";
import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { Formik } from 'formik'
import * as yup from 'yup';
 

const validate = yup.object().shape({
  username: yup.string()
  //.required()
  .matches("admin", "Username not found"),
  password: yup.string()
  //.required()
  .matches("admin", "Password incorrect"),
})


const LoginScreen = ({onSignIn}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>FoodRoulette</Text>
      <View style={styles.loginContainer}>
          <Formik
            validationSchema={validate}
            initialValues={{ username: '', password: '' }}
            onSubmit={(values) => {
              onSignIn(values);
              console.log(values);
            }}
          >
            {(props) => (
              <View style={styles.loginContainer}>
              <TextInput
                  name="username"
                  placeholder="Username"
                  style={styles.textInput}
                  onChangeText={props.handleChange('username')}
                  value={props.values.username}
                  keyboardType="email-address"
                />
                <Text style={styles.hError}>{props.touched.username && props.errors.username}</Text>
                
                <TextInput
                  name="password"
                  placeholder="Password"
                  style={styles.textInput}
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                  secureTextEntry
                />
                <Text style={styles.hError}>{props.touched.password && props.errors.password}</Text>

                <Button onPress={props.handleSubmit} title="Login" color="orange"/>
              </View>
            )}
          </Formik>
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
 
loginContainer: {
  width: '80%',
  alignItems: 'center',
  backgroundColor: 'white',
  padding: 10,
  elevation: 10,
  backgroundColor: 'black'
},
textInput: {
  textAlign: "center",
  marginBottom: 10,
  height: 50,
  width: '100%',
  margin: 10,
  backgroundColor: 'white',
  borderColor: 'gray',
  borderWidth: StyleSheet.hairlineWidth,
  borderRadius: 10,
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
  hError: {
    paddingTop: 10,
    paddingBottom:10,
    color: 'orange',
    fontSize: 20,
  },
});

export default LoginScreen;
 
