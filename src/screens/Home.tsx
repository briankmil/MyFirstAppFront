import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { NavigationContainer } from "@react-navigation/native";
// import React, { useEffect, useMemo, useState } from "react";
import * as React from 'react';
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export const Home = () => {  
  return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
  );
};

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 80,
    height: 80,
    borderRadius: 42,
    marginHorizontal: 60,
    borderColor: "#ffd33d",
    padding: 3,
  },
  circleButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 42,
    flex: 1,
  },

  modalContent: {
    flex: 1,
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
  },
  closeModal: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
  },

  titleContainer: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    width: "100%",
    padding: 20,
    alignContent: "center",
    alignItems: "center",
  },
  buttonSection: {
    width: "100%",
    padding: 5,
    bottom: 10,
    backgroundColor: "#f2f2f2",
  },
  input: {
    height: 40,
    margin: 15,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    width: "100%",
  },
  sendButton: {
    width: "100%",
    height: 40,
    backgroundColor: "#ffd33d",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  radioGroupStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  pickerContainer: {
    width: "100%",
    height: 200,
    borderRadius: 5,
    padding: 5,
    fontSize: 12,
    marginBottom: 20,
  },
  picker: {
    width: "100%",
    height: 40,
  },
  pickerItemStyle: {
    fontFamily: "Helvetica",
    fontSize: 12,
    color: "#000",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
