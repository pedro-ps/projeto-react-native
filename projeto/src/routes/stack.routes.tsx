import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Component } from 'react';

const { Screen, Navigator } = createNativeStackNavigator();

import { ScreenA } from '../screens/screenA';
import { ScreenB } from '../screens/screenB';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export function StackRoutes(){
    return(
        <Navigator>
            <Screen
            name="screenA"
            options={{
                headerShown: false,
            }}
            component={ScreenA}
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
        </Navigator>
    )
}