import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Text, ScrollView, SafeAreaView, Switch, Button, Platform } from 'react-native';
import { useForm, Controller} from 'react-hook-form';
import CustomButton from '../components/CustomButton';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import RadioButton from '../components/RadioButton';
import RadioButtonT from '../components/RadioButtonT';
import CheckBox from '../components/CheckBox';
/* import DateTimePicker from '@react-native-community/datetimepicker'; */
/* import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { async } from '@firebase/util';

const firebaseApp= initializeApp({
    apiKey: "AIzaSyBuxsScQJ7xuHDzvYbZcrVzl5bh362Hz5E",
    authDomain: "cadsacc-a46f9.firebaseapp.com",
    projectId: "cadsacc-a46f9",
    storageBucket: "cadsacc-a46f9.appspot.com",
    messagingSenderId: "937145730749",
    appId: "1:937145730749:web:6639dc5b36fd89d06459d4"
}); */

const schema = yup.object({
    nome: yup.string().required("Informe o nome"),
    sobrenome: yup.string().required("Informe o sobrenome"),
    telefone: yup.string().required("Informe o telefone"),
    email: yup.string().email("Email inválido").required("Informe o email"),
    status: yup.string().required("Informe o status")
})

export function CadCliente(this: any) {
    const diasDeEntrega = [
        {text: 'Segunda-feira', id: 'segunda-feira'},
        {text: 'Terça-feira', id: 'terça-feira'},
        {text: 'Quarta-feira', id: 'quarta-feira'},
        {text: 'Quinta-feira', id: 'quinta-feira'},
        {text: 'Sexta-feira', id: 'sexta-feira'},
    ];

    const preferencias = [
        {text: 'E-mail', id: 'email'},
        {text: 'Fax', id: 'fax'},
        {text: 'WhatsApp', id: 'whatsapp'},
        {text: 'Telefonema', id: 'telefonema'},
    ];

    const tipoEstabelecimento = [
        {text: 'Residencial', id: 'residencial'},
        {text: 'Comercial', id: 'comercial'}
    ]

    const statusCli = [
        {text: 'Ativo', id: 'ativo'},
        {text: 'Inativo', id: 'inativo'}
    ]

    const [ligado, setLigado] = useState(false);
    const toggleLigado=()=>setLigado(!ligado);

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    /* const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [diasEntrega, setDiasEntrega] = useState("");
    const [horarioEntrega, setHorarioEntrega] = useState("");
    const [preferenciaContato, setPreferencia] = useState("");
    const [tpEstabelecimento, setTpEstabelcimento] = useState("");
    const [entregaRastreavel, setEntregaRastreavel] = useState("");
    const [status, setStatus] = useState("");
    const [clientes, setClientes] = useState([]);

    const db = getFirestore(firebaseApp);
    const userCollectionRef = collection(db, "clientes");

    useEffect(()=> {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            console.log(data);
        };
        getUsers();
    }, []) */

    function cadastrar(data: any){
        /* let isRastreavel;

        if(ligado){
            isRastreavel = "Sim"
        }else{
            isRastreavel = "Não"
        } */

        console.log(data/* , isRastreavel */);
    }

    return (
        <SafeAreaView>
        <ScrollView>

        <View style={styles.container}>
            
            <Text style={styles.labels}>Nome</Text>
            <Controller
                control={control}
                name="nome"
                render={( {field: { onChange, onBlur, value } } ) => (
                    <TextInput 
                    style={[
                        styles.input, {
                            borderWidth: errors.nome && 1,
                            borderColor: errors.nome && '#ff375b'
                        }
                    ]}
                    onChangeText={onChange}
                    onBlur={onBlur} // chamado qunado o textInput é tocado
                    value={value}
                    placeholder="Nome"
                    />
                )}
            />
            {errors.nome && <Text style={styles.labelError}>{errors.nome?.message}</Text>}

            <Text style={styles.labels}>Sobrenome</Text>
            <Controller 
                control={control}
                name="sobrenome"
                render={( {field: { onChange, onBlur, value } } ) => (
                    <TextInput 
                    style={[
                        styles.input, {
                            borderWidth: errors.sobrenome && 1,
                            borderColor: errors.sobrenome && '#ff375b'
                        }
                    ]}
                    onChangeText={onChange}
                    onBlur={onBlur} // chamado qunado o textInput é tocado
                    value={value}
                    placeholder="Sobrenome"
                    />
                )}
            />
            {errors.sobrenome && <Text style={styles.labelError}>{errors.sobrenome?.message}</Text>}

            <Text style={styles.labels}>Telefone</Text>
            <Controller 
                control={control}
                name="telefone"
                render={( {field: { onChange, onBlur, value } } ) => (
                    <TextInput
                    maxLength={9}
                    style={[
                        styles.input, {
                            borderWidth: errors.telefone && 1,
                            borderColor: errors.telefone && '#ff375b'
                        }
                    ]}
                    onChangeText={onChange}
                    onBlur={onBlur} // chamado qunado o textInput é tocado
                    value={value}
                    placeholder="Telefone"
                    />
                )}
            />
            {errors.telefone && <Text style={styles.labelError}>{errors.telefone?.message}</Text>}

            <Text style={styles.labels}>Email</Text>
            <Controller 
                control={control}
                name="email"
                render={( {field: { onChange, onBlur, value } } ) => (
                    <TextInput 
                    style={[
                        styles.input, {
                            borderWidth: errors.email && 1,
                            borderColor: errors.email && '#ff375b'
                        }
                    ]}
                    onChangeText={onChange}
                    onBlur={onBlur} // chamado qunado o textInput é tocado
                    value={value}
                    placeholder="Email"
                    />
                )}
            />
            {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}

            {/* Olhar o user storie no teams para fazer os itens comentados abaixo */}
            
            <View style={styles.checkBox}>
                <Text style={{fontSize: 25, marginTop: 15, marginLeft: 12}}>Dias para entrega:</Text>
                <CheckBox options={diasDeEntrega} onChange={(op: any) => cadastrar(op)} multiple/>
            </View>

            {/* horário para entregar (HH:MM) */}

            {/* Preferência de contato (list, possivelmente um select) */}
            <View style={styles.checkBox}>
                <Text style={{fontSize: 25, marginTop: 15, marginLeft: 12}}>Preferência de contato:</Text>
                <CheckBox options={preferencias} onChange={(op: any) => cadastrar(op)}/>
            </View>

            {/* Tipo de estabelecimento (radio button) */}
            
            <View style={styles.radioButton}>
                <Text style={{fontSize: 25, marginTop: 15, marginLeft: 12}}>Tipo de estabelecimento:</Text>
                <View style={styles.radio}>
                    <RadioButton options={tipoEstabelecimento} onChange={(op: any) => cadastrar(op)}/>
                </View>
            </View>

            {/* Entrega rastreável (booleano / toogle) */}
            
            <Text style={{fontSize: 25, marginTop: 15, alignSelf: 'flex-start', marginLeft: 20}}>Entrega rastreável?</Text>
            <View style={styles.switch}>
                    <Text style={{fontSize: 20, marginTop: 7, marginLeft: 12}}>{ligado ? 'Sim' : 'Não'}</Text>
                    <Switch
                        trackColor={{true: '#3ebd93'}}
                        thumbColor={ligado ? 'green' : 'gray'}
                        value={ligado}
                        onValueChange={toggleLigado}
                        style={{alignSelf: 'flex-start'}}
                        onChange={() => cadastrar(ligado)}
                    />
            </View>
                    
            <View style={styles.radioButton}>
                <Text style={{fontSize: 25, marginTop: 15, marginLeft: 12}}>Status:</Text>
                <View style={styles.radio}>
                    <RadioButtonT options={statusCli} onChange={(op: any) => cadastrar(op)}/>
                </View>
            </View>

            <CustomButton 
                style={styles.button}
                titleStyle={styles.titleButton}
                title={'Cadastrar cliente'} 
                onClick={handleSubmit(cadastrar)}
            />
        </View>
        </ScrollView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
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
    input:{
        backgroundColor: '#fff',
        height: 50,
        width: '90%',
        borderRadius: 3,
        fontSize: 16,
        paddingLeft: 10,
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