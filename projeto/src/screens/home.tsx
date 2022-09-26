import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';

export function Home() {
    const navigation = useNavigation();
    
    function acessarClientes(){
        navigation.navigate('clientes')
    }

    function cadastrarClientes(){
        navigation.navigate('cadastroCliente')
    }

    function sair(){
        
    }

    return (
        <View style={{flex: 1, backgroundColor: '#90e0ef'}}>
            <Text style={styles.txt} >Olá, Pedro!</Text>
            <CustomButton 
                onClick={acessarClientes}
                style={styles.Button}
                titleStyle={styles.title}
                title={'Acessar clientes'}
            />

            <CustomButton 
                onClick={cadastrarClientes}
                style={styles.Button}
                titleStyle={styles.title}
                title={'Cadastrar clientes'}
            />

            {/* <CustomButton 
                onClick={sair}
                style={styles.Button}
                titleStyle={styles.title}
                title={'Sair'}
            /> */}
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
        marginTop: 40,
        alignSelf: 'center'
    },

    title:{
        fontSize: 20,
    },

    txt:{
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 25,
        marginLeft: 25,
        marginBottom: 280,
    }
})

