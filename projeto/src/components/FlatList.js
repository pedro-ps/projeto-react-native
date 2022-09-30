import React from 'react';
import {View, Text, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* const response = await AsyncStorage.getItem("@CadsApp");

let dados = JSON.parse(response); */

const produtos = [
    {id: '001', desc:['Monitor', '4,00']},
    {id: '001', desc:['Monitor', '4,00']},
    {id: '001', desc:['Monitor', '4,00']},
    {id: '001', desc:['Monitor', '4,00']},
]


export default function (){
    return(
        <View>
            <FlatList
                data={produtos}
                keyExtractor={item => item.nome}
                renderItem={({item})=> <Text>Nome: {item.desc[0]}</Text>}
            />
        </View>
    )
}