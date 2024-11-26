import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native';

const reservations = [
  { restaurante: "O'batista", data: '10/11/2024', hora: '22:00' },
  { restaurante: "Pizzaria do João", data: '11/11/2024', hora: '19:30' },
  { restaurante: "Churrascaria Fogo de Chão", data: '12/11/2024', hora: '20:00' },
];

const Reserva = () => {
  const animatedValue = new Animated.Value(0);

  const fadeIn = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    fadeIn();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Restaurante</Text>
        <Text style={styles.headerText}>Data</Text>
        <Text style={styles.headerText}>Hora</Text>
      </View>
      <Animated.View style={{ opacity: animatedValue }}>
        <ScrollView>
          {reservations.map((reservation, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.cell}>{reservation.restaurante}</Text>
              <View style={styles.dateDeleteContainer}>
                <Text style={styles.cell}>{reservation.data}</Text>
                <TouchableOpacity>
                  <Text style={styles.deleteText}>Deletar</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.cell}>{reservation.hora}</Text>
            </View>
          ))}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF200', 
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#FF5252', 
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#000',
    borderRadius: 10, 
    shadowColor: '#000', // Sombra
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white', 
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    backgroundColor: '#FFC1C1', // Cor de fundo das linhas
    paddingVertical: 15,
    borderRadius: 10, // 
    marginVertical: 5, // Espaçamento das linhas
    shadowColor: '#000', // Sombra para as linhas
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'normal',
    color: 'black',
    fontSize: 15,
  },
  dateDeleteContainer: {
    flex: 1,
    alignItems: 'center',
  },
  deleteText: {
    color: '#FF5252', 
    marginTop: 5,
    fontWeight: 'bold',
    textDecorationLine: 'underline', // Sublinhado para o texto de deletar
  },
});

export default Reserva;