import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlightBase } from "react-native";
import { MaterialIcons } from '@expo/vector-icons/';


export default function RadioButtonT ({options = [], onChange, multiple = false}){
    const [selected, setSelected] = useState([]);
    function toggleT(id){
        let index = selected.findIndex((i)=> i === id);
        let arrSelecteds = [...selected]
        if(index !== -1){
            arrSelecteds.splice(index, 1);
        }else{
            multiple ? arrSelecteds.push(id) : (arrSelecteds= [id]);
        }

        setSelected(arrSelecteds);
    }

    useEffect(()=> onChange(selected), [selected]);

    return (
    <View style={styles.container}>
        {options.map((op) => (
            <View style={styles.optionContainer}>
                <TouchableOpacity 
                style={[styles.touchable,{
                    backgroundColor: selected.findIndex(i=> i === op.id) !== -1 
                    ? '#fff' 
                    : '#fff'
                }
                ]} 
                onPress={() => toggleT(op?.id)}>
                    {selected.findIndex(i => i === op.id) !== -1 ? (
                    <MaterialIcons name="circle" color={'#3ebd93'} fontWeight={'bold'} size={15} />
                    ) : null}
                </TouchableOpacity>    
                <Text style={styles.optext}>{op?.text}</Text>
            </View>
        ))}
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 11,
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-between'
    },
    containerT: {
        marginLeft: 11,
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    touchable: {
        height: 24.5,
        width: 24.5,
        borderRadius: 50,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#3ebd93',
        borderWidth: 2,
        padding: 0,
        marginTop: 10
    },
    optext: {
        marginLeft: 4,
        fontSize: 20,
        fontWeight: '600',
        marginTop: 10
    }
})