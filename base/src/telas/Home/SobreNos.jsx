import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking, Image } from 'react-native';

const SobreNos = ({ navigation, route }) => {
  const { userData } = route.params || {};
  const userDados = {
    nomeInicial: 'Seu Nome',
    numPessoasInicial: '1',
    telefoneInicial: '+5511999999999',
    dataInicial: '',
    horarioInicial: '',
    restauranteId: '1',
    id_user: userData.id
  };

  

  const aoPressionarTelefone = () => {
    Linking.openURL(`tel:${'+5511999999999'}`);
  };

  const aoPressionarEmail = () => {
    Linking.openURL('mailto:contato@restaurante.com');
  };

  const aoPressionarLocalizacao = () => {
    const latitude = -23.550520;
    const longitude = -46.633308;
    const label = 'Restaurante Gourmet';
    const url = `geo:${latitude},${longitude}?q=${label}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/564x/26/86/3c/26863c445d4cf5b16c5526d8fba341af.jpg' }} 
        style={estilos.imagem}
      />
      
      <Text style={estilos.titulo}>Restaurante Gourmet</Text>
      <Text style={estilos.descricao}>
        O Restaurante Gourmet oferece uma experiência culinária única com pratos elaborados por chefs renomados.
        Estamos localizados no coração da cidade e proporcionamos um ambiente aconchegante para você e sua família.
      </Text>
      
      <Text style={estilos.tituloSecao}>Localização</Text>
      <Text style={estilos.textoInfo}>Av. Paulista, 1234, São Paulo, SP</Text>
      <View style={estilos.containerBotao}>
        <TouchableOpacity style={estilos.botao} onPress={aoPressionarLocalizacao}>
          <Text style={estilos.textoBotao}>Ver no mapa</Text>
        </TouchableOpacity>
      </View>

      <Text style={estilos.tituloSecao}>Horário de Funcionamento</Text>
      <Text style={estilos.textoInfo}>Segunda a Sexta: 16:00 - 22:00</Text>

      <Text style={estilos.tituloSecao}>Contato</Text>
      <Text style={estilos.textoInfo}>Telefone: +55 (11) 99999-9999</Text>
      <View style={estilos.containerBotao}>
        <TouchableOpacity style={estilos.botao} onPress={aoPressionarTelefone}>
          <Text style={estilos.textoBotao}>Ligar</Text>
        </TouchableOpacity>
      </View>

      <Text style={estilos.textoInfo}>E-mail: contato@restaurante.com</Text>
      <View style={estilos.containerBotao}>
        <TouchableOpacity style={estilos.botao} onPress={aoPressionarEmail}>
          <Text style={estilos.textoBotao}>Enviar e-mail</Text>
        </TouchableOpacity>
      </View>

      <View style={estilos.containerBotao}>
        <TouchableOpacity 
          style={estilos.botao} 
          onPress={() => navigation.navigate('Pagina', { userDados })}
        >
          <Text style={estilos.textoBotao}>Fazer Reserva</Text>
        </TouchableOpacity>
      </View>
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

export default SobreNos;
