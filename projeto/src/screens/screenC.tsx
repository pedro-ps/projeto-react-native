import React from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function ScreenC() {
    const navigation = useNavigation();
    
    function openScreen(){
        navigation.navigate('screenB')
    }

    return (
        <View style={{flex: 1, backgroundColor: '#90e0ef', justifyContent: 'center'}}>

        </View>
    )
}