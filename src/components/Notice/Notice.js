import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";


const Notice = ({ navigation, fuente, texto }) => {
    return (
        <View style={styles.container}>
<Image source={fuente} style={styles.image}></Image>
<Text style={{fontSize: 20, textAlign: 'justify'}}> {texto} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c28c55',
        marginVertical: 16,
        marginHorizontal: 24,
        borderRadius: 32,
        paddingVertical: 30,
        paddingHorizontal: 10,
        borderColor: '#9d6b37',
        borderWidth: 3,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image:{
        height: 140,
        width: 270,
        borderRadius: 32,
    }
})

export default Notice;