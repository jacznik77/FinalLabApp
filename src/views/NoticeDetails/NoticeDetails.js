import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "@rneui/themed";

const NoticeDetails = ({route, navigation}) => {
    const {fuente, texto} = route.params;
    console.log(route.params)
    return(
        <View style={styles.container}>
            <View style={styles.detailsContainer}>
            <Image source={fuente} style={styles.image}></Image>
            <Text style={{flex: 0.7, fontSize: 20, flexDirection: 'column', justifyContent: 'flex-start', paddingTop: 10}} >{texto}</Text>
            <View style={{flexDirection: 'row', flex: 0.1}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <Button title="Atrás" titleStyle={{color: 'black'}} color='#9d6b37' onPress={() =>{navigation.pop()}}></Button>
                <Button title="Leer" titleStyle={{color: 'black'}} color='#9d6b37'></Button>
                </View>
            </View>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffc48e',
    },
    detailsContainer:{
            flex: 1,
            backgroundColor: '#c28c55',
            marginTop: 40,
            marginBottom: 20,
            marginHorizontal: 20,
            borderRadius: 32,
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderColor: '#9d6b37',
            borderWidth: 3,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between'
    },
    image:{
        flex: 0.3,
        width: 290,
        flexDirection: 'column',
        borderRadius: 32,
    },
    buttonContainer:{

    }
})
export default NoticeDetails;