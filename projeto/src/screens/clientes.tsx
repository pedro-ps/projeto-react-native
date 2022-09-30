import React, { useState, useEffect } from 'react';
import { View, Button, Text, FlatList } from 'react-native';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../estilos/stylesClientes';
import Fl from '../components/FlatList';

export function Clientes() {
    const navigation = useNavigation();

    async function getData() {
        const response = await AsyncStorage.getItem("@CadsApp")

        dados = JSON.parse(response);
        console.log(dados)
        return response;
    }

    let dados: any;

    useEffect(()=>{
        getData()
    },[])

    function mostrarDados(){
            alert(dados[0].email)
    }
    
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
                title={'Cadastrar Clientes'}
            />

            <CustomButton
                onClick={mostrarDados}
                style={styles.Button}
                titleStyle={styles.title}
                title={'Testar Clientes'}
            />

            {/* <FlatList
                data={dados}
                renderItem={listaClientes}
            /> */}

            {/* <Fl

            /> */}
        </View>
    )
}