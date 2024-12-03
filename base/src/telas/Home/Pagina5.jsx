import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, Platform, Alert, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Pagina5 = ({ route, navigation }) => {
  const { nomeInicial, numPessoasInicial, telefoneInicial, dataInicial, horarioInicial } = route.params || {};

  const [dataSelecionada, setDataSelecionada] = useState(dataInicial || '');
  const [mostrarDatePicker, setMostrarDatePicker] = useState(false);
  const [nome, setNome] = useState(nomeInicial || '');
  const [numPessoas, setNumPessoas] = useState(numPessoasInicial || '');
  const [telefone, setTelefone] = useState(telefoneInicial || '');
  const [horarioSelecionado, setHorarioSelecionado] = useState(horarioInicial || null);

  useEffect(() => {
    setDataSelecionada(dataInicial || '');
    setNome(nomeInicial || '');
    setNumPessoas(numPessoasInicial || '');
    setTelefone(telefoneInicial || '');
    setHorarioSelecionado(horarioInicial || null);
  }, [dataInicial, nomeInicial, numPessoasInicial, telefoneInicial, horarioInicial]);

  const aoMudarData = (evento, data) => {
    setMostrarDatePicker(false);
    if (data) {
      setDataSelecionada(data.toISOString().split('T')[0]);
    }
  };

  const aoClicarHorario = (horario) => {
    setHorarioSelecionado(horario);
    Alert.alert('Horário', `Horário ${horario} selecionado!`);
  };

  const aoMudarNumPessoas = (valor) => {
    const num = parseInt(valor);
    if (num > 10) {
      Alert.alert('Limite excedido', 'O limite de pessoas para este restaurante é de 10.');
    } else {
      setNumPessoas(valor);
    }
  };

  const aoEnviar = () => {
    if (!nome || !numPessoas || !telefone || !dataSelecionada || !horarioSelecionado) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos e selecione um horário.');
      return;
    }

    // Enviando os dados para a página de confirmação
    navigation.navigate('Confirmation5', {
      name: nome,
      numPeople: numPessoas,
      phone: telefone,
      selectedDate: dataSelecionada,
      selectedTime: horarioSelecionado,
    });

    Alert.alert('Sucesso', 'Reserva realizada com sucesso!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.mainContent}>
          <View style={styles.circleBackgroundContainer}>
            <View style={styles.circleContainer}>
              {['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'].map((horario, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={styles.circle} 
                  onPress={() => aoClicarHorario(horario)}
                >
                  <Text style={styles.circleText}>{horario}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>📝</Text>
            <TextInput placeholder="Nome Completo" style={styles.input} value={nome} onChangeText={setNome} />
            <TextInput placeholder="Número de Pessoas" keyboardType="numeric" style={styles.input} value={numPessoas} onChangeText={aoMudarNumPessoas} />
            <TextInput placeholder="Telefone" keyboardType="phone-pad" style={styles.input} value={telefone} onChangeText={setTelefone} />
            <TouchableOpacity onPress={() => setMostrarDatePicker(true)}>
              <TextInput 
                placeholder="Data de Reserva" 
                style={styles.input} 
                value={dataSelecionada}
                editable={false}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.submitButton} onPress={aoEnviar}>
              <Text style={styles.submitButtonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
          {mostrarDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date()}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={aoMudarData}
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

export default Pagina5;
