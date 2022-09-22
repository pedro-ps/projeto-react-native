import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const { Screen, Navigator } = createBottomTabNavigator();

import { ScreenA } from '../screens/screenA';
import { ScreenB } from '../screens/screenB';
import { ScreenC } from '../screens/screenC';

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
                    <FontAwesome5 name="home" size={size} color={color} />
                )
            }}
            component={ScreenA}
            />

            <Screen
            name="screenB"
            options={{
                title: 'Clientes',
                headerTitleAlign: 'center',
                tabBarLabel: 'Clientes',
                /* headerStyle:{
                    backgroundColor: '#90e0ef'
                }, */
                tabBarIcon: ({ color}) => (
                    <MaterialIcons
                        name="people"
                        size={30}
                        color={color}
                    />
                )
            }}
            component={ScreenB}
            />

            <Screen
            name="screenC"
            options={{
                title: 'Cadastro de clientes',
                headerTitleAlign: 'center',
                tabBarLabel: 'Cadastro de clientes',
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="person-add-alt-1" size={30} color={color} />
                )
            }}
            component={ScreenC}
            />
        </Navigator>
    )
}