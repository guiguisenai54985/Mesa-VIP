import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//home
//import OnBoarding from "./src/telas/Home/OnBoarding";
import ConfirmationPage from "./src/telas/Home/ConfirmationPage";
import Confirmation2 from "./src/telas/Home/Confirmation2";
import Confirmation3 from "./src/telas/Home/Confirmation3";
import Confirmation4 from "./src/telas/Home/Confirmation4";
import ComprovantePage from "./src/telas/Home/ComprovantePage";
import ComprovantePage2 from "./src/telas/Home/ComprovantePage2";
import ComprovantePage3 from "./src/telas/Home/ComprovantePage3";
import ComprovantePage4 from "./src/telas/Home/ComprovantePage4";
import Pagina from "./src/telas/Home/Pagina";
import Pagina2 from "./src/telas/Home/Pagina2";
import Pagina3 from "./src/telas/Home/Pagina3";
import Pagina4 from "./src/telas/Home/Pagina4";
import SobreNos from "./src/telas/Home/SobreNos";
import SobreNos2 from "./src/telas/Home/SobreNos2";
import SobreNos3 from "./src/telas/Home/SobreNos3";
import SobreNos4 from "./src/telas/Home/SobreNos4";

import PaginaHome from "./src/telas/Home/PaginaHome";

//login

import Login from "./src/telas/Home/Login";
import Cadastro from "./src/telas/Home/Cadastro";
import ResetSenha from "./src/telas/Home/Reset";

//perfil
import ProfileScreen from "./src/telas/Home/PerfilUser";
//import ResetInfo from "./src/telas/Home/EditarInfo";
import Reserva from "./src/telas/Home/Reservas";
import OnBoarding from "./src/telas/Home/OnBoarding";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="OnBoarding">
        <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={PaginaHome} options={{ headerShown: false }} />
  
        <Stack.Screen name="Login" component={Login} options={{ title: 'MesaVIP', headerStyle: { backgroundColor: '#FFF200', height: 70 }, headerTitleStyle: { color: 'black', fontSize: 25, fontWeight: 800, }, headerTitleAlign: 'center', }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'MesaVIP', headerStyle: { backgroundColor: '#FFF200', height: 70 }, headerTitleStyle: { color: 'black', fontSize: 25, fontWeight: 800, }, headerTitleAlign: 'center', }} />
        <Stack.Screen name="SobreNos" component={SobreNos} options={{ title: '', headerStyle: { backgroundColor: '#FFF200', height: 70 }, headerTitleStyle: { color: 'black', fontSize: 15, fontWeight: 800, }, headerTitleAlign: 'center', }} />
        <Stack.Screen name="SobreNos2" component={SobreNos2} options={{ title: '', headerStyle: { backgroundColor: '#FFF200', height: 70 }, headerTitleStyle: { color: 'black', fontSize: 15, fontWeight: 800, }, headerTitleAlign: 'center', }} />
        <Stack.Screen name="SobreNos3" component={SobreNos3} options={{ title: '', headerStyle: { backgroundColor: '#FFF200', height: 70 }, headerTitleStyle: { color: 'black', fontSize: 15, fontWeight: 800, }, headerTitleAlign: 'center', }} />
        <Stack.Screen name="SobreNos4" component={SobreNos4} options={{ title: '', headerStyle: { backgroundColor: '#FFF200', height: 70 }, headerTitleStyle: { color: 'black', fontSize: 15, fontWeight: 800, }, headerTitleAlign: 'center', }} />

        <Stack.Screen name="ConfirmationPage" component={ConfirmationPage} options={{ title: '', headerStyle: { backgroundColor: '#FFF200', height: 70 }, headerTitleStyle: { color: 'black', fontSize: 25, fontWeight: 800, }, headerTitleAlign: 'center', }} />
        <Stack.Screen name="Confirmation2" component={Confirmation2} options={{ title: '', headerStyle: { backgroundColor: '#ffffff', height: 70 }, headerTitleStyle: { color: 'black', fontSize: 25, fontWeight: 800, }, headerTitleAlign: 'center', }} />
        <Stack.Screen name="Confirmation3" component={Confirmation3} options={{ title: '', headerStyle: { backgroundColor: '#ffffff', height: 70 }, headerTitleStyle: { color: 'black', fontSize: 25, fontWeight: 800, }, headerTitleAlign: 'center', }} />
        <Stack.Screen name="Confirmation4" component={Confirmation4} options={{ title: '', headerStyle: { backgroundColor: '#ffffff', height: 70 }, headerTitleStyle: { color: 'black', fontSize: 25, fontWeight: 800, }, headerTitleAlign: 'center', }} />
        <Stack.Screen name="ComprovantePage" component={ComprovantePage} options={{ title: '', headerStyle: { backgroundColor: '#ffffff', height: 70 }, headerTitleStyle: { color: 'black', fontSize: 25, fontWeight: 800, }, headerTitleAlign: 'center', }} />
        <Stack.Screen name="ComprovantePage2" component={ComprovantePage2} options={{ title: '', headerStyle: { backgroundColor: '#ffffff', height: 70 }, headerTitleStyle: { color: 'black', fontSize: 25, fontWeight: 800, }, headerTitleAlign: 'center', }} />
        <Stack.Screen name="ComprovantePage3" component={ComprovantePage3} options={{ title: '', headerStyle: { backgroundColor: '#ffffff', height: 70 }, headerTitleStyle: { color: 'black', fontSize: 25, fontWeight: 800, }, headerTitleAlign: 'center', }} />
        <Stack.Screen name="ComprovantePage4" component={ComprovantePage4} options={{ title: '', headerStyle: { backgroundColor: '#ffffff', height: 70 }, headerTitleStyle: { color: 'black', fontSize: 25, fontWeight: 800, }, headerTitleAlign: 'center', }} />
        <Stack.Screen name="Pagina" component={Pagina} options={{ title: '', headerStyle: { backgroundColor: '#FFF200', height: 70 }, headerTitleStyle: { color: 'black', fontSize: 25, fontWeight: 800, }, headerTitleAlign: 'center', }} />
        <Stack.Screen name="Pagina2" component={Pagina2} options={{ title: '', headerStyle: { backgroundColor: '#ffffff', height: 70 }, headerTitleStyle: { color: 'black', fontSize: 25, fontWeight: 800, }, headerTitleAlign: 'center', }} />
        <Stack.Screen name="Pagina3" component={Pagina3} options={{ title: '', headerStyle: { backgroundColor: '#ffffff', height: 70 }, headerTitleStyle: { color: 'black', fontSize: 25, fontWeight: 800, }, headerTitleAlign: 'center', }} />
        <Stack.Screen name="Pagina4" component={Pagina4} options={{ title: '', headerStyle: { backgroundColor: '#ffffff', height: 70 }, headerTitleStyle: { color: 'black', fontSize: 25, fontWeight: 800, }, headerTitleAlign: 'center', }} />
        <Stack.Screen name="Perfil" component={ProfileScreen} options={{ title: 'Perfil', headerStyle: { backgroundColor: '#E3CFAF', height: 70, }, headerTitleStyle: { color: 'black', fontSize: 20, fontWeight: 800, }, headerTitleAlign: 'center', }} />
        {/* {* <Stack.Screen name="Editar Informações" component={ResetInfo} options={{ title: '', headerStyle: { backgroundColor: '#E3CFAF', height: 70, }, headerTitleStyle: { color: 'black', fontSize: 20, fontWeight: 800, }, headerTitleAlign: 'center', }} /> *} */}
        <Stack.Screen name="Reserva" component={Reserva} options={{ title: '', headerStyle: { backgroundColor: '#FFF200', height: 70, }, headerTitleStyle: { color: 'black', fontSize: 20, fontWeight: 800, }, headerTitleAlign: 'center', }} />
        <Stack.Screen name="Reset" component={ResetSenha} options={{ title: 'MesaVIP', headerStyle: { backgroundColor: '#E3CFAF', height: 70, }, headerTitleStyle: { color: '#E3CFAF', fontSize: 25, fontWeight: 800, }, headerTitleAlign: 'center', }} />
        {/* <Stack.Screen options={{ title: '', headerTransparent: true, headerShown: true, headerStyle: { backgroundColor: '#649d23' }, headerTintColor: 'transparent', }} name="OnBoarding" component={OnBoarding} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}