import "react-native-gesture-handler";
import React, { useMemo, useRef, useState, useCallback } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { TabNavigator } from './src/navigators/TabNavigator';
import { DrawerNavigator } from "./src/navigators/DrawerNavigator";

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style='auto'
        backgroundColor='pink'
        translucent={true} />
      {/* <TabNavigator /> */}
      <DrawerNavigator></DrawerNavigator>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",

  },
 
});
