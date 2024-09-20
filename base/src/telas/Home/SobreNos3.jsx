import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking, Image } from 'react-native';

const SobreNos3 = ({ navigation }) => {
  const aoPressionarTelefone = () => {
    Linking.openURL(`tel:${'+5511977777777'}`); 
  };

  const aoPressionarEmail = () => {
    Linking.openURL('mailto:contato@hotdogexpress.com'); 
  };

  const aoPressionarLocalizacao = () => {
    const latitude = -23.561684;
    const longitude = -46.625378;
    const label = 'Hot Dog Express';
    const url = `geo:${latitude},${longitude}?q=${label}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/47/50/94/47509475c3e1618843bec399e87b13d8.jpg' }} 
        style={estilos.imagem}
      />
      <Text style={estilos.titulo}>Hot Dog Express</Text>

      <Text style={estilos.descricao}>
        No Hot Dog Express, você encontrará os melhores hot dogs da cidade, preparados com ingredientes de qualidade
        e combinações únicas. Nossa missão é transformar o clássico cachorro-quente em uma experiência gourmet.
      </Text>

      <Text style={estilos.tituloSecao}>Horário de Funcionamento</Text>
      <Text style={estilos.textoInfo}>Segunda a Sexta: 10:00 - 22:00</Text>
      <Text style={estilos.textoInfo}>Sábado: 11:00 - 23:00</Text>
      <Text style={estilos.textoInfo}>Domingo: 11:00 - 21:00</Text>

      <Text style={estilos.tituloSecao}>Localização</Text>
      <Text style={estilos.textoInfo}>Rua dos Hot Dogs, 456, São Paulo, SP</Text>
      <TouchableOpacity style={estilos.botao} onPress={aoPressionarLocalizacao}>
        <Text style={estilos.textoBotao}>Ver no mapa</Text>
      </TouchableOpacity>

      <Text style={estilos.tituloSecao}>Contato</Text>
      <Text style={estilos.textoInfo}>Telefone: +55 (11) 97777-7777</Text>
      <TouchableOpacity style={estilos.botao} onPress={aoPressionarTelefone}>
        <Text style={estilos.textoBotao}>Ligar</Text>
      </TouchableOpacity>

      <Text style={estilos.textoInfo}>E-mail: contato@hotdogexpress.com</Text>
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

export default SobreNos3;
