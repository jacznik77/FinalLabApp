import React from 'react';
import { View, Text, Image} from 'react-native';
import { Button, Icon } from '@rneui/themed';
import styles from './Styles';

/* Componente utilizado en la pantalla "News".
   Incluye un botón para volver a la pantalla principal así como el título y el logo de la aplicación. */

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