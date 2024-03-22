import React from "react";
import { Text } from "react-native";
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import { Onboarding1 } from "../screens/Onboarding1";
import { Onboarding2 } from "../screens/Onboarding2";
import { Onboarding3 } from "../screens/Onboarding3";
import { Home } from "../screens/Home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/Ionicons';

export const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Inicio"
                    component={Onboarding2}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Productos"
                    component={Onboarding1}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="cart" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Cotizaciones"
                    component={Onboarding3}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="list" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};