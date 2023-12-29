import React, { PureComponent } from "react";
import { View, Text, StyleSheet, Image, Linking } from "react-native";
import { Button } from "@rneui/themed";

const NoticeDetails = ({ route, navigation }) => {
    const { fuenteImagen, titulo, contenido, diario, vinculo } = route.params;
    console.log(route.params)

    const handleOpenLink = () => {
        Linking.openURL(vinculo).catch((err) => console.error('Error al abrir el enlace', err));
      };

    return (
        <View style={styles.container}>
            <View style={styles.detailsContainer}>
                <View style={{alignItems: 'center',}}>
                    <Image source={{ uri: fuenteImagen }} style={styles.image}></Image>
                    <Text style={styles.titulo} >{titulo}</Text>
                    <Text style={{}}>{contenido}</Text>
                </View>
                <Text style={{ textAlign: 'right', paddingRight: 10, paddingTop: 10 }}>~{diario}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.buttonsContainer}>
                        <Button title="Atrás"
                            titleStyle={{ color: 'black' }}
                            color='#9d6b37' radius='lg'
                            onPress={() => { navigation.pop() }}></Button>
                        <Button title="Leer"
                            titleStyle={{ color: 'black' }}
                            color='#9d6b37' radius='lg'
                            onPress={handleOpenLink}></Button>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffc48e',
        justifyContent: 'center'
    },
    detailsContainer: {
        backgroundColor: '#c28c55',
        marginTop: 40,
        marginBottom: 20,
        marginHorizontal: 20,
        borderRadius: 32,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderColor: '#9d6b37',
        borderWidth: 3,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    image: {
        minHeight: 160,
        minWidth: 290,
        flexDirection: 'column',
        borderRadius: 32,
    },
    titulo: {
        fontSize: 20,
        paddingVertical: 10
    },
    buttonsContainer: {
        paddingTop: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
export default NoticeDetails;