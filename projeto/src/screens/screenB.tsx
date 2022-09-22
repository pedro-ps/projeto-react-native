import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

export function ScreenB() {
    const navigation = useNavigation();
    
    function openScreen(){
        navigation.navigate('screenC')
    }

    /* function click(){
        alert('pressionou o botão!')
    } */

    return (
        <View style={{flex: 1, backgroundColor: '#90e0ef'}}>
           <CustomButton
                onClick={openScreen}
                style={styles.Button}
                titleStyle={styles.title}
                title={'Cadastrar Clientes'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    Button:{
        width: '90%',
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginTop: 10,
        alignSelf: 'center'
    },
    
    title:{
        fontSize: 20,
    }
})