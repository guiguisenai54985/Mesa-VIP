import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native';

const Confirmation7 = ({ route, navigation }) => {
  const { name, numPeople, phone, selectedDate, selectedTime } = route.params;

  const handleEditPress = () => {
    navigation.navigate('Pagina7'); 
  };

  //  exibir a mensagem de sucesso
  const handleContinuePress = () => {
    Alert.alert('Informações salvas com sucesso');
    navigation.navigate('ComprovantePage7', {
        name,
        numPeople,
        phone,
        selectedDate,
        selectedTime,
        registrationTime,
    });
};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>𝐑𝐄𝐒𝐄𝐑𝐕𝐀 𝐂𝐀𝐃𝐀𝐒𝐓𝐑𝐀𝐃𝐀!</Text>
        <Text style={styles.title}>𝐃𝐄𝐒𝐄𝐉𝐀 𝐂𝐎𝐍𝐓𝐈𝐍𝐔𝐀𝐑?</Text>
        <Text style={styles.info}>𝐍𝐨𝐦𝐞: {name}</Text>
        <Text style={styles.info}>𝐍𝐮𝐦𝐞𝐫𝐨 𝐝𝐞 𝐩𝐞𝐬𝐬𝐨𝐚𝐬: {numPeople}</Text>
        <Text style={styles.info}>𝐓𝐞𝐥𝐞𝐟𝐨𝐧𝐞: {phone}</Text>
        <Text style={styles.info}>𝐃𝐚𝐭𝐚: {selectedDate}</Text>
        <Text style={styles.info}>𝐇𝐨𝐫𝐚́𝐫𝐢𝐨: {selectedTime}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
            <Text style={styles.editButtonText}>Editar Reserva</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.continueButton} onPress={handleContinuePress}>
            <Text style={styles.continueButtonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.logoContainer}>
          
          <Image source={{ uri: 'https://i.pinimg.com/564x/2b/85/c3/2b85c3f5233135e68691667987a7a283.jpg' }} style={styles.logo} />
          <Image source={{ uri: 'https://i.pinimg.com/564x/69/b8/c3/69b8c346c6e120477a5965baa4765cc9.jpg' }} style={styles.logo} />
          <Image source={{ uri: 'https://i.pinimg.com/736x/62/d9/15/62d915f8cd6bf17c5aeb8636e252b1a5.jpg' }} style={styles.logo} />
        </View>
        <Text style={styles.footerText}>𝑭𝒓𝒊𝒕 𝒂𝒈𝒓𝒂𝒅𝒆𝒄𝒆 𝒑𝒐𝒓 𝒆𝒔𝒄𝒐𝒍𝒉𝒆𝒓 𝒏𝒐𝒔𝒔𝒐 𝒓𝒆𝒔𝒕𝒂𝒖𝒓𝒂𝒏𝒕𝒆. 𝑬𝒔𝒑𝒆𝒓𝒂𝒎𝒐𝒔 𝒒𝒖𝒆 𝒕𝒆𝒏𝒉𝒂 𝒖𝒎𝒂 𝒆𝒙𝒑𝒆𝒓𝒊𝒆̂𝒏𝒄𝒊𝒂 𝒊𝒏𝒄𝒓𝒊́𝒗𝒆𝒍! </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    padding: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    marginTop: 20,
  },
  editButton: {
    flex: 1,
    marginRight: 5,
    padding: 5,
    backgroundColor: '#89847C',
    borderRadius: 2,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  continueButton: {
    flex: 1,
    marginLeft: 2,
    padding: 10,
    backgroundColor: '#89847C',
    borderRadius: 2,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    width: '100%', 
    marginBottom: 10,
  },
  logo: {
    width: 120, 
    height: 120,
    resizeMode: 'contain',
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666666',
    marginTop: 10,
  },
});

export default Confirmation7;
