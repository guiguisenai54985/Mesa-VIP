import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PaginaMelhorias = ({ navigation }) => {
  const voltarParaHome = () => {
    navigation.navigate('PaginaHome'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atenção!</Text>
      <Text style={styles.text}>
        Estamos realizando melhorias no nosso aplicativo de reserva de mesas. Em breve, o pagamento online será disponibilizado, tornando suas reservas mais rápidas e seguras.
      </Text>
      <Text style={styles.text}>
        Pedimos que fiquem atentos às próximas atualizações, pois novas funcionalidades como notificações em tempo real e integração com carteiras digitais também serão implementadas. 
      </Text>
      <Text style={styles.textWarning}>
        Por favor, fique atento durante esse período de transição. Agradecemos sua paciência enquanto trabalhamos para aprimorar sua experiência.
      </Text>

      {/* Botão "OK, Entendi" */}
      <TouchableOpacity style={styles.button} onPress={voltarParaHome}>
        <Text style={styles.buttonText}>OK, Entendi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF3CD', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#856404', 
    textTransform: 'uppercase',
    marginBottom: 20,
    letterSpacing: 1.5,
  },
  text: {
    fontSize: 18,
    color: '#856404', 
    textAlign: 'justify',
    lineHeight: 26,
    marginBottom: 20,
    paddingHorizontal: 15,
    backgroundColor: '#FFF', 
    paddingVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  textWarning: {
    fontSize: 18,
    color: '#721C24', 
    textAlign: 'center',
    backgroundColor: '#F8D7DA', 
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#856404', 
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#FFF', 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PaginaMelhorias;
