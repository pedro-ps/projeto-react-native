import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Component } from 'react';

const { Screen, Navigator } = createNativeStackNavigator();

import { ScreenA } from '../screens/screenA'
import { ScreenB } from '../screens/screenB'

export function StackRoutes(){
    return(
        <Navigator>
            <Screen
            name="screenA"
            component={ScreenA}
            />

            <Screen
            name="screenB"
            component={ScreenB}
            />
        </Navigator>
    )
}