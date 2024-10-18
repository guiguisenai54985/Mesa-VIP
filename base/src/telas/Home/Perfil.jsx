import React, { useEffect, useState } from 'react';
import { View, Text, Alert, Image, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import axios from 'axios';
import { Button, TextInput } from 'react-native-paper';
import { Input } from '@rneui/themed';

const ResetInfo = ({ navigation, route }) => {
    const [user, setUser] = useState({});
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const { userData } = route.params;

    const getUser = async () => {
        const {data} = await axios.get(`http://10.0.2.2:8085/api/read/${userData.id}`)
        setUser(data[0]);
    }

    const handleTrocarInfo = async () => {
        try {
            //verificar se as senhas coincidem
            // const data = {
            //     nome: nome,
            //     sobrenome: sobrenome,
            //     email: email,
            //     id: id
            // }

            //fazer a solicitação para trocar a senha
            const response = await axios.post('http://10.0.2.2:8085/api/resetInfo', data);

            if (response.status === 200) {
                navigation.navigate('Login');
                Alert.alert("informações trocadas com sucesso");
            }
            else {
                Alert.alert('erro ao trocar as informações');
            }
        }
        catch (error) {
            Alert.alert('erro ao trocar aa informações', error);
        }
    };

    useEffect(() => {
        getUser();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Editar sua informações</Text>
            <Text>email: {user.email}</Text>
            <Text>id: {user.id}</Text>
            <Text>nome {user.nome}</Text>
            <Text>senha: {user.senha}</Text>
            <TextInput style={styles.EmailStyle}
                placeholder='DIGITE SEU NOVO NOME:'
                placeholderTextColor={'black'}
                onChangeText={setNome}
                value={nome}
            />

            <TextInput style={styles.EmailStyle}
                placeholder='DIGITE SEU NOVO SOBRENOME:'
                placeholderTextColor={'black'}
                onChangeText={setSobrenome}
            />

            <TextInput style={styles.EmailStyle}
                placeholder='CONFIRME SEU NOVO EMAIL:'
                placeholderTextColor={'black'}
                onChangeText={setEmail}
            />

            <View style={styles.containerBtn2}>
                <Button mode='outlined' textColor='black' style={styles.button2Styles} onPress={handleTrocarInfo}>
                    Editar informações
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#EDE6DB',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: 'black',
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#E3CFAF',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        color: 'red',
    },

    EmailStyle: {
        width: '95%',
        marginTop: 15,
        backgroundColor: '#E3CFAF',
        borderWidth: 2,
        borderColor: '#E3CFAF',
        borderRadius: 10,
        fontSize: 11,
        color: '#E3CFAF',
        fontWeight: 'bold',
    },
    senhaStyle: {
        marginVertical: -5,
        backgroundColor: '#E3CFAF',
        borderWidth: 2,
        borderColor: '#E3CFAF',
        borderRadius: 10,
        fontSize: 11,
        color: '#E3CFAF',
        fontWeight: 'bold',
    },
    button2Styles: {
        marginVertical: 30,
        width: 'auto',
        height: 'auto',
        borderWidth: 2,
        borderColor: '#E3CFAF',
        backgroundColor: '#E3CFAF',
        borderRadius: 15,
        marginVertical: 10,
    },
    containerBtn2: {
        marginVertical: 10,
    }
});

export default ResetInfo;