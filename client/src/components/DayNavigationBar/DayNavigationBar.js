import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import showDatePicker from '../DatePicker/DatePicker';

//me gustaría que la barra de navegación sea transparente y las noticias se vean por abajo


const DayNavigationBar = ({ navigation, fechaActual, setFechaActual }) => {

  var diaNombre = '';
  switch (fechaActual.getDay()) {//código para convertir la respuesta de getDay (0-6) en el nombre del día en texto (Domingo-Sábado)
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

  const changeDate = (direction) => {
    const currentTimeStamp = fechaActual.getTime();
    const newTimeStamp = direction === 'previous' ? currentTimeStamp - 86400000 : currentTimeStamp + 86400000;
    setFechaActual(new Date(newTimeStamp));
  }
  /*
  const handleLeftButtonPress = () => {
    const timeStampCurrentDate = fechaActual.getTime();
    const timeStampPreviousDay = timeStampCurrentDate - 86400000;
    setFechaActual(new Date(timeStampPreviousDay));

  }
  const handleRightButtonPress = () => {
    const timeStampCurrentDate = fechaActual.getTime();
    const timeStampPreviousDay = timeStampCurrentDate + 86400000;
    setFechaActual(new Date(timeStampPreviousDay));
  }
  */

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button icon={<Icon name="menu" color="black"></Icon>} color='#9d6b37' radius='lg' onPress={() => { navigation.pop() }}></Button>
        <View style={styles.daySelectorContainer}>
          <Button
            icon={<Icon name="chevron-left" color="black"></Icon>}
            color='#9d6b37'
            radius='lg'
            onPress={() => changeDate('previous')}
          />
          <TouchableOpacity activeOpacity={0.6} onPress={() => { showDatePicker(fechaActual, setFechaActual) }}>
            <Text style={styles.text}>{diaNombre} {fechaActual.getDate()}/{fechaActual.getMonth()+1}</Text>
          </TouchableOpacity>
          <Button 
            icon={<Icon name="chevron-right" color="black"></Icon>}
            color='#9d6b37'
            radius='lg'
            onPress={() => changeDate('next')}
            disabled={fechaActual.toLocaleDateString() === new Date().toLocaleDateString()}
          />
        </View>

      </View>
    </View>
  )
}
//no sé pq no puedo justificar el contenido dentro de buttonContainer.
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingBottom: 10,
  },
  buttonContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  daySelectorContainer: {
    width: 268,
    marginLeft: 22,
    borderRadius: 12,
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