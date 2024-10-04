import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const ComprovantePage5 = ({ route, navigation }) => {
  const { name, numPeople, phone, selectedDate, selectedTime } = route.params;

  const handleSalvarPress = () => {
    Alert.alert(
      'Comprovante salvo com sucesso!',
      'Você será redirecionado para a página inicial.',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Home'),
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Comprovante de Reserva</Text>
      </View>
      <View style={styles.content}>
      <Text style={styles.info}>𝗛𝗼𝗿𝗮𝗿𝗶𝗼 𝗱𝗼 𝗰𝗮𝗱𝗮𝘀𝘁𝗿𝗼: 𝟬𝟴:𝟯𝟬</Text>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.info}>{name}</Text>
        <Text style={styles.label}>Número de pessoas:</Text>
        <Text style={styles.info}>{numPeople}</Text>
        <Text style={styles.label}>Telefone:</Text>
        <Text style={styles.info}>{phone}</Text>
        <Text style={styles.label}>Data:</Text>
        <Text style={styles.info}>{selectedDate}</Text>
        <Text style={styles.label}>Horário:</Text>
        <Text style={styles.info}>{selectedTime}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Obrigado por escolher nosso serviço!</Text>
        <TouchableOpacity style={styles.saveButton} onPress={handleSalvarPress}>
          <Text style={styles.saveButtonText}>Salvar Comprovante de Reserva</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    margin: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  content: {
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666666',
  },
  info: {
    fontSize: 18,
    marginVertical: 5,
    color: '#333333',
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  footerText: {
    fontSize: 16,
    color: '#666666',
  },
  saveButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ComprovantePage5;
