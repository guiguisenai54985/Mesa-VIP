import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking, Image } from 'react-native';

const SobreNos9 = ({ navigation }) => {
  const aoPressionarTelefone = () => {
    Linking.openURL(`tel:${'+5511995555555'}`); 
  };

  const aoPressionarEmail = () => {
    Linking.openURL('mailto:contato@churrasco.com'); 
  };

  const aoPressionarLocalizacao = () => {
    const latitude = -23.550520;
    const longitude = -46.633308;
    const label = 'Churrasco';
    const url = `geo:${latitude},${longitude}?q=${label}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/564x/b2/27/ba/b227ba67f95cc11322dab20bfc86f376.jpg' }} 
        style={estilos.imagem}
      />
      <Text style={estilos.titulo}>Churrasco</Text>

      <Text style={estilos.descricao}>
        No Churrasco, oferecemos as melhores carnes na brasa, acompanhadas de uma seleção de molhos e guarnições deliciosas. 
        Venha desfrutar de uma verdadeira experiência de churrasco!
      </Text>

      <Text style={estilos.tituloSecao}>Horário de Funcionamento</Text>
      <Text style={estilos.textoInfo}>Terça a Domingo: 12:00 - 22:00</Text>

      <Text style={estilos.tituloSecao}>Localização</Text>
      <Text style={estilos.textoInfo}>Rua do Churrasco, 456, São Paulo, SP</Text>
      <TouchableOpacity style={estilos.botao} onPress={aoPressionarLocalizacao}>
        <Text style={estilos.textoBotao}>Ver no mapa</Text>
      </TouchableOpacity>

      <Text style={estilos.tituloSecao}>Contato</Text>
      <Text style={estilos.textoInfo}>Telefone: +55 (11) 95555-5555</Text>
      <TouchableOpacity style={estilos.botao} onPress={aoPressionarTelefone}>
        <Text style={estilos.textoBotao}>Ligar</Text>
      </TouchableOpacity>

      <Text style={estilos.textoInfo}>E-mail: contato@churrasco.com</Text>
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

export default SobreNos9;
