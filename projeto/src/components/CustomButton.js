import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CustomButton ({title, onClick, style, titleStyle}){
    return (
        <TouchableOpacity 
            onPress={onClick}
            style={style ? style : styles.container}>
            <Text style={titleStyle ? titleStyle : styles.txt}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#edf2f4',
        marginTop: 10,
        alignSelf: 'center'
    },
    txt:{ 
        fontSize: 18,
        fontWeight: 'bold'
    },
});