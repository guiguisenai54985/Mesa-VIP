import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, Platform, Alert, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Pagina = ({ route, navigation }) => {
  // Receber dados da reserva se existirem
  const { name: nomeInicial, numPeople: numeroPessoasInicial, phone: telefoneInicial, selectedDate: dataInicial, selectedTime: horaInicial } = route.params || {};

  const [dataSelecionada, setDataSelecionada] = useState(dataInicial || '');
  const [mostrarSeletorData, setMostrarSeletorData] = useState(false);
  const [nome, setNome] = useState(nomeInicial || '');
  const [numeroPessoas, setNumeroPessoas] = useState(numeroPessoasInicial || '');
  const [telefone, setTelefone] = useState(telefoneInicial || '');
  const [horaSelecionada, setHoraSelecionada] = useState(horaInicial || null);

  useEffect(() => {
    // Atualiza os estados se os parâmetros mudarem
    setDataSelecionada(dataInicial || '');
    setNome(nomeInicial || '');
    setNumeroPessoas(numeroPessoasInicial || '');
    setTelefone(telefoneInicial || '');
    setHoraSelecionada(horaInicial || null);
  }, [dataInicial, nomeInicial, numeroPessoasInicial, telefoneInicial, horaInicial]);

  const handleDateChange = (event, date) => {
    setMostrarSeletorData(false);
    if (date) {
      setDataSelecionada(date.toISOString().split('T')[0]); // data no formato YYYY-MM-DD
    }
  };

  const handleButtonClick = (time) => {
    setHoraSelecionada(time);
    Alert.alert('Horário', `Horário ${time} selecionado!`);
  };

  const handleSubmit = () => {
    if (!nome || !numeroPessoas || !telefone || !dataSelecionada || !horaSelecionada) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos e selecione um horário.');
      return;
    }
  
    
    navigation.navigate('ConfirmationPage', {
      name: nome,             
      numPeople: numeroPessoas, 
      phone: telefone,         
      selectedDate: dataSelecionada, 
      selectedTime: horaSelecionada, 
    });
  
    Alert.alert('Sucesso', 'Reserva realizada com sucesso!');
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.mainContent}>
          <View style={styles.circleBackgroundContainer}>
            <View style={styles.circleContainer}>
              {['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'].map((time, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={styles.circle} 
                  onPress={() => handleButtonClick(time)}
                >
                  <Text style={styles.circleText}>{time}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>📝</Text>
            <TextInput placeholder="Nome Completo" style={styles.input} value={nome} onChangeText={setNome} />
            <TextInput placeholder="Número de Pessoas" keyboardType="numeric" style={styles.input} value={numeroPessoas} onChangeText={setNumeroPessoas} />
            <TextInput placeholder="Telefone" keyboardType="phone-pad" style={styles.input} value={telefone} onChangeText={setTelefone} />
            <TouchableOpacity onPress={() => setMostrarSeletorData(true)}>
              <TextInput 
                placeholder="Data de Reserva" 
                style={styles.input} 
                value={dataSelecionada}
                editable={false}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
          {mostrarSeletorData && (
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date()}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={handleDateChange}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  circleBackgroundContainer: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: '#D3D3D3',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 30,
  },
  circleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 90,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#858078',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  circleText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%',
    maxWidth: 600,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#D3D3D3',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
    alignItems: 'center',
  },
  formTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    backgroundColor: '#F9F9F9',
  },
  submitButton: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#89847C',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Pagina;
