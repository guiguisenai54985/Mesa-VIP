import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const reservations = [
  { restaurante: "O'batista", data: '10/11/2024', hora: '22:00', numero_pessoas: '2', telefone: '(11) 62647-1147' },
  { restaurante: "Pizzaria do João", data: '11/11/2024', hora: '19:30', numero_pessoas: '2', telefone: '(11) 82647-1147' },
  { restaurante: "Churrascaria Fogo de Chão", data: '12/11/2024', hora: '20:00', numero_pessoas: '2', telefone: '(11) 72647-1147' },
];

const Reserva = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Restaurante</Text>
        <Text style={styles.headerText}>Data</Text>
        <Text style={styles.headerText}>Hora</Text>
        <Text style={styles.headerText}>Número de pessoas</Text>
        <Text style={styles.headerText}>Telefone</Text>
      </View>
      <ScrollView>
        {reservations.map((reservation, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{reservation.restaurante}</Text>
            <Text style={styles.cell}>{reservation.data}</Text>
     
            <View style={styles.dateDeleteContainer}>

            <Text style={styles.cell}>{reservation.hora}</Text>
              <TouchableOpacity>
                <Text style={styles.deleteText}>Deletar</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.cell}>{reservation.numero_pessoas}</Text> 
            <Text style={styles.cell}>{reservation.telefone}</Text> 
          </View>
        ))}
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
    fontSize: 14,
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
    fontSize: 14,
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