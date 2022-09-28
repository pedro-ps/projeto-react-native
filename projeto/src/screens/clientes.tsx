import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

export function Clientes() {
    const navigation = useNavigation();
    
    function openScreen(){
        navigation.navigate('cadastroCliente')
    }

    function click(){
        alert('pressionou o botão!')
    }

    return (
        <View style={styles.container}>
           <CustomButton
                onClick={openScreen}
                style={styles.Button}
                titleStyle={styles.title}
                title={'Cadastrar Clientes'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#f0f4ff'
    },
    Button:{
        width: '95%',
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7cb518',
        marginTop: 10,
        alignSelf: 'center'
    },
    
    title:{
        fontSize: 20,
        color: '#fff'
    }
})