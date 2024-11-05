import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = ({ route, navigate }) => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();

    const { userData } = route.params || {};
    console.log(userData)

    const handlePress = (screenName) => {
        navigation.navigate(screenName, { userData });
    };
    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <Image
                    source={require('../../../res/img/perfil.png')}
                    style={styles.profileImage}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={() => handlePress('Editar Informações')}>
                <Text style={styles.buttonText}>Editar Informações</Text>
            </TouchableOpacity>
            
            <TextInput style={styles.InputStyle}
                placeholder={userData.nome}
                placeholderTextColor={'black'}
                onChangeText={setNome}
                value={nome}
            />
            <TextInput style={styles.InputStyle}
                placeholder={userData.sobrenome}
                placeholderTextColor={'black'}
                onChangeText={setSobrenome}
                value={sobrenome}
            />
            <TextInput style={styles.InputStyle}
                placeholder={userData.email}
                placeholderTextColor={'black'}
                onChangeText={setEmail}
                value={email}
            />
            <TextInput style={styles.InputStyle}
                placeholder={userData.senha}
                placeholderTextColor={'black'}
                onChangeText={setSenha}
                value={senha}
            />
            
            <TouchableOpacity style={styles.button2} onPress={() => handlePress('Reserva')}>
                <Text style={styles.buttonText}>Reservas</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#EDE6DB',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20
    },
    avatar: {
        alignItems: 'center',
        marginBottom: 20,
    },
    infoContainer: {
        marginVertical: 20,
    },
    button: {
        backgroundColor: '#EDE6DB',
        padding: 10,
        marginTop: 10,
        alignItems: 'center',
        width: 200,
    },
    button2: {
        backgroundColor: '#EDE6DB',
        padding: 10,
        marginTop: 10,
        alignItems: 'center',
        width: 90,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 20,
    },
    InputStyle: {
        width: '70%',
        marginTop: 15,
        backgroundColor: '#E3CFAF',
        borderWidth: 2,
        borderColor: '#E3CFAF',
        borderRadius: 10,
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
    },
});

export default ProfileScreen;