import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, FlatList, Alert } from 'react-native';
import { Button, Icon, Input } from "@rneui/themed";

const LoadNotice = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [sourceUrl, setSourceUrl] = useState('');

    const handleAddButton = () => {
        Alert.alert('Noticia guardada exitosamente.');
        navigation.pop()
    }

    return (
        <View style={styles.container}>
            <View style={styles.detailsContainer}>
                <Text style={{ fontSize: 20 }}>Cargar noticia</Text>
                <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                    <Input value={title} placeholder="Título" placeholderTextColor={'#4D4442'} onChangeText={(text) => setTitle(text)}></Input>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                    <Input value={imageUrl} placeholder="URL de Imágen" placeholderTextColor={'#4D4442'} onChangeText={(text) => setImageUrl(text)}></Input>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                    <Input value={sourceUrl} placeholder="URL de fuente" placeholderTextColor={'#4D4442'} onChangeText={(text) => setSourceUrl(text)}></Input>
                </View>
                <View style={{ flexDirection: 'row', flex: 0.1 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Button title="Atrás" titleStyle={{ color: 'black' }} color='#9d6b37' radius='lg' onPress={() => { navigation.pop() }}></Button>
                        <Button title="Añadir" titleStyle={{ color: 'black' }} color='#9d6b37' radius='lg' onPress={handleAddButton}></Button>
                    </View>
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
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})

export default LoadNotice;