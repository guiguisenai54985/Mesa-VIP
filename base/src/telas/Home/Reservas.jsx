import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

// const reservations = [
//   { restaurant: "O'batista", date: '10/11/2024', time: '22:00' },
//   { restaurant: "Pizzaria do João", date: '11/11/2024', time: '19:30' },
//   { restaurant: "Churrascaria Fogo de Chão", date: '12/11/2024', time: '20:00' },
// ];

const Reserva = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Restaurante</Text>
        <Text style={styles.headerText}>Data</Text>
        <Text style={styles.headerText}>Hora</Text>
      </View>
      <ScrollView>
        {/* {reservations.map((reservation, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{reservation.restaurant}</Text>
            <View style={styles.dateDeleteContainer}>
              <Text style={styles.cell}>{reservation.date}</Text>
              <TouchableOpacity>
                <Text style={styles.deleteText}>Deletar</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.cell}>{reservation.time}</Text>
          </View>
        ))} */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE6DB',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#EDE6DB',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    backgroundColor: '#EDE6DB',
    paddingVertical: 10,
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
    color: 'black',
    marginTop: 5,
    fontWeight: 'bold',
  },
});

export default Reserva;