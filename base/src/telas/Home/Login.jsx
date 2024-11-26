import React, { useState, useEffect } from "react";
import { StatusBar, SafeAreaView, View, Alert, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Text } from '@rneui/themed';
import { Button } from '@rneui/themed';
import { Input } from '@rneui/themed';
import axios from 'axios';

const Login = ({ navigation }) => {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const handleResetSenha = () => {
    navigation.navigate('Reset');
  }

  const handleLogin = async () => {
    try {
      if (!email || !senha) {
        Alert.alert('Preencha todos os campos');
        return;
      }

      const data = {
        email: email.toLowerCase(),
        senha: senha,
      };

      const response = await axios.post('http://10.0.2.2:8085/api/validatelogin', data);
      if (response.status === 201) {
        setEmail('');
        setSenha('');
        const userData = {
          id: response.data['0'].id,
          nome: response.data['0'].nome,
          sobrenome: response.data['0'].sobrenome,
          email: response.data['0'].email,
          senha: response.data['0'].senha,
        }
       navigation.navigate('Home', { userData });
      } else {
        Alert.alert('Email ou senha incorretos')
      }
    }
    catch (error) {
      if (error.response && error.response.status === 401) {
        Alert.alert('Email ou senha incorretos')
      } else {
        console.log(error)
        Alert.alert('Ocorreu um erro ao tentar fazer login')
      }
    };
  };

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar hidden />
      <ScrollView>
        <View style={Styles.loginDiv}>
          <Text style={Styles.text1}>
            LOG-IN
          </Text>
          <Text style={Styles.text2}>
            Entre para continuar
          </Text>
          <Input style={Styles.EmailStyle}
            placeholder='EMAIL:'
            placeholderTextColor={'black'}
            onChangeText={setEmail}
            value={email.toLowerCase()}
            keyboardType="email-address"
          />
          <Input
            style={Styles.senhaStyle}
            placeholder='SENHA:'
            placeholderTextColor={'black'}
            onChangeText={setSenha}
            value={senha}
            secureTextEntry
          />
          <View style={Styles.containerStyleBtn}>
            <Button
              title="ENTRAR"
              loading={false}
              loadingProps={{ size: 'small', color: 'black' }}
              buttonStyle={Styles.buttonStyle}
              titleStyle={{ fontWeight: 'bold', fontSize: 21, color: 'black' }}
              onPress={handleLogin}
            />
          </View>
          <TouchableOpacity onPress={handleResetSenha}>
            <Text style={Styles.resetSenha}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <View style={Styles.btmTextView}>
            <Text style={Styles.textBottom}>Não tem uma conta?</Text>
            <Button
              title="Crie uma"
              loading={false}
              loadingProps={{ size: 'small', color: 'black' }}
              buttonStyle={Styles.textBTM}
              titleStyle={{ color: '#00B0FB', fontWeight: 'bold', fontSize: 14 }}
              onPress={() => navigation.navigate('Cadastro')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF200', // Mudança para a cor de fundo da página inicial
  },

  text1: {
    fontFamily: 'Nunito-SemiBold',
    fontWeight: '800',
    fontSize: 35,
    color: '#000',
  },

  text2: {
    marginHorizontal: 2,
    fontFamily: 'Nunito-SemiBold',
    fontWeight: '800',
    fontSize: 14,
    color: '#000',
  },

  loginDiv: {
    marginVertical: 150,
    marginHorizontal: 20,
  },

  EmailStyle: {
    marginTop: 15,
    backgroundColor: '#FFFFFF', // Mudança para o tom coral
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    fontSize: 11,
    color: 'black',
    fontWeight: 'bold',
  },

  senhaStyle: {
    marginVertical: -5,
    backgroundColor: '#FFFFFF', // Mudança para o tom coral
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    fontSize: 11,
    color: '#000000',
    fontWeight: 'bold',
  },

  containerStyleBtn: {
    alignItems: 'center',
    marginHorizontal: 70,
    height: 70,
    width: 230,
    marginVertical: 10,
  },

  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Mudança para o tom coral
    borderRadius: 13,
  },

  btmTextView: {
    marginTop: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBottom: {
    color: 'black',
    fontWeight: 'bold'
  },

  textBTM: {
    backgroundColor: '#FFF200',
  },

  resetSenha: {
    marginTop: 10,
    color: 'black',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default Login;