import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "../views/Home/Home";
import News from "../views/News/News";
const Stack = createNativeStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false, title: 'Home'}}>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='News' component={News}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;