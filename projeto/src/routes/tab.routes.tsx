import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

const { Screen, Navigator } = createBottomTabNavigator();

import { ScreenA } from '../screens/screenA';
import { ScreenB } from '../screens/screenB';

export function TabRoutes(){
    return(
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: 'navy',
                tabBarInactiveTintColor: 'gray',
            }}
        >
            <Screen
            name="screenA"
            options={{
                headerShown: false,
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons 
                        name="home"
                        color={color}
                        size={size}
                    />
                )
            }}
            component={ScreenA}
            />

            <Screen
            name="screenB"
            options={{
                title: 'Clientes',
                tabBarLabel: 'Clientes',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons 
                        name="people"
                        color={color}
                        size={size}
                    />
                )
            }}
            component={ScreenB}
            />
        </Navigator>
    )
}