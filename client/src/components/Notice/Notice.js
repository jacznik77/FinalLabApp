import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Notice = ({ navigation, fuenteImagen, texto, diario }) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity= {0.6} onPress={() => { navigation.push('NoticeDetails', {fuente: fuenteImagen, texto}) }}>
<Image source={{uri: fuenteImagen}} style={styles.image}></Image>
<Text style={{fontSize: 20, textAlign: 'justify'}}> {texto} </Text>
<Text style={{textAlign: 'right',paddingRight:10, paddingTop:10}}>~{diario}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c28c55',
        marginVertical: 16,
        marginHorizontal: 24,
        borderRadius: 32,
        paddingTop: 10,
        paddingBottom: 15,
        paddingHorizontal: 10,
        borderColor: '#9d6b37',
        borderWidth: 3,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    image:{
        height: 140,
        width: 275,
        borderRadius: 32,
    }
})

export default Notice;