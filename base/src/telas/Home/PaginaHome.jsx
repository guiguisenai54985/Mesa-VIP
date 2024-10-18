import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView, Button, Text } from 'react-native';

const sampleNews = [
  {
    image: 'https://i.pinimg.com/564x/3f/de/59/3fde59c1d9ae5d1285e4786be81b7152.jpg',
  },
  {
    image: 'https://i.pinimg.com/736x/18/2f/55/182f55abd1b3ab47c85bcb8abaa4c988.jpg',
  },
  {
    image: 'https://i.pinimg.com/564x/3d/46/74/3d467426e5ad3f306e8104b4a7df0cff.jpg',
  },
  {
    image: 'https://i.pinimg.com/564x/1f/0f/ee/1f0fee613c3000d6df53e7e1b52d7a84.jpg',
  },
];

const PaginaHome = ({ navigation }) => {
  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={sampleNews}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        style={styles.cardList}
      />
      <View style={styles.tabela}>
        <TouchableOpacity style={styles.roundBackground} onPress={() => handlePress('SobreNos')}>
          <Image
            source={require('../../../res/img/image1.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundBackground} onPress={() => handlePress('SobreNos2')}>
          <Image
            source={require('../../../res/img/image2.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundBackground} onPress={() => handlePress('SobreNos3')}>
          <Image
            source={require('../../../res/img/image3.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundBackground} onPress={() => handlePress('SobreNos4')}>
          <Image
            source={require('../../../res/img/image4.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundBackground} onPress={() => handlePress('SobreNos5')}>
          <Image
            source={require('../../../res/img/image5.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundBackground} onPress={() => handlePress('SobreNos6')}>
          <Image
            source={require('../../../res/img/image6.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundBackground} onPress={() => handlePress('SobreNos7')}>
          <Image
            source={require('../../../res/img/image7.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundBackground} onPress={() => handlePress('SobreNos8')}>
          <Image
            source={require('../../../res/img/image8.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundBackground} onPress={() => handlePress('SobreNos9')}>
          <Image
            source={require('../../../res/img/image9.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundBackground} onPress={() => handlePress('Perfil')}>
          <Text>Perfil</Text>
        </TouchableOpacity>
      </View>

      {/* Adicionando o botão de melhorias */}
      <View style={styles.containerBtn2}>
        <Button title="Melhorias" onPress={() => handlePress('PaginaMelhorias')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE6DB',
  },
  cardList: {
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#EDE6DB',
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  cardImage: {
    width: 250,
    height: 250,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tabela: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 50,
  },
  roundBackground: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E3CFAF',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  containerBtn2: {
    marginVertical: 10,
  },
});

export default PaginaHome;
