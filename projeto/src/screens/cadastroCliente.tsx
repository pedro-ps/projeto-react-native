import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import { CheckBox } from "@rneui/themed";
import { useForm, Controller} from 'react-hook-form';
import CustomButton from '../components/CustomButton';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import { Padding } from '@mui/icons-material';

const schema = yup.object({
    nome: yup.string().required("Informe o nome"),
    sobrenome: yup.string().required("Informe o sobrenome"),
    telefone: yup.string().required("Informe o telefone"),
    email: yup.string().email("Email inválido").required("Informe o email"),
    status: yup.string().required("Informe o status")
})

export function CadCliente() {
    const [isSelected1, setSelected1] = useState(false)
    const [isSelected2, setSelected2] = useState(false)
    const [isSelected3, setSelected3] = useState(false)
    const [isSelected4, setSelected4] = useState(false)
    const [isSelected5, setSelected5] = useState(false)

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    function cadastrar(data: any){
        console.log(data);
    }

    return (
        <SafeAreaView>
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}></Text>

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

            {/* dias para entrega (check-box) */}
            
            <View style={styles.days}>
                <Text style={{fontSize: 25, marginTop: 15}}>Dias para entrega</Text>
                <CheckBox
                    title="Segunda-feira"
                    /* checkedIcon="check" */
                    uncheckedIcon="square-o"
                    checkedColor="green"
                    /* uncheckedColor="red" */
                    checked={isSelected1}
                    onPress={() => setSelected1(!isSelected1)}
                    containerStyle={{
                        backgroundColor: 'transparent',
                        width: '100%',
                        marginLeft: '-.5%',
                    }}
                    size={30}
                />

                <CheckBox
                    title="Terça-feira"
                    /* checkedIcon="check" */
                    uncheckedIcon="square-o"
                    checkedColor="green"
                    /* uncheckedColor="red" */
                    checked={isSelected2}
                    onPress={() => setSelected2(!isSelected2)}
                    containerStyle={{
                        backgroundColor: 'transparent',
                        width: '100%',
                        marginLeft: '-.5%',
                    }}
                    size={30}
                />

                <CheckBox
                    title="Quarta-feira"
                    /* checkedIcon="check" */
                    uncheckedIcon="square-o"
                    checkedColor="green"
                    /* uncheckedColor="red" */
                    checked={isSelected3}
                    onPress={() => setSelected3(!isSelected3)}
                    containerStyle={{
                        backgroundColor: 'transparent',
                        width: '100%',
                        marginLeft: '-.5%',
                    }}
                    size={30}
                />

                <CheckBox
                    title="Quinta-feira"
                    /* checkedIcon="check" */
                    uncheckedIcon="square-o"
                    checkedColor="green"
                    /* uncheckedColor="red" */
                    checked={isSelected4}
                    onPress={() => setSelected4(!isSelected4)}
                    containerStyle={{
                        backgroundColor: 'transparent',
                        width: '100%',
                        marginLeft: '-.5%',
                    }}
                    size={30}
                />

                <CheckBox
                    title="Sexta-feira"
                    /* checkedIcon="check" */
                    uncheckedIcon="square-o"
                    checkedColor="green"
                    /* uncheckedColor="red" */
                    checked={isSelected5}
                    onPress={() => setSelected5(!isSelected5)}
                    containerStyle={{
                        backgroundColor: 'transparent',
                        width: '100%',
                        marginLeft: '-.5%',
                    }}
                    size={30}
                />
            </View>

            {/* horário para entregar (HH:MM) */}

            {/* Preferência de contato (list, possivelmente um select) */}

            {/* Tipo de estabelecimento (radio button) */}

            {/* Entrega rastreável (booleano / toogle) */}

            <Controller 
                control={control}
                name="status"
                render={( {field: { onChange, onBlur, value } } ) => (
                    <TextInput 
                    style={[
                        styles.input, {
                            borderWidth: errors.status && 1,
                            borderColor: errors.status && '#ff375b'
                        }
                    ]}
                    onChangeText={onChange}
                    onBlur={onBlur} // chamado qunado o textInput é tocado
                    value={value}
                    placeholder="Status"
                    />
                )}
            />
            {errors.status && <Text style={styles.labelError}>{errors.status?.message}</Text>}
            

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
    input:{
        backgroundColor: '#fff',
        height: 50,
        width: '95%',
        borderRadius: 3,
        marginTop: 20,
        fontSize: 16,
        paddingLeft: 10,
    },
    labelError:{
        alignSelf: 'flex-start',
        color: '#ff375b',
        marginBottom: 5,
        marginLeft: 10
    },
    days:{
        width: '95%',
        display: 'flex',
        margin: 0,
        padding: 0,
    },
    button:{
        backgroundColor: '#7cb518',
        height: 50,
        width: '95%',
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