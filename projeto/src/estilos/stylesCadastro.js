import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor: '#f0f4ff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 30,
        alignSelf: 'flex-start',
        marginLeft: 20,
    },
    labels:{
        fontSize: 18,
        alignSelf: 'flex-start',
        marginLeft: 22,
        marginTop: 20,
        marginBottom: 5,
    },
    radioBt:{
        width: '95%',
        display: 'flex',
        margin: 0,
        padding: 0,
    },
    input:{
        backgroundColor: '#fff',
        height: 50,
        width: '90%',
        borderRadius: 3,
        fontSize: 16,
        paddingLeft: 10,
    },
    inputT:{
        backgroundColor: '#fff',
        height: 50,
        width: '90%',
        borderRadius: 3,
        fontSize: 16,
        paddingLeft: 10,
        marginLeft: 10,
        marginTop: 10
    },
    labelError:{
        alignSelf: 'flex-start',
        color: '#ff375b',
        marginBottom: 5,
        marginLeft: 20
    },
    radioButton:{
        width: '95%',
        display: 'flex',
        margin: 0,
        padding: 0,
    },
    checkBox:{
        width: '95%',
        display: 'flex',
        margin: 0,
        padding: 0,
    },
    estabelecimento:{
        display: 'flex',
        flexDirection: 'row'
    },
    radio:{
        alignSelf: 'flex-start',
        display: 'flex',
        flexDirection: 'row',

    },
    switch:{
        alignSelf: 'flex-start',
        marginLeft: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    button:{
        backgroundColor: '#7cb518',
        height: 50,
        width: '90%',
        borderRadius: 3,
        marginTop: 20,
        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleButton:{
        fontSize: 20,
        color: '#fff'
    }
})