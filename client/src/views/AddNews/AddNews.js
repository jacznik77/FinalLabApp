import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button, Input } from "@rneui/themed";
import showDatePicker from "../../components/DatePicker/DatePicker";
import { saveNews } from "../../services/News.service";
import { formatDateForBackend } from "../../constants/constants";

const AddNews = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [sourceName, setSourceName] = useState('');
    const [sourceUrl, setSourceUrl] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState(new Date());

    const handleSubmit = async () => {
        const formattedDate = formatDateForBackend(date);
        const NewsToAdd = {
            title,
            imageUrl,
            sourceUrl,
            sourceName,
            content,
            date: formattedDate
        }
        
        const uploadedNews = await saveNews(NewsToAdd).catch(() => {
            Alert.alert('Ha ocurrido un error');
        })
        if (!uploadedNews) return;
        Alert.alert('Noticia guardada exitosamente.');
        navigation.pop();
    }


    return (
        <View style={styles.container}>
            <View style={styles.detailsContainer}>
                <Text style={{ fontSize: 26, textAlign: 'center', paddingBottom: 15 }}>Cargar noticia</Text>
                <View style={styles.inputContainer}>
                    <Input 
                        value={title}
                        placeholder="Título"
                        placeholderTextColor={'#4D4442'}
                        cursorColor={'#4D4442'}
                        color={'black'}
                        onChangeText={(text) => setTitle(text)}
                    />
                    <Input
                        value={imageUrl}
                        placeholder="URL de Imagen"
                        placeholderTextColor={'#4D4442'}
                        cursorColor={'#4D4442'}
                        onChangeText={(text) => setImageUrl(text)}
                    />
                    <Input
                        value={sourceUrl}
                        placeholder="URL de fuente"
                        placeholderTextColor={'#4D4442'}
                        cursorColor={'#4D4442'}
                        onChangeText={(text) => setSourceUrl(text)}
                    />
                    <Input
                        value={sourceName}
                        placeholder="Nombre del diario fuente"
                        placeholderTextColor={'#4D4442'}
                        cursorColor={'#4D4442'}
                        onChangeText={(text) => setSourceName(text)}
                    />
                    <Input
                        value={content}
                        placeholder="Contenido"
                        multiline={true}
                        placeholderTextColor={'#4D4442'}
                        cursorColor={'#4D4442'}
                        onChangeText={(text) => setContent(text)}
                    />
                </View>
                <View style={styles.dateContainer}>
                    <Text style={{ fontSize: 20, paddingLeft:11, paddingRight:5 }}>Fecha: </Text>
                    <Button title={date.toLocaleDateString()} titleStyle={{ color: 'black' }} color='#9d6b37' radius='lg' onPress={() => { showDatePicker(date, setDate) }}></Button>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Atrás" titleStyle={{ color: 'black' }} color='#9d6b37' radius='lg' onPress={() => { navigation.pop() }}></Button>
                    <Button title="Añadir" titleStyle={{ color: 'black' }} color='#9d6b37' radius='lg' onPress={handleSubmit}></Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
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
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 40,
        paddingBottom: 20
    }
})

export default AddNews;