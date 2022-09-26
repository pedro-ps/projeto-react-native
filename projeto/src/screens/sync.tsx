import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import CustomButton from '../components/CustomButton';
/* import { useNavigation } from '@react-navigation/native'; */

export function Sync() {
    function sincronizar(){
        alert('pressionou o botão!')
    }

    return (
       <View style={styles.container}>
            <CustomButton 
                style={styles.button}
                titleStyle={styles.titleButton}
                title={'Sincronizar dados'} 
                onClick={sincronizar}
        />
       </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f0f4ff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        backgroundColor: '#7cb518',
        height: 50,
        width: '95%',
        borderRadius: 3,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleButton:{
        fontSize: 20,
        color: '#fff'
    }
})