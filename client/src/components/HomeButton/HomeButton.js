import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import styles from './Styles';

/* Componente Botón para usar en la pantalla principal.
   Se utiliza para los dos botones que nos llevan a las pantallas "News" y "AddNews".
   Es un botón "propio"  */

export default function HomeButton({ imageSource, text, onPress}){
    //Boton para usar en el main
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={styles.container}>
                <Image 
                    style={styles.image}
                    source={imageSource}
                 />
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
