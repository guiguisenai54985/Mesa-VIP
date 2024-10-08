import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ConfirmationPage from "./src/telas/Home/ConfirmationPage";
import Confirmation2 from "./src/telas/Home/Confirmation2";
import Confirmation3 from "./src/telas/Home/Confirmation3";
import Confirmation4 from "./src/telas/Home/Confirmation4";
import Confirmation5 from "./src/telas/Home/Confirmation5";
import Confirmation6 from "./src/telas/Home/Confirmation6";
import Confirmation7 from "./src/telas/Home/Confirmation7";
import Confirmation8 from "./src/telas/Home/Confirmation8";
import Confirmation9 from "./src/telas/Home/Confirmation9";
import ComprovantePage from "./src/telas/Home/ComprovantePage";
import ComprovantePage2 from "./src/telas/Home/ComprovantePage2";
import ComprovantePage3 from "./src/telas/Home/ComprovantePage3";
import ComprovantePage4 from "./src/telas/Home/ComprovantePage4";
import ComprovantePage5 from "./src/telas/Home/ComprovantePage5";
import ComprovantePage6 from "./src/telas/Home/ComprovantePage6";
import ComprovantePage7 from "./src/telas/Home/ComprovantePage7";
import ComprovantePage8 from "./src/telas/Home/ComprovantePage8";
import ComprovantePage9 from "./src/telas/Home/ComprovantePage9";
import Pagina from "./src/telas/Home/Pagina";
import Pagina2 from "./src/telas/Home/Pagina2";
import Pagina3 from "./src/telas/Home/Pagina3";
import Pagina4 from "./src/telas/Home/Pagina4";
import Pagina5 from "./src/telas/Home/Pagina5";
import Pagina6 from "./src/telas/Home/Pagina6";
import Pagina7 from "./src/telas/Home/Pagina7";
import Pagina8 from "./src/telas/Home/Pagina8";
import Pagina9 from "./src/telas/Home/Pagina9";
import SobreNos from "./src/telas/Home/SobreNos";
import SobreNos2 from "./src/telas/Home/SobreNos2";
import SobreNos3 from "./src/telas/Home/SobreNos3";
import SobreNos4 from "./src/telas/Home/SobreNos4";
import SobreNos5 from "./src/telas/Home/SobreNos5";
import SobreNos6 from "./src/telas/Home/SobreNos6";
import SobreNos7 from "./src/telas/Home/SobreNos7";
import SobreNos8 from "./src/telas/Home/SobreNos8";
import SobreNos9 from "./src/telas/Home/SobreNos9";
import PaginaHome from "./src/telas/Home/PaginaHome";
import LogHome from "./src/telas/Home/LogHome";
import Login from "./src/telas/Home/Login";
import Cadastro from "./src/telas/Home/Cadastro";


const Stack = createStackNavigator();
  
    export default function App() {
    return (
      <NavigationContainer>
        
        <Stack.Navigator initialRouteName="LogHome">
        <Stack.Screen options={{ headerStyle: { backgroundColor: '#EDE6DB' }, headerTintColor: '#EDE6DB', }} name="Home" component={PaginaHome} />
          <Stack.Screen name="LogHome" component={LogHome} options={{ title: '', headerStyle: { backgroundColor: '#EDE6DB', height: 5 }}}/>
          <Stack.Screen name="Login" component={Login} options={{ title: 'MesaVIP', headerStyle: { backgroundColor: '#E3CFAF', height: 70}, headerTitleStyle: { color: 'black',  fontSize: 25,  fontWeight: 800,},  headerTitleAlign: 'center', }}/>
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'MesaVIP', headerStyle: { backgroundColor: '#E3CFAF', height: 70}, headerTitleStyle: { color: 'black',  fontSize: 25,  fontWeight: 800,},  headerTitleAlign: 'center', }}/>
          <Stack.Screen name="SobreNos" component={SobreNos} />
          <Stack.Screen name="SobreNos2" component={SobreNos2} />
          <Stack.Screen name="SobreNos3" component={SobreNos3} />
          <Stack.Screen name="SobreNos4" component={SobreNos4} />
          <Stack.Screen name="SobreNos5" component={SobreNos5} />
          <Stack.Screen name="SobreNos6" component={SobreNos6} />
          <Stack.Screen name="SobreNos7" component={SobreNos7} />
          <Stack.Screen name="SobreNos8" component={SobreNos8} />
          <Stack.Screen name="SobreNos9" component={SobreNos9} />
          <Stack.Screen name="ConfirmationPage" component={ConfirmationPage} />
          <Stack.Screen name="Confirmation2" component={Confirmation2} />
          <Stack.Screen name="Confirmation3" component={Confirmation3} />
          <Stack.Screen name="Confirmation4" component={Confirmation4} />
          <Stack.Screen name="Confirmation5" component={Confirmation5} />
          <Stack.Screen name="Confirmation6" component={Confirmation6} />
          <Stack.Screen name="Confirmation7" component={Confirmation7} />
          <Stack.Screen name="Confirmation8" component={Confirmation8} />
          <Stack.Screen name="Confirmation9" component={Confirmation9} />
          <Stack.Screen name="ComprovantePage" component={ComprovantePage} />
          <Stack.Screen name="ComprovantePage2" component={ComprovantePage2} />
          <Stack.Screen name="ComprovantePage3" component={ComprovantePage3} />
          <Stack.Screen name="ComprovantePage4" component={ComprovantePage4} />
          <Stack.Screen name="ComprovantePage5" component={ComprovantePage5} />
          <Stack.Screen name="ComprovantePage6" component={ComprovantePage6} />
          <Stack.Screen name="ComprovantePage7" component={ComprovantePage7} />
          <Stack.Screen name="ComprovantePage8" component={ComprovantePage8} />
          <Stack.Screen name="ComprovantePage9" component={ComprovantePage9} />
          <Stack.Screen name="Pagina" component={Pagina} />
          <Stack.Screen name="Pagina2" component={Pagina2} />
          <Stack.Screen name="Pagina3" component={Pagina3} />
          <Stack.Screen name="Pagina4" component={Pagina4} />
          <Stack.Screen name="Pagina5" component={Pagina5} />
          <Stack.Screen name="Pagina6" component={Pagina6} />
          <Stack.Screen name="Pagina7" component={Pagina7} />
          <Stack.Screen name="Pagina8" component={Pagina8} />
          <Stack.Screen name="Pagina9" component={Pagina9} />
      
         
          
        </Stack.Navigator>
      </NavigationContainer>
    );
   }