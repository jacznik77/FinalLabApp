import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button, Input } from "@rneui/themed";
import showDatePicker from "../../components/DatePicker/DatePicker";

const LoadNotice = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [sourceUrl, setSourceUrl] = useState('');
    const [date, setDate] = useState(new Date());

    const handleAddButton = () => {
        Alert.alert('Noticia guardada exitosamente.');
        navigation.pop()
    }

    return (
        <View style={styles.container}>
            <View style={styles.detailsContainer}>
                <Text style={{ fontSize: 20 }}>Cargar noticia</Text>
                <View style={styles.inputContainer}>
                    <Input value={title} placeholder="Título" placeholderTextColor={'#4D4442'} onChangeText={(text) => setTitle(text)}></Input>
                </View>
                <View style={styles.inputContainer}>
                    <Input value={imageUrl} placeholder="URL de Imágen" placeholderTextColor={'#4D4442'} onChangeText={(text) => setImageUrl(text)}></Input>
                </View>
                <View style={styles.inputContainer}>
                    <Input value={sourceUrl} placeholder="URL de fuente" placeholderTextColor={'#4D4442'} onChangeText={(text) => setSourceUrl(text)}></Input>
                </View>
                <View style={styles.dateContainer}>
                    <Button title="Seleccionar" titleStyle={{ color: 'black' }} color='#9d6b37' radius='lg' onPress={() => {showDatePicker(date, setDate)}}></Button>
                    <Text style={{ fontSize: 20 }}>Fecha: {date.toLocaleDateString()}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Atrás" titleStyle={{ color: 'black' }} color='#9d6b37' radius='lg' onPress={() => { navigation.pop() }}></Button>
                    <Button title="Añadir" titleStyle={{ color: 'black' }} color='#9d6b37' radius='lg' onPress={handleAddButton}></Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffc48e',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    detailsContainer: {
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
        justifyContent: 'flex-start'
    },
    inputContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20
    }
})

export default LoadNotice;