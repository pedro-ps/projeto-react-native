import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlightBase } from "react-native";
import { MaterialIcons } from '@expo/vector-icons/';

const CheckBox = ({options = [], onChange, multiple = false}) => {
    const [selected, setSelected] = useState([]);
    function toggle(id){
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
        {options.map((op, index) => (
            <View style={styles.optionContainer}>
                <TouchableOpacity 
                style={[styles.touchable,{
                    backgroundColor: selected.findIndex(i=> i === op.id) !== -1 
                    ? '#3ebd93' 
                    : '#fff'
                }
                ]} 
                onPress={() => toggle(op?.id)}>
                    {selected.findIndex(i => i === op.id) !== -1 ? (
                    <MaterialIcons name="check" color={'#fff'} fontWeight={'bold'} size={20}/>
                    ) : null}
                </TouchableOpacity>    
                <Text style={styles.optext}>{op?.text}</Text>
            </View>
        ))}
    </View>
    );
};

export default CheckBox;

const styles = StyleSheet.create({
    container: {
        marginLeft: 12,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    touchable: {
        height: 24,
        width: 24,
        borderRadius: 4,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#3ebd93',
        borderWidth: 2,
        padding: 0,
        marginTop: 10,
    },
    optext: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: '600',
        marginTop: 10
    }
})