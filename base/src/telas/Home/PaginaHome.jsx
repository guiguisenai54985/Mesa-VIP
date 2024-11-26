import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PaginaHome = () => {
  const navigation = useNavigation();
  const [nomeUsuario, setNomeUsuario] = useState('');

  const itensMenu = [
    { id: '1', nome: 'Espanhol', imagem: 'https://img.freepik.com/premium-vector/print-label-vintage_1313902-591.jpg?w=740' },
    { id: '2', nome: 'Hot Dog Express', imagem: 'https://img.freepik.com/premium-vector/print-label-vintage_1313902-572.jpg?w=740' },
    { id: '3', nome: 'Rock Food', imagem: 'https://img.freepik.com/premium-vector/restaurant-design_24877-32744.jpg?w=740' },
    { id: '4', nome: 'Fast Food', imagem: 'https://img.freepik.com/free-vector/food-white-background_24908-61023.jpg?t=st=1732621394~exp=1732624994~hmac=0e2f922bb95be508a39fe4efc94227872dd92eb59240e8f669fa7f86063a8282&w=740' },
  ];

  //  armazenar o nome do restaurante
  const cadastrarRestaurante = async (nomeRestaurante) => {
    try {
      let restaurantes = await AsyncStorage.getItem('restaurantes');
      restaurantes = restaurantes ? JSON.parse(restaurantes) : [];
      
      // novo restaurante à lista
      restaurantes.push(nomeRestaurante);
      await AsyncStorage.setItem('restaurantes', JSON.stringify(restaurantes));
      console.log('Restaurante cadastrado:', nomeRestaurante);
    } catch (error) {
      console.error('Erro ao cadastrar restaurante:', error);
    }
  }

  const renderizarItemMenu = ({ item }) => (
    <View style={estilos.itemMenu}>
      <TouchableOpacity
        onPress={() => {
          cadastrarRestaurante(item.nome); 
          // Redireciona  a página correspondente
          if (item.id === '1') {
            navigation.navigate('SobreNos');  
          } else if (item.id === '2') {
            navigation.navigate('SobreNos2'); 
          } else if (item.id === '3') {
            navigation.navigate('SobreNos3'); 
          } else if (item.id === '4') {
            navigation.navigate('SobreNos4'); 
          }
        }}
      >
        <Image source={{ uri: item.imagem }} style={estilos.imagemMenu} />
        <Text style={estilos.textoMenu}>{item.nome}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={estilos.container}>
      {/* Barra de Pesquisa */}
      <View style={estilos.containerPesquisa}>
        <Icon name="search" size={24} color="#000" style={estilos.iconePesquisa} />
        <TextInput style={estilos.inputPesquisa} placeholder="Pesquisar" />
      </View>
      
      <View style={estilos.cabecalho}>
        <TouchableOpacity>
          <Text style={estilos.seta}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={estilos.tituloMenu}>{`Olá, ${nomeUsuario}`}</Text>
        <TouchableOpacity>
          <Text style={estilos.seta}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      {/* Grade do Menu */}
      <FlatList
        data={itensMenu}
        renderItem={renderizarItemMenu}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={estilos.listaMenu}
      />

      {/* Navegação Inferior */}
      <View style={estilos.navegacaoInferior}>
        <TouchableOpacity style={estilos.botaoNav} onPress={() => navigation.navigate('PaginaInicial')}>
          <Icon name="home" size={24} color="#000" />
          <Text>Início</Text>
        </TouchableOpacity>
      
        <TouchableOpacity 
          style={estilos.botaoNav} 
          onPress={() => navigation.navigate('PerfilUser')} 
        >
          <Icon name="person" size={24} color="#000" />
          <Text>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF200',
  },
  containerPesquisa: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  iconePesquisa: {
    marginRight: 10,
  },
  inputPesquisa: {
    backgroundColor: '#FFC1C1',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  seta: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  tituloMenu: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  listaMenu: {
    paddingHorizontal: 10,
  },
  itemMenu: {
    flex: 1,
    margin: 10,
    backgroundColor: '#FF5252',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
  },
  imagemMenu: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  textoMenu: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  navegacaoInferior: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF200',
    paddingVertical: 10,
    borderTopWidth: 1,
  },
  botaoNav: {
    alignItems: 'center',
  },
});

export default PaginaHome;