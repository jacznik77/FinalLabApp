import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button, Input } from "@rneui/themed";
import showDatePicker from "../../components/DatePicker/DatePicker";
import { saveNews } from "../../services/News.service";
import { formatDateForBackend } from "../../constants/constants";

import { useForm, Controller } from "react-hook-form";

const AddNews = ({ navigation }) => {

    const { control, handleSubmit, setValue, formState: { errors } } = useForm() //traigo las funciones de useForm para manejar el estado del formulario

    const onSubmit = async (data) => {  //procesa el estado y lo envía al backend
        console.log(data)
        const formattedDate = formatDateForBackend(data.fecha);
        const NewsToAdd = {
            title: data.title,
            imageUrl: data.urlImagen,
            sourceUrl: data.urlFuente,
            sourceName: data.nombreFuente,
            content: data.contenido,
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
                    <Controller //Controller es un componente que se utiliza para integrar react-hook-form con el Input de rneui/themed
                        name="title"
                        control={control}
                        rules={{
                            required: 'Este campo es requerido',
                            minLength: {
                                value: 8,
                                message: 'Mínimo 8 caracteres'
                            },
                            maxLength: {
                                value: 60,
                                message: 'Máximo 60 caracteres'
                            },
                        }}

                        render={({ field }) => <Input //field es un objeto que contiene valores y funciones relacionadas con el campo que esté controlando Controller
                            value={field.value} // react-hook-form no utiliza el estado local directamente; en su lugar, utiliza un controlador centralizado. Te abstrae de la manipulación del estado del formulario
                            placeholder="Título"
                            placeholderTextColor={'#4D4442'}
                            cursorColor={'#4D4442'}
                            color={'black'}
                            onChangeText={(text) => setValue('title', text)} />}
                    />
                    {errors.title && <Text style={{ color: 'brown' }}>{errors.title.message}</Text>}

                    <Controller //Controller es un componente que se utiliza para integrar react-hook-form con el Input de rneui/themed
                        name="urlImagen"
                        control={control}
                        rules={{
                            required: 'Este campo es requerido',
                            minLength: {
                                value: 8,
                                message: 'Mínimo 8 caracteres'
                            }
                        }}
                        render={({ field }) =>
                            <Input
                                value={field.value}
                                placeholder="URL de Imagen"
                                placeholderTextColor={'#4D4442'}
                                cursorColor={'#4D4442'}
                                onChangeText={(text) => setValue('urlImagen', text)} />}
                    />
                    {errors.urlImagen && <Text style={{ color: 'brown' }}>{errors.urlImagen.message}</Text>}

                    <Controller //Controller es un componente que se utiliza para integrar react-hook-form con el Input de rneui/themed
                        name="urlFuente"
                        control={control}
                        rules={{
                            required: 'Este campo es requerido',
                            minLength: {
                                value: 8,
                                message: 'Mínimo 8 caracteres'
                            }
                        }}

                        render={({ field }) =>
                            <Input
                                value={field.value}
                                placeholder="URL de fuente"
                                placeholderTextColor={'#4D4442'}
                                cursorColor={'#4D4442'}
                                onChangeText={(text) => setValue('urlFuente', text)} />}
                    />
                    {errors.urlFuente && <Text style={{ color: 'brown' }}>{errors.urlFuente.message}</Text>}
                    <Controller //Controller es un componente que se utiliza para integrar react-hook-form con el Input de rneui/themed
                        name="nombreFuente"
                        control={control}
                        rules={{
                            required: 'Este campo es requerido',
                            minLength: {
                                value: 3,
                                message: 'Mínimo 3 caracteres'
                            }
                        }}
                        render={({ field }) =>
                            <Input
                                value={field.value}
                                placeholder="Nombre del diario fuente"
                                placeholderTextColor={'#4D4442'}
                                cursorColor={'#4D4442'}
                                onChangeText={(text) => setValue('nombreFuente', text)}
                            />}
                    />
                    {errors.nombreFuente && <Text style={{ color: 'brown' }}>{errors.nombreFuente.message}</Text>}

                    <Controller //Controller es un componente que se utiliza para integrar react-hook-form con el Input de rneui/themed
                        name="contenido"
                        control={control}
                        rules={{
                            required: 'Este campo es requerido',
                            minLength: {
                                value: 20,
                                message: 'Mínimo 20 caracteres'
                            },maxLength: {
                                value: 600,
                                message: 'Máximo 600 caracteres'
                            }
                        }}
                        render={({ field }) =>
                            <Input
                                value={field.value}
                                placeholder="Contenido"
                                multiline={true}
                                numberOfLines={4}
                                style= {{height: 100}}
                                textAlignVertical="top"
                                placeholderTextColor={'#4D4442'}
                                cursorColor={'#4D4442'}
                                onChangeText={(text) => setValue('contenido', text) && handleChangeText }
                            />}
                    />
                    {errors.contenido && <Text style={{ color: 'brown' }}>{errors.contenido.message}</Text>}

                </View>
                <View style={styles.dateContainer}>
                    <Text style={{ fontSize: 20, paddingLeft: 11, paddingRight: 5 }}>Fecha: </Text>
                    <Controller //Controller es un componente que se utiliza para integrar react-hook-form con el Input de rneui/themed
                        name="fecha"
                        control={control}
                        rules={{ required: 'Este campo es requerido' }}
                        defaultValue={new Date()}
                        render={({ field }) =>
                            <Button title={field.value.toLocaleDateString()} titleStyle={{ color: 'black' }} color='#9d6b37' radius='lg' onPress={() => { showDatePicker(field.value, setValue, {onForm: true}) }}></Button>}
                    />
                    {errors.fecha && <Text style={{ color: 'brown' }}>{errors.fecha.message}</Text>}
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Atrás" titleStyle={{ color: 'black' }} color='#9d6b37' radius='lg' onPress={() => { navigation.pop() }}></Button>
                    <Button title="Añadir" titleStyle={{ color: 'black' }} color='#9d6b37' radius='lg' onPress={handleSubmit(onSubmit)}></Button>
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