import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "../views/Home/Home";
import News from "../views/News/News";
import NewsDetails from "../views/NewsDetails/NewsDetails";
import AddNews from "../views/AddNews/AddNews";
const Stack = createNativeStackNavigator();

/* Componente que utiliza las librerías "@react-navigation/native" y '@react-navigation/native-stack' para la navegación entre pantallas.
   Inicializa el Stack.Navigator, establece la pantalla inicial e inicializa las demás pantallas con Stack.Screen. */

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false, title: 'Home'}}>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='News' component={News}/>
                <Stack.Screen name='NewsDetails' component={NewsDetails}/>
                <Stack.Screen name='AddNews' component={AddNews}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;