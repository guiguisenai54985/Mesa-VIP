
import React, { useRef } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView, Animated } from 'react-native';

const sampleNews = [
  {
    image: 'https://img.freepik.com/premium-vector/restaurant-menu-design_12454-6730.jpg?w=740',
  },
  {
    image: 'https://img.freepik.com/premium-vector/view-city-from-window-with-view-city_1250126-8379.jpg?w=740',
  },
  {
    image: 'https://img.freepik.com/premium-vector/diverse-array-fresh-fruits-vegetables-displayed-wooden-crates-rustic-wooden-background_597121-40768.jpg?w=740',
  },
  {
    image: 'https://img.freepik.com/premium-vector/couple-having-dinner-restaurant-lovers-different-races-have-lunch_88272-4212.jpg?w=900',
  },
];

const PaginaHome = ({ route, navigation }) => {
  const { userData } = route.params || {};
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePress = (screenName) => {
    navigation.navigate(screenName, { userData });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handlePress('Perfil')}>
          <Image
            source={require('../../../res/img/icon.png')}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

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
    margin: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  logo: {
    width: '80%',
    height: '80%',
    borderRadius: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#E3CFAF',
    borderBottomWidth: 1,
    borderBottomColor: '#CFCFCF',
  },
  profileImage: {
    width: 40,
    height: 45,
    borderRadius: 5,
  },
});

export default PaginaHome;
