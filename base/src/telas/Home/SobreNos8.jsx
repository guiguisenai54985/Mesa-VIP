import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking, Image } from 'react-native';

const SobreNos8 = ({ navigation }) => {
  const aoPressionarTelefone = () => {
    Linking.openURL(`tel:${'+5511996666666'}`); 
  };

  const aoPressionarEmail = () => {
    Linking.openURL('mailto:contato@fastfood.com'); 
  };

  const aoPressionarLocalizacao = () => {
    const latitude = -23.550520;
    const longitude = -46.633308;
    const label = 'Fast Food';
    const url = `geo:${latitude},${longitude}?q=${label}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/564x/1e/e4/1d/1ee41d069e6851b3d4e5a8198859a6ab.jpg' }} 
        style={estilos.imagem}
      />
      <Text style={estilos.titulo}>Fast Food</Text>

      <Text style={estilos.descricao}>
        No Fast Food, oferecemos uma variedade deliciosa de hambúrgueres, batatas fritas e refrigerantes. 
        Perfeito para quem busca uma refeição rápida e saborosa!
      </Text>

      <Text style={estilos.tituloSecao}>Horário de Funcionamento</Text>
      <Text style={estilos.textoInfo}>Todos os dias: 10:00 - 23:00</Text>

      <Text style={estilos.tituloSecao}>Localização</Text>
      <Text style={estilos.textoInfo}>Av. Rápida, 789, São Paulo, SP</Text>
      <TouchableOpacity style={estilos.botao} onPress={aoPressionarLocalizacao}>
        <Text style={estilos.textoBotao}>Ver no mapa</Text>
      </TouchableOpacity>

      <Text style={estilos.tituloSecao}>Contato</Text>
      <Text style={estilos.textoInfo}>Telefone: +55 (11) 96666-6666</Text>
      <TouchableOpacity style={estilos.botao} onPress={aoPressionarTelefone}>
        <Text style={estilos.textoBotao}>Ligar</Text>
      </TouchableOpacity>

      <Text style={estilos.textoInfo}>E-mail: contato@fastfood.com</Text>
      <TouchableOpacity style={estilos.botao} onPress={aoPressionarEmail}>
        <Text style={estilos.textoBotao}>Enviar e-mail</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={estilos.botao} 
        onPress={() => navigation.navigate('Pagina8')}
      >
        <Text style={estilos.textoBotao}>Fazer Pedido</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  descricao: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  tituloSecao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  textoInfo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#89847C',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoHome: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#6A6760',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  textoBotaoHome: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SobreNos8;
