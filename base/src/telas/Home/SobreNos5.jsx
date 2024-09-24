import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking, Image } from 'react-native';

const SobreNos5 = ({ navigation }) => {
  const aoPressionarTelefone = () => {
    Linking.openURL(`tel:${'+5511966666666'}`); 
  };

  const aoPressionarEmail = () => {
    Linking.openURL('mailto:contato@foodrock.com'); 
  };

  const aoPressionarLocalizacao = () => {
    const latitude = -23.567890;
    const longitude = -46.654321;
    const label = 'Food Rock';
    const url = `geo:${latitude},${longitude}?q=${label}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/564x/09/2c/1b/092c1b5f5e8d3b6c652c1f63bb957b23.jpg' }} 
        style={estilos.imagem}
      />
      <Text style={estilos.titulo}>Food Rock</Text>

      <Text style={estilos.descricao}>
        No Food Rock, a música e a gastronomia se encontram! Oferecemos uma experiência única com pratos inspirados em 
        rock e cultura pop. Venha curtir uma boa refeição ao som de clássicos do rock!
      </Text>

      <Text style={estilos.tituloSecao}>Horário de Funcionamento</Text>
      <Text style={estilos.textoInfo}>Segunda a Sexta: 11:00 - 23:00</Text>
      <Text style={estilos.textoInfo}>Sábado: 12:00 - 00:00</Text>
      <Text style={estilos.textoInfo}>Domingo: 12:00 - 22:00</Text>

      <Text style={estilos.tituloSecao}>Localização</Text>
      <Text style={estilos.textoInfo}>Avenida do Rock, 1010, São Paulo, SP</Text>
      <TouchableOpacity style={estilos.botao} onPress={aoPressionarLocalizacao}>
        <Text style={estilos.textoBotao}>Ver no mapa</Text>
      </TouchableOpacity>

      <Text style={estilos.tituloSecao}>Contato</Text>
      <Text style={estilos.textoInfo}>Telefone: +55 (11) 96666-6666</Text>
      <TouchableOpacity style={estilos.botao} onPress={aoPressionarTelefone}>
        <Text style={estilos.textoBotao}>Ligar</Text>
      </TouchableOpacity>

      <Text style={estilos.textoInfo}>E-mail: contato@foodrock.com</Text>
      <TouchableOpacity style={estilos.botao} onPress={aoPressionarEmail}>
        <Text style={estilos.textoBotao}>Enviar e-mail</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={estilos.botao} 
        onPress={() => navigation.navigate('Pagina5')}
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

export default SobreNos5;
