import React from "react";
import { StatusBar, SafeAreaView, View, ScrollView, Alert, KeyboardAvoidingView, StyleSheet } from "react-native";
import { useState } from "react";
import { Text, } from '@rneui/themed';
import { Button } from '@rneui/themed';
import { Input } from '@rneui/themed';
import axios from 'axios';

export default function Cadastro({ navigation }) {
  const [mensagem, setMensagem] = useState('')
  const [formData, setFormData] = useState({
    id: '',
    email: '',
    nome: '',
    sobrenome: '',
    senha: '',
    imagem: ''
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  //validar se campos estão vazios

  const handleCadastrar = async () => {
    if (!formData.email || !formData.nome || !formData.sobrenome || !formData.senha) {
      setMensagem('Todos os campos são obrigatórios')
      return;
    }
    //envio de informações para a API cadastrar no banco de dados
    try {
      await axios.post('http://10.0.2.2:8085/api/cadastrouserhash', formData);
      Alert.alert('Cadastro realizado com sucesso');

      setFormData('');

      navigation.navigate('Login')
    }
    catch (error) {
      console.log(error)
      if (error.response.status === 401) {
        setMensagem('O email ' + formData.email + ' já existe no banco de dados')
      }
      else {
        console.log(error)
      }
    }
  };
  return (
    <SafeAreaView style={Styles.container}>

      <ScrollView>

        <View style={Styles.loginDiv}>
          <Text style={Styles.text1}>
            Registre-se
          </Text>
          <Text style={Styles.text2}>
            Registre-se para continuar
          </Text>

          <Input
            style={Styles.nomeStyle}
            placeholder='NOME:'
            placeholderTextColor={'black'}
            onChangeText={(text) => handleInputChange('nome', text)}
            value={formData.nome}

          />

          <Input
            style={Styles.sobrenomeStyle}
            placeholder='SOBRENOME:'
            placeholderTextColor={'black'}
            onChangeText={(text) => handleInputChange('sobrenome', text)}
            value={formData.sobrenome}

          />

          <Input
            style={Styles.emailStyle}
            placeholder='EMAIL:'
            placeholderTextColor={'black'}
            onChangeText={(text) => handleInputChange('email', text.toLowerCase())}
            value={formData.email}
          />

          <Input
            style={Styles.senhaStyle}
            placeholder='SENHA:' placeholderTextColor={'black'}
            onChangeText={(text) => handleInputChange('senha', text)}
            value={formData.senha}
          />

          <View style={Styles.containerStyleBtn}>
            <Button
              title="Registrar-se"
              loading={false}
              loadingProps={{ size: 'small', color: 'black' }}
              buttonStyle={Styles.buttonStyle}
              titleStyle={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}
              onPress={handleCadastrar}
            />
            {mensagem ? <Text style={Styles.mensagem}>{mensagem}</Text> : null}

          </View>

          <View style={Styles.btmTextView}>
            <Text style={Styles.textBottom}>Já tem uma conta?</Text>
            <Button
              title="Entre"
              loading={false}
              loadingProps={{ size: 'small', color: 'black' }}
              buttonStyle={Styles.textBTM}
              titleStyle={{ color: '#00B0FB', fontWeight: 'bold', fontSize: 14, }}
              onPress={() => navigation.navigate('Login')}
            />

          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  );

}
const Styles = StyleSheet.create({
  //fundo
  container: {
    height: 500,
    flex: 1,
    backgroundColor: '#EDE6DB',
  },

  //registra-se
  h1Style: {
    fontFamily: 'Nunito-SemiBold',
    fontWeight: '800',
    fontSize: 25,
    color: 'black',
  },

  title: {
    marginVertical: 10,
    alignItems: 'center',
  },

  text1: {
    fontFamily: 'Nunito-SemiBold',
    fontWeight: '800',
    fontSize: 35,
    color: 'black',
  },
  text2: {
    marginHorizontal: 2,
    fontFamily: 'Nunito-SemiBold',
    fontWeight: '800',
    fontSize: 14,
    color: 'black',
  },

  loginDiv: {
    marginVertical: 50,
    marginHorizontal: 20,
  },

  //form
  nomeStyle: {
    marginVertical: 10,
    backgroundColor: '#E3CFAF',
    borderWidth: 2,
    borderColor: '#E3CFAF',
    borderRadius: 10,
    fontSize: 11,
    color: '#000000',
    fontWeight: 'bold',
  },
  sobrenomeStyle: {
    marginVertical: -10,
    backgroundColor: '#E3CFAF',
    borderWidth: 2,
    borderColor: '#E3CFAF',
    borderRadius: 10,
    fontSize: 11,
    color: '#000000',
    fontWeight: 'bold',
  },

  containerStyleBtn: {
    alignItens: 'center',
    marginHorizontal: 80,
    height: 60,
    width: 220,
    marginVertical: 10,
  },

  buttonStyle: {
    alignItens: 'center',
    backgroundColor: '#E3CFAF',
    borderRadius: 14,
  },


  btmTextView: {
    marginHorizontal: 70,
    marginTop: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBottom: {
    position: '',
    color: 'black',
    fontWeight: 'bold'
  },

  textBTM: {
    backgroundColor: 'black',
  },

  emailStyle: {
    marginVertical: 10,
    backgroundColor: '#E3CFAF',
    borderWidth: 2,
    borderColor: '#E3CFAF',
    borderRadius: 10,
    fontSize: 11,
    color: '#000000',
    fontWeight: 'bold',
  },

  senhaStyle: {
    marginVertical: -10,
    backgroundColor: '#E3CFAF',
    borderWidth: 2,
    borderColor: '#E3CFAF',
    borderRadius: 10,
    fontSize: 11,
    color: '#000000',
    fontWeight: 'bold',
  },

  mensagem: {

    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },

  btmTextView: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //já tem uma conta
  textBottom: {
    color: 'black',
    fontWeight: 'bold'
  },

  textBTM: {
    backgroundColor: '#EDE6DB',
  }
});