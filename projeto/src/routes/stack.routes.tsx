import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Component } from 'react';

const { Screen, Navigator } = createNativeStackNavigator();

import { Home } from '../screens/home';
import { Clientes } from '../screens/clientes';
import { CadCliente } from '../screens/cadastroCliente';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export function StackRoutes(){
    return(
        <Navigator>
            <Screen
            name="home"
            options={{
                headerShown: false,
            }}
            component={Home}
            />

            <Screen
            name="clientes"
            options={{
                title: 'Clientes',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'black',
                },
                headerTintColor: '#fff'
            }}
            component={Clientes}
            />

            <Screen
            name="cadCliente"
            options={{
                title: 'CadCliente',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'black',
                },
                headerTintColor: '#fff'
            }}
            component={CadCliente}
            />
        </Navigator>
    )
}