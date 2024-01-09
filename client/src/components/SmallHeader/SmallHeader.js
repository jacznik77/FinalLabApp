import React from 'react';
import { View, Text, Image} from 'react-native';
import { Button, Icon } from '@rneui/themed';
import styles from './Styles';

/* Componente utilizado en todas las pantallas a excepción de la pantalla HOME.
   Incluye un botón para volver a la pantalla principal así como el título y el logo de la aplicación. 
   A fin de cuentas, es un header versión pequeño*/

export default SmallHeader = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button 
                icon={<Icon name="home" color="#8E4C3E" size={40} />}
                type='clear'
                onPress={() => { navigation.popToTop() }}
            />
            <Text style={styles.title}> Your Daily Coffee </Text>
            <Image source={require('../../../assets/gatoTaza.png')} style={styles.image} />
        </View>
    )
};