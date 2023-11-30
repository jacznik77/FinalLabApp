import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button, Icon } from '@rneui/themed';

//me gustaría que la barra de navegación sea transparente y las noticias se vean por abajo
//me está faltando que el componente esté encimado al scrollview

const DayNavigationBar = ({ navigation, diaNombre, diaNumero, setDiaNumero }) => {

    switch (diaNombre) {//código para convertir la respuesta de getDay (0-6) en el nombre del día en texto (Domingo-Sábado)
        case 0:
          diaNombre = 'Domingo';
          break;
        case 1:
          diaNombre = 'Lunes';
          break;
        case 2:
          diaNombre = 'Martes';
          break;
        case 3:
          diaNombre = 'Miércoles';
          break;
        case 4:
          diaNombre = 'Jueves';
          break;
        case 5:
          diaNombre = 'Viernes';
          break;
        case 6:
          diaNombre = 'Sábado';
          break;
      }

    return (
        <View style={{ justifyContent: 'center', flex: 0.1, marginTop: 30, backgroundColor: 'rgba(0, 0, 0, 0)' }}>
            <View style={styles.buttonContainer}>
                <Button icon={<Icon name="menu" color="black"></Icon>} color='#9d6b37' radius='lg' onPress={() => { navigation.pop() }}></Button>
                <View style={styles.daySelectorContainer}>
                    <Button icon={<Icon name="chevron-left" color="black"></Icon>} color='#9d6b37' radius='lg' onPress={() =>{setDiaNumero(diaNumero - 1)}}></Button>
                    <Text style={styles.text}>{diaNombre} {diaNumero}</Text>
                    <Button icon={<Icon name="chevron-right" color="black"></Icon>} color='#9d6b37' radius='lg' onPress={() =>{setDiaNumero(diaNumero + 1)}}></Button>
                </View>

            </View>
        </View>
    )
}
//no sé pq no puedo justificar el contenido dentro de buttonContainer.
const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    daySelectorContainer: {
        marginLeft: 50,
        borderRadius: 30,
        backgroundColor: '#c28c55',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    text: {
        marginHorizontal: 7,
        fontSize: 20,

    }
}
)

export default DayNavigationBar;