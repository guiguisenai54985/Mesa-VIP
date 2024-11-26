import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const SobreNos3 = () => {
  const navigation = useNavigation(); // navegação

  const aoPressionarLocalizacao = () => {
    const latitude = -23.550520;
    const longitude = -46.633308;
    const label = 'Restaurante Gourmet';
    const url = `geo:${latitude},${longitude}?q=${label}`;
    Linking.openURL(url);
  };

  const aoPressionarMaps = () => {
    const latitude = -23.550520;
    const longitude = -46.633308;
    const label = 'Restaurante Gourmet';
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  const aoPressionarTelefone = () => {
    Linking.openURL(`tel:${'+5511999999999'}`);
  };

  const aoPressionarEmail = () => {
    const email = 'contato@restaurantegourmet.com'; 
    const subject = 'Contato';
    const body = 'Olá, gostaria de saber mais sobre...';
    Linking.openURL(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  return (
    <ScrollView style={estilos.container}>
      
      <Image 
        source={{ uri: 'https://img.freepik.com/premium-vector/succulent-grilled-chicken-caesar-salad-tantalizing-blend-flavors-warm-inviting-ambiance_597121-40261.jpg?w=740' }} 
        style={estilos.imagem} 
      />
      
      <Text style={estilos.textoSobreResto}>
      Aqui você encontrará uma variedade de pratos elaborados com carinho, em um clima acolhedor. Venha desfrutar de momentos agradáveis e sabores inesquecíveis!
      </Text>

      <View style={[estilos.containerAcao, { backgroundColor: '#FFCCBC' }]}>
        <TouchableOpacity onPress={aoPressionarLocalizacao} style={estilos.botao}>
          <Icon name="location-on" size={30} color="#BF360C" />
          <Text style={estilos.textoBotao}>Localização</Text>
        </TouchableOpacity>
      </View>

      <View style={[estilos.containerAcao, { backgroundColor: '#BBDEFB' }]}>
        <TouchableOpacity onPress={aoPressionarMaps} style={estilos.botao}>
          <Icon name="map" size={30} color="#0D47A1" />
          <Text style={estilos.textoBotao}>Ver no Google Maps</Text>
        </TouchableOpacity>
      </View>

      <View style={[estilos.containerAcao, { backgroundColor: '#C8E6C9' }]}>
        <TouchableOpacity onPress={aoPressionarTelefone} style={estilos.botao}>
          <Icon name="phone" size={30} color="#1B5E20" />
          <Text style={estilos.textoBotao}>Telefone</Text>
        </TouchableOpacity>
      </View>

      <View style={[estilos.containerAcao, { backgroundColor: '#E1BEE7' }]}>
        <TouchableOpacity onPress={aoPressionarEmail} style={estilos.botao}>
          <Icon name="email" size={30} color="#880E4F" />
          <Text style={estilos.textoBotao}>E-mail</Text>
        </TouchableOpacity>
      </View>

      {/* Barra de Navegação  */}
      <View style={estilos.bottomNav}>
        <TouchableOpacity style={estilos.navButton} onPress={() => navigation.navigate('PaginaHome')}>
          <Icon name="home" size={24} color="#000" />
          <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.navButton} onPress={() => navigation.navigate('Pagina')}>
          <Icon name="add-circle" size={24} color="#000" />
          <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.navButton}>
          <Icon name="cart" size={24} color="#000" />
          <Text></Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFF200',
  },
  imagem: {
    width: '100%',
    height: 150,
    marginBottom: 20,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  textoSobreResto: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  containerAcao: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textoBotao: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF200',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#DDD',
  },
  navButton: {
    alignItems: 'center',
  },
});

export default SobreNos3;