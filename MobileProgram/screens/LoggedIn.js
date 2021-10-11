import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 

 
const LoggedIn = () => {
  return (
    <View style={styles.container}>
      <Text>WELCOME USER!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoggedIn;