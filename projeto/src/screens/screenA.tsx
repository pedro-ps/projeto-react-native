import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function ScreenA() {
    const navigation = useNavigation();
    
    function openScreen(){
        navigation.navigate('screenB')
    }

    return (
        <View style={{flex: 1, backgroundColor: '#90e0ef', justifyContent: 'center'}}>

            {/* <Button 
                title="Acessar Clientes"
                onPress={openScreen}
            /> */}

        </View>
    )
}