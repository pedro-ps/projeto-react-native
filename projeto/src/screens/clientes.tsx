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
        backgroundColor: '#bbdbfe'
    },
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