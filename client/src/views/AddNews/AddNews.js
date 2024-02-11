import { Text, View, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { Button, Icon } from "@rneui/themed";
import styles from './Styles';
import {showDatePicker} from "../../constants/constants";
import { saveNews } from "../../services/News.service";
import { formatDateForBackend } from "../../constants/constants";
import FormInput from "../../components/FormInput/FormInput";
import { useForm, Controller } from "react-hook-form";

/* Pantalla en la que se añaden nuevas noticias al servidor.
   Consiste en un formulario en el que se ingresan los datos de la noticia a añadir.
   Se utiliza la librería "react-hook-form" para la validación de datos.
   */

export default AddNews = ({ navigation }) => {

    const { control, handleSubmit, setValue, formState: { errors } } = useForm() //traigo las funciones de useForm para manejar el estado del formulario

    const onSubmit = async (data) => {  //procesa el estado y lo envía al backend
        const formattedDate = formatDateForBackend(data.date);
        const NewsToAdd = { ...data,
            date: formattedDate
        }

        const uploadedNews = await saveNews(NewsToAdd).catch(() => {
            Alert.alert('Ha ocurrido un error');
        })
        if (!uploadedNews) return;
        Alert.alert('Noticia guardada exitosamente.');
        navigation.pop();
    }
    
    const rules = {
        title: {
            required: 'Este campo es requerido',
            minLength: {
                value: 8,
                message: 'Mínimo 8 caracteres'
            },
            maxLength: {
                value: 60,
                message: 'Máximo 60 caracteres'
            },
        },
        imageUrl: {
            required: 'Este campo es requerido',
            minLength: {
                value: 8,
                message: 'Mínimo 8 caracteres'
            }
        },
        sourceUrl: {
            required: 'Este campo es requerido',
            minLength: {
                value: 8,
                message: 'Mínimo 8 caracteres'
            }
        },
        sourceName: {
            required: 'Este campo es requerido',
            minLength: {
                value: 3,
                message: 'Mínimo 3 caracteres'
            },
            maxLength: {
                value: 100,
                message: 'Máximo 100 caracteres'
            }
        },
        content: {
            required: 'Este campo es requerido',
            minLength: {
                value: 20,
                message: 'Mínimo 20 caracteres'
            },maxLength: {
                value: 600,
                message: 'Máximo 600 caracteres'
            }
        },
        date: { 
            required: 'Este campo es requerido',
         }

    }
    return (
        <View style={styles.container}>
            <SmallHeader navigation={navigation}/>
            <View style={styles.form}>
                <Text style={styles.formTitle}>Cargar noticia</Text>
                <ScrollView contentContainerStyle={styles.formBody}>
                    <FormInput 
                        name="title"
                        control={control}
                        rules={rules.title}
                        inputData={{
                            label: "Título",
                            placeholder: "Título de la noticia...",
                            onChange: (text) => setValue('title', text),
                        }}
                        error={errors.title}
                    />
                    <FormInput 
                        name="content"
                        control={control}
                        rules={rules.content}
                        inputData={{
                            label: "Contenido",
                            placeholder: "Contenido de la noticia...",
                            onChange: (text) => setValue('content', text),
                            numberOfLines: 4,
                            multiline: true
                        }}
                        error={errors.content}
                    />
                    <FormInput 
                        name="sourceName"
                        control={control}
                        rules={rules.sourceName}
                        inputData={{
                            label: "Diario Fuente",
                            placeholder: "Nombre de la fuente de la noticia...",
                            onChange: (text) => setValue('sourceName', text)
                        }}
                        error={errors.sourceName}
                    />
                    <Text style={styles.dateLabel}>Fecha</Text>
                    <Controller //Controller es un componente que se utiliza para integrar react-hook-form con el Input de rneui/themed
                        name="date"
                        control={control}
                        rules={rules.date}
                        defaultValue={new Date()}
                        render={({ field }) =>
                            { return (
                                <View style={styles.dateContainer}>
                                    <TouchableOpacity style={styles.dateIcon} activeOpacity={0.6} onPress={() => { showDatePicker(field.value, setValue, {onForm: true, inputName: 'date'}) }}/*Botón Calendario al presionar el icono */> 
                                        <Icon name="calendar" type="font-awesome" color="#FFE4D3"/>
                                    </TouchableOpacity>
                                    <Text style={styles.date}>{field.value.toLocaleDateString()}</Text>
                                </View>
                            )}
                        }
                    />
                    {errors.date && <Text style={{ color: 'red', marginLeft: 12}}>{errors.date.message}</Text>}
                    <FormInput 
                        name="sourceUrl"
                        control={control}
                        rules={rules.sourceUrl}
                        inputData={{
                            label: "URL Noticia",
                            placeholder: "URL para leer la noticia completa...",
                            onChange: (text) => setValue('sourceUrl', text)
                        }}
                        error={errors.sourceUrl}
                    />
                    <FormInput 
                        name="imageUrl"
                        control={control}
                        rules={rules.imageUrl}
                        inputData={{
                            label: "URL Imagen",
                            placeholder: "URL de imagen para la noticia...",
                            onChange: (text) => setValue('imageUrl', text)
                        }}
                        error={errors.imageUrl}
                    />
                </ScrollView>
                <View style={styles.addButton}> 
                    <Button
                        title="Añadir"
                        color='#BA796B'
                        radius='lg'
                        onPress={handleSubmit(onSubmit)}
                        buttonStyle={{
                            width: 100,
                            alignSelf: 'center'
                        }}
                    />
                </View>
            </View>
            <View style={styles.backButton}>
                <Button
                    title="Atrás"
                    color='#8E4C3E'
                    radius='lg'
                    onPress={() => { navigation.pop() }}
                    buttonStyle={{
                        width: 80,
                        alignSelf: 'center'
                    }}
                />
            </View>
        </View>
    )
}