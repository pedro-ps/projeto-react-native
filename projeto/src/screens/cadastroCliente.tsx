import React, { Component, useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Text, ScrollView, SafeAreaView, Switch, Button } from 'react-native';
import { useForm, Controller} from 'react-hook-form';
import CustomButton from '../components/CustomButton';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import RadioButton from '../components/RadioButton';
import RadioButtonT from '../components/RadioButtonT';
import RadioBT from '../components/RadioBT';
import CheckBox from '../components/CheckBox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import stylesCadastro from '../estilos/stylesCadastro';

const schema = yup.object({
    nome: yup.string().required("Informe o nome"),
    sobrenome: yup.string().required("Informe o sobrenome"),
    telefone: yup.string().required("Informe o telefone"),
    email: yup.string().email("Email inválido").required("Informe o email"),
    status: yup.string().required("Informe o status")
})

export function CadCliente() {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [whatsapp, setWhats] = useState("");
    const [email, setEmail] = useState("");
    const [preferenciaContato, setPreferencia] = useState("");
    const [entrega, setEntrega] = useState("");
    const [diasEntrega, setDias] = useState("");
    const [tpEstabelecimento, setEstabelecimento] = useState("");
    const [status, setStatus] = useState("");
    const [value, setValue] = useState("")

    function entregaRastreavel(ligado: boolean){
        const toString = !ligado ? "Sim" : "Não";

        setEntrega(toString);
    }

    async function handleNew(){
        let id = Math.random();

        const newData = {
            id,
            nome,
            sobrenome,
            telefone,
            whatsapp,
            email,
            preferenciaContato,
            entrega,
            diasEntrega,
            tpEstabelecimento,
            status,
        }

        try{

        const response = await AsyncStorage.getItem("@CadsApp")
        const previousData = response ? JSON.parse(response) : [];

        const data = [...previousData, newData];

        await AsyncStorage.setItem("@CadsApp", JSON.stringify(data));
        alert("Cliente cadastrado com sucesso")
    }catch{
        alert("Erro ao cadastrar cliente")
    }
    }

    async function deleteData(){
        try{
        AsyncStorage.removeItem("@CadsApp");
        alert("deletado com sucesso!")
        }catch{
            alert("não foi possível deletar")
        }
    }    

    async function getData() {
        const response = await AsyncStorage.getItem("@CadsApp")
        if(response){
            setValue(response)
        }

        console.log(value)
    }

    useEffect(()=>{
        getData()
    },[])

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

    const tpTelefone = [
        {text: "Sim", id: "Sim"},
        {text: "Não", id: "Não"}
    ]

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
    });

    function exibirNoConsole(){
        alert('clicou!')
    }

    function cadastrar(data:any){
        console.log(data,!ligado);
    }

    let whats = setWhats;

    function isWhatsapp(op: any){
        if(op == "Sim"){
            whats = setTelefone;
        }else{
            whats = setWhats;
        }
    }

    return (
        <SafeAreaView>
        <ScrollView>

        <View style={stylesCadastro.container}>
             {/* <Text>{value}</Text> */}


            <Text style={stylesCadastro.labels}>Nome</Text>
            <Controller
                control={control}
                name="nome"
                render={( {field: { onChange, onBlur, value } } ) => (
                    <TextInput 
                    style={[
                        stylesCadastro.input, {
                            borderWidth: errors.nome && 1,
                            borderColor: errors.nome && '#ff375b',
                        }
                    ]}
                    onBlur={onBlur} // chamado qunado o textInput é tocado
                    value={nome}
                    onChangeText={(value) => setNome(value)}
                    placeholder="Nome"
                    />
                )}
            />
            {/* {errors.nome && <Text style={stylesCadastro.labelError}>{errors.nome?.message}</Text>} */}

            <Text style={stylesCadastro.labels}>Sobrenome</Text>
            <Controller 
                control={control}
                name="sobrenome"
                render={( {field: { onChange, onBlur, value } } ) => (
                    <TextInput 
                    style={[
                        stylesCadastro.input, {
                            borderWidth: errors.sobrenome && 1,
                            borderColor: errors.sobrenome && '#ff375b'
                        }
                    ]}
                    onBlur={onBlur} // chamado qunado o textInput é tocado
                    value={sobrenome}
                    onChangeText={setSobrenome}
                    placeholder="Sobrenome"
                    />
                )}
            />
            {/* {errors.sobrenome && <Text style={stylesCadastro.labelError}>{errors.sobrenome?.message}</Text>} */}

            <Text style={stylesCadastro.labels}>Telefone</Text>
            <Controller 
                control={control}
                name="telefone"
                render={( {field: { onChange, onBlur, value } } ) => (
                    <TextInput
                    maxLength={13}
                    style={[
                        stylesCadastro.input, {
                            borderWidth: errors.telefone && 1,
                            borderColor: errors.telefone && '#ff375b'
                        }
                    ]}
                    onChangeText={setTelefone}
                    onBlur={onBlur} // chamado qunado o textInput é tocado
                    value={telefone}
                    placeholder="+99(99)999999999"
                    />
                )}
            />
           {/*  <View style={stylesCadastro.radioBt}>
                <Text style={{fontSize: 18, marginLeft: 13, marginTop: 10}}>Este telefone é WhatsApp?</Text>
                <RadioBT options={tpTelefone} onChange={(op: any) => isWhatsapp(op)}/>

                <Text style={{fontSize: 18, marginLeft: 13, marginTop: 20}}>WhatsApp</Text>
                <Controller 
                control={control}
                name="telefone"
                render={( {field: { onChange, onBlur, value } } ) => (
                    <TextInput
                    maxLength={13}
                    style={[
                        stylesCadastro.inputT, {
                            borderWidth: errors.telefone && 1,
                            borderColor: errors.telefone && '#ff375b'
                        }
                    ]}
                    onChangeText={whats}
                    onBlur={onBlur} // chamado qunado o textInput é tocado
                    value={whatsapp}
                    placeholder="+99(99)999999999"
                    />
                )}
            />
            </View> */}

            <Text style={stylesCadastro.labels}>Email</Text>
            <Controller 
                control={control}
                name="email"
                render={( {field: { onChange, onBlur, value } } ) => (
                    <TextInput 
                    style={[
                        stylesCadastro.input, {
                            borderWidth: errors.email && 1,
                            borderColor: errors.email && '#ff375b'
                        }
                    ]}
                    onChangeText={setEmail}
                    onBlur={onBlur} // chamado qunado o textInput é tocado
                    value={email}
                    placeholder="exemplo@gmail.com"
                    />
                )}
            />
            {/* {errors.email && <Text style={stylesCadastro.labelError}>{errors.email?.message}</Text>} */}

            {/* Olhar o user storie no teams para fazer os itens comentados abaixo */}
            
            <View style={stylesCadastro.checkBox}>
                <Text style={{fontSize: 25, marginTop: 15, marginLeft: 12}}>Dias para entrega:</Text>
                <CheckBox options={diasDeEntrega} onChange={(op: any)=>setDias(op)} multiple/>
            </View>

            {/* horário para entregar (HH:MM) */}

            {/* Preferência de contato (list, possivelmente um select) */}
            <View style={stylesCadastro.checkBox}>
                <Text style={{fontSize: 25, marginTop: 15, marginLeft: 12}}>Preferência de contato:</Text>
                <CheckBox options={preferencias} onChange={(op: React.SetStateAction<string>)=>setPreferencia(op)}/>
            </View>

            {/* Tipo de estabelecimento (radio button) */}
            
            <View style={stylesCadastro.radioButton}>
                <Text style={{fontSize: 25, marginTop: 15, marginLeft: 12}}>Tipo de estabelecimento:</Text>
                <View style={stylesCadastro.radio}>
                    <RadioButton options={tipoEstabelecimento} onChange={(op: any) => setEstabelecimento(op)}/>
                </View>
            </View>

            {/* Entrega rastreável (booleano / toogle) */}
            
            <Text style={{fontSize: 25, marginTop: 15, alignSelf: 'flex-start', marginLeft: 20}}>Entrega rastreável?</Text>
            <View style={stylesCadastro.switch}>
                    <Text style={{fontSize: 20, marginTop: 7, marginLeft: 12}}>{ligado ? 'Sim' : 'Não'}</Text>
                    <Switch
                        trackColor={{true: '#3ebd93'}}
                        thumbColor={ligado ? 'green' : 'gray'}
                        value={ligado}
                        onValueChange={toggleLigado}
                        style={{alignSelf: 'flex-start'}}
                        onChange={() => entregaRastreavel(ligado)}
                    />
            </View>
                    
            <View style={stylesCadastro.radioButton}>
                <Text style={{fontSize: 25, marginTop: 15, marginLeft: 12}}>Status:</Text>
                <View style={stylesCadastro.radio}>
                    <RadioButtonT options={statusCli} onChange={(op: any) => setStatus(op)}/>
                </View>
            </View>

            <CustomButton 
                style={stylesCadastro.button}
                titleStyle={stylesCadastro.titleButton}
                title={'Cadastrar cliente'} 
                onClick={()=>handleNew()}
            />
        </View>
        </ScrollView>
        </SafeAreaView>
    )}