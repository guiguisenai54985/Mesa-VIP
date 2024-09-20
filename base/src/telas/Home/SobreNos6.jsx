import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking, Image } from 'react-native';

const SobreNos6 = ({ navigation }) => {
  const aoPressionarTelefone = () => {
    Linking.openURL(`tel:${'+5511988888888'}`); 
  };

  const aoPressionarEmail = () => {
    Linking.openURL('mailto:contato@imperiocerveja.com'); 
  };

  const aoPressionarLocalizacao = () => {
    const latitude = -23.562000;
    const longitude = -46.655000;
    const label = 'Império Cerveja';
    const url = `geo:${latitude},${longitude}?q=${label}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/564x/83/fc/7c/83fc7c515f74b2d55af7a070ce843e67.jpg' }} 
        style={estilos.imagem}
      />
      <Text style={estilos.titulo}>Império Cerveja</Text>

      <Text style={estilos.descricao}>
        No Império Cerveja, oferecemos uma ampla variedade de cervejas artesanais e pratos deliciosos que combinam perfeitamente com cada gole.
        Venha desfrutar de um ambiente acolhedor e apreciar o melhor da cultura cervejeira.
      </Text>

      <Text style={estilos.tituloSecao}>Horário de Funcionamento</Text>
      <Text style={estilos.textoInfo}>Segunda a Quinta: 16:00 - 23:00</Text>
      <Text style={estilos.textoInfo}>Sexta e Sábado: 16:00 - 01:00</Text>
      <Text style={estilos.textoInfo}>Domingo: 12:00 - 22:00</Text>

      <Text style={estilos.tituloSecao}>Localização</Text>
      <Text style={estilos.textoInfo}>Rua das Cervejas, 456, São Paulo, SP</Text>
      <TouchableOpacity style={estilos.botao} onPress={aoPressionarLocalizacao}>
        <Text style={estilos.textoBotao}>Ver no mapa</Text>
      </TouchableOpacity>

      <Text style={estilos.tituloSecao}>Contato</Text>
      <Text style={estilos.textoInfo}>Telefone: +55 (11) 98888-8888</Text>
      <TouchableOpacity style={estilos.botao} onPress={aoPressionarTelefone}>
        <Text style={estilos.textoBotao}>Ligar</Text>
      </TouchableOpacity>

      <Text style={estilos.textoInfo}>E-mail: contato@imperiocerveja.com</Text>
      <TouchableOpacity style={estilos.botao} onPress={aoPressionarEmail}>
        <Text style={estilos.textoBotao}>Enviar e-mail</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={estilos.botao} 
        onPress={() => navigation.navigate('Pagina')}
      >
        <Text style={estilos.textoBotao}>Fazer Reserva</Text>
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

export default SobreNos6;
