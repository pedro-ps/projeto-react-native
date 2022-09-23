import React from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function CadCliente() {
    const navigation = useNavigation();
    
    function openScreen(){
        navigation.navigate('clientes')
    }

    return (
        <View style={{flex: 1, backgroundColor: '#90e0ef', justifyContent: 'center'}}>
            
        </View>
    )
}