import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const { Screen, Navigator } = createBottomTabNavigator();

import { Home} from '../screens/home';
import { Clientes } from '../screens/clientes';
import { CadCliente } from '../screens/cadastroCliente';

export function TabRoutes(){
    return(
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: 'navy',
                tabBarInactiveTintColor: 'gray',
            }}
        >
            <Screen
            name="home"
            options={{
                /* headerShown: false, */
                title: 'Home',
                tabBarLabel: 'Home',
                headerTitleAlign: 'center',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="home" size={size} color={color} />
                )
            }}
            component={Home}
            />

            <Screen
            name="clientes"
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
            component={Clientes}
            />

            <Screen
            name="cadastroCliente"
            options={{
                title: 'Cadastro de clientes',
                headerTitleAlign: 'center',
                tabBarLabel: 'Cadastro de clientes',
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="person-add-alt-1" size={30} color={color} />
                )
            }}
            component={CadCliente}
            />
        </Navigator>
    )
}