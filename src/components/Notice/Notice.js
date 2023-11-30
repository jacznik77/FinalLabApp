import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button } from "@rneui/themed";

const Notice = ({ navigation, fuenteImagen, texto }) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity= {0.6} onPress={() => { navigation.push('NoticeDetails', {fuente: fuenteImagen, texto}) }}>
<Image source={fuenteImagen} style={styles.image}></Image>
<Text style={{fontSize: 20, textAlign: 'justify'}}> {texto} </Text>
<View style={{marginVertical: 10,marginRight: 10, flexDirection: 'row', justifyContent: 'flex-end',}}>
    
</View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c28c55',
        marginVertical: 16,
        marginHorizontal: 24,
        borderRadius: 32,
        paddingVertical: 10,
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