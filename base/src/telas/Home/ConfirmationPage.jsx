import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native';

const ConfirmationPage = ({ route, navigation }) => {
  const { name, numPeople, phone, selectedDate, selectedTime, registrationTime } = route.params;

  const handleEditPress = () => {
    navigation.navigate('Pagina'); 
  };

  const handleContinuePress = () => {
    Alert.alert('Informações salvas com sucesso');
    navigation.navigate('ComprovantePage', {
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
        <Text style={styles.info}>Horario do cadastro: 08:30</Text>
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
          <Image source={{ uri: 'https://i.pinimg.com/736x/2b/e0/70/2be070690890838a7521d5860039814d.jpg' }} style={styles.logo} />
          <Image source={{ uri: 'https://i.pinimg.com/564x/01/df/b0/01dfb09a43f77e14aaab362440ea6201.jpg' }} style={styles.logo} />
          <Image source={{ uri: 'https://i.pinimg.com/564x/8f/95/b0/8f95b0d78273dcaffffa96427993e163.jpg' }} style={styles.logo} />
        </View>
        <Text style={styles.footerText}> 𝐄𝐬𝐭𝐚𝐦𝐨𝐬 𝐚𝐧𝐬𝐢𝐨𝐬𝐨𝐬 𝐩𝐚𝐫𝐚 𝐫𝐞𝐜𝐞𝐛𝐞̂-𝐥𝐨!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF200',
    justifyContent: 'center',
    padding: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    backgroundColor: '#FFC1C1', 
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#000',
  },
  info: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 30,
  },
  editButton: {
    flex: 1,
    marginRight: 5,
    padding: 12,
    backgroundColor: '#FF5252',
    borderRadius: 10,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  continueButton: {
    flex: 1,
    marginLeft: 5,
    padding: 12,
    backgroundColor: '#FF5252',
    borderRadius: 10,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
    marginTop: 10,
    backgroundColor: '#FFF200',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  footerText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#000',
    marginTop: 10,
  },
});

export default ConfirmationPage;