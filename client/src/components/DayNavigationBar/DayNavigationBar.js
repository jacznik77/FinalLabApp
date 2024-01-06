import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import showDatePicker from '../DatePicker/DatePicker';
import styles from './Styles';

//me gustaría que la barra de navegación sea transparente y las noticias se vean por abajo


export default DayNavigationBar = ({currentDate, setCurrentDate }) => {

  var dayName = '';
  switch (currentDate.getDay()) {//código para convertir la respuesta de getDay (0-6) en el nombre del día en texto (Domingo-Sábado)
    case 0:
      dayName = 'Domingo';
      break;
    case 1:
      dayName = 'Lunes';
      break;
    case 2:
      dayName = 'Martes';
      break;
    case 3:
      dayName = 'Miércoles';
      break;
    case 4:
      dayName = 'Jueves';
      break;
    case 5:
      dayName = 'Viernes';
      break;
    case 6:
      dayName = 'Sábado';
      break;
  }

  const changeDate = (direction) => {
    const currentTimeStamp = currentDate.getTime();
    const newTimeStamp = direction === 'previous' ? currentTimeStamp - 86400000 : currentTimeStamp + 86400000;
    setCurrentDate(new Date(newTimeStamp));
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.icon} activeOpacity={0.6} onPress={() => { showDatePicker(currentDate, setCurrentDate) }}>
          <Icon name="calendar" type="font-awesome" color="#FFE4D3"/>
        </TouchableOpacity>
        <View style={styles.dateControl}>
          <Button
            icon={<Icon name="chevron-left" color="black" />}
            onPress={() => changeDate('previous')}
            type="clear"
          />
          <TouchableOpacity activeOpacity={0.6} onPress={() => { showDatePicker(currentDate, setCurrentDate) }}>
            <Text style={styles.text}>{dayName} {currentDate.getDate()}/{currentDate.getMonth()+1}</Text>
          </TouchableOpacity>
          <Button 
            icon={<Icon name="chevron-right" color="black" />}
            type="clear"
            onPress={() => changeDate('next')}
            disabled={currentDate.toLocaleDateString() === new Date().toLocaleDateString()}
          />
        </View>
    </View>
  )
}