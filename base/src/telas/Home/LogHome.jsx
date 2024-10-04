import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, View, Image } from "react-native";
import { Text, } from '@rneui/themed';
import { Button } from '@rneui/themed';
import Cadastro from './Cadastro';
import Login from './Login';

const LogHome = ({ navigation }) => {

    return (

        <SafeAreaView style={Styles.container}>
            <Image source={require('../../../res/img/MesaVIP/imagens.png')} /> 
            <View style={Styles.containerStyle}>
                <Button
                    title="REGISTRE-SE"
                    buttonStyle={Styles.buttonStyles}
                    titleStyle={{
                        fontWeight: 'bold',
                        color: 'black', fontSize: 13,
                    }}
                    onPress={() => navigation.navigate(Signin)}
                />
                <Button
                    title="ENTRAR"
                    buttonStyle={Styles.button2Styles}
                    titleStyle={{ fontWeight: 'bold', color: 'black', fontSize: 13 }}
                    onPress={() => navigation.navigate(Login)}
                />
            </View>



        </SafeAreaView>

    );

}

const Styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#EDE6DB',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    h1Style: {
      fontFamily: 'Nunito-SemiBold',
      fontWeight: '800',
      fontSize: 35,
      color: 'black',
    },
  
    buttonStyles: {
      backgroundColor: '#E3CFAF',
      borderWidth: 2,
      borderColor: '#E3CFAF',
      borderRadius: 40,
    },
    button2Styles: {
      backgroundColor: '#E3CFAF',
      borderWidth: 2,
      borderColor: '#E3CFAF',
      borderRadius: 30,
      marginVertical: 10,
    },
  
    containerStyle: {
      position: 'absolute',
      bottom: 0,
      width: 275,
      marginHorizontal: 50,
  
    },
  
  });
export default LogHome

