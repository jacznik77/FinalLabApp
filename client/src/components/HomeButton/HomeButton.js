import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import styles from './Styles';

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
