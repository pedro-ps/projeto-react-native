import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import CustomButton from '../components/CustomButton';
import stylesSync from '../estilos/stylesSync';

export function Sync() {
    function sincronizar(){
        alert('pressionou o botão!')
    }

    return (
       <View style={stylesSync.container}>
            <CustomButton 
                style={stylesSync.button}
                titleStyle={stylesSync.titleButton}
                title={'Sincronizar dados'} 
                onClick={sincronizar}
        />
       </View>
    )
}