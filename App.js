import React, { useState } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MainNavigator } from './src/navigators/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [personName, setPersonName] = useState('Camilo Pir');

  const changeUserName = () => {
    setPersonName("Brian Pir")
    console.log(personName)
  }

  return (

    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <MainNavigator />

      </NavigationContainer>
      <StatusBar
        style='auto'
        backgroundColor='pink'
        translucent={true} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "5e5e5e",
    // justifyContent: "center",
    // alignItems: "center"
  },
  // buttonStyle: {
  //   borderRadius: 10,
  //   // shadowColor: "black"
  //   backgroundColor: "red",
  //   padding: 10,
  //   margin: 10,

  // },
  // textButtonStyle: {
  //   color: "white"
  // }

});