import { Text, View, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { Button, Icon } from "@rneui/themed";
import styles from './Styles';
import showDatePicker from "../../components/DatePicker/DatePicker";
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
        urlImagen: {
            required: 'Este campo es requerido',
            minLength: {
                value: 8,
                message: 'Mínimo 8 caracteres'
            }
        },
        urlFuente: {
            required: 'Este campo es requerido',
            minLength: {
                value: 8,
                message: 'Mínimo 8 caracteres'
            }
        },
        nombreFuente: {
            required: 'Este campo es requerido',
            minLength: {
                value: 3,
                message: 'Mínimo 3 caracteres'
            }
        },
        contenido: {
            required: 'Este campo es requerido',
            minLength: {
                value: 20,
                message: 'Mínimo 20 caracteres'
            },maxLength: {
                value: 600,
                message: 'Máximo 600 caracteres'
            }
        },

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
                        name="contenido"
                        control={control}
                        rules={rules.contenido}
                        inputData={{
                            label: "Contenido",
                            placeholder: "Contenido de la noticia...",
                            onChange: (text) => setValue('contenido', text),
                            numberOfLines: 4,
                            multiline: true
                        }}
                        error={errors.contenido}
                    />
                    <FormInput 
                        name="nombreFuente"
                        control={control}
                        rules={rules.nombreFuente}
                        inputData={{
                            label: "Diario Fuente",
                            placeholder: "Nombre de la fuente de la noticia...",
                            onChange: (text) => setValue('nombreFuente', text)
                        }}
                        error={errors.nombreFuente}
                    />
                    <Text style={styles.dateLabel}>Fecha</Text>
                    <Controller //Controller es un componente que se utiliza para integrar react-hook-form con el Input de rneui/themed
                        name="fecha"
                        control={control}
                        rules={{ required: 'Este campo es requerido' }}
                        defaultValue={new Date()}
                        render={({ field }) =>
                            { return (
                                <View style={styles.dateContainer}>
                                    <TouchableOpacity style={styles.dateIcon} activeOpacity={0.6} onPress={() => { showDatePicker(field.value, setValue, {onForm: true}) }}/*Botón Calendario al presionar el icono */> 
                                        <Icon name="calendar" type="font-awesome" color="#FFE4D3"/>
                                    </TouchableOpacity>
                                    <Text style={styles.date}>{field.value.toLocaleDateString()}</Text>
                                </View>
                            )}
                        }
                    />
                    {errors.fecha && <Text style={{ color: 'red', marginLeft: 12}}>{errors.message.fecha}</Text>}
                    <FormInput 
                        name="urlFuente"
                        control={control}
                        rules={rules.urlFuente}
                        inputData={{
                            label: "URL Noticia",
                            placeholder: "URL para leer la noticia completa...",
                            onChange: (text) => setValue('urlFuente', text)
                        }}
                        error={errors.urlFuente}
                    />
                    <FormInput 
                        name="urlImagen"
                        control={control}
                        rules={rules.urlImagen}
                        inputData={{
                            label: "URL Imagen",
                            placeholder: "URL de imagen para la noticia...",
                            onChange: (text) => setValue('urlImagen', text)
                        }}
                        error={errors.urlImagen}
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