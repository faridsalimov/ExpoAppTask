import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My First App!</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Enter your name" 
      />

      <Button 
        title="Press Me" 
        onPress={() => alert('Button Pressed!')} 
      />

      <View style={styles.box}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
    marginTop: 20,
  },
});