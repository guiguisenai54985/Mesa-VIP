import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking, Image } from 'react-native';

const SobreNos = ({ navigation }) => {
  const userData = {
    nomeInicial: 'Seu Nome',
    numPessoasInicial: '1',
    telefoneInicial: '+5511999999999',
    dataInicial: '',
    horarioInicial: ''
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
          onPress={() => navigation.navigate('Pagina', { userData })}
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
    backgroundColor: '#F9F9F9', // Fundo mais claro e contemporâneo
    alignItems: 'center',
  },
  imagem: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 0, // Remover borda para um visual mais limpo
    shadowColor: '#ccc',  // Leve sombra
    shadowOffset: {width: 0, height: 2}, // Offset
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  titulo: {
    fontSize: 28, // Aumentar tamanho do título
    fontWeight: '700', // Font-weight mais robusto
    color: '#2C3E50', // Azul escuro
    marginBottom: 10,
    textAlign: 'center',
  },
  descricao: {
    fontSize: 17,
    color: '#34495E', // Texto mais escuro 
    marginBottom: 20,
    textAlign: 'center',
  },
  tituloSecao: {
    fontSize: 22, // Aumentar título da seção
    fontWeight: '600', // Negrito moderado
    color: '#2980B9', // Tom de azul vibrante
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#BDC3C7', // Cor de borda mais clara
    paddingBottom: 5,
  },
  textoInfo: {
    fontSize: 16,
    color: '#7F8C8D', // Cinza para texto de informação
    marginBottom: 15,
    textAlign: 'center',
  },
  containerBotao: {
    borderWidth: 1,
    borderColor: '#DADAD9',  // Borda mais suave
    borderRadius: 10, // Bordas mais arredondadas
    marginBottom: 15,
    overflow: 'hidden',
    backgroundColor: '#fff', // Fundo branco para contraste
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 4, // Aumento da sombra em dispositivos Android
  },
  botao: {
    backgroundColor: '#8E44AD', // Tom de roxo moderno
    paddingVertical: 12, 
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18, // Tamanho de texto maior para os botões
    fontWeight: 'bold',
  },
});

export default SobreNos;
