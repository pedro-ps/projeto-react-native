import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Component } from 'react';

const { Screen, Navigator } = createNativeStackNavigator();

import { Home } from '../screens/home';
import { ScreenB } from '../screens/screenB';
import { ScreenC } from '../screens/screenC';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export function StackRoutes(){
    return(
        <Navigator>
            <Screen
            name="Home"
            options={{
                headerShown: false,
            }}
            component={Home}
            />

            <Screen
            name="screenB"
            options={{
                title: 'Clientes',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'black',
                },
                headerTintColor: '#fff'
            }}
            component={ScreenB}
            />

            <Screen
            name="screenC"
            options={{
                title: 'ScreenC',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'black',
                },
                headerTintColor: '#fff'
            }}
            component={ScreenC}
            />
        </Navigator>
    )
}