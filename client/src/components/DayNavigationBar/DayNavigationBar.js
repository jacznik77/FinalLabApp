import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import { showDatePicker } from '../../constants/constants';
import styles from './Styles';

/* DayNavigationBar es un componente que presenta en pantalla la fecha en un formáto "Día dd/mm", por ejemplo: "Lunes 03/12".
   También incluye dos flechas, una a la izquierda y otra a la derecha, para ir avanzando o retrocediendo de día uno a la vez. Si se está en el día actual no se puede avanzar a la derecha.
   También utiliza el componente DatePicker para seleccionar una fecha en un calendario. */


export default DayNavigationBar = ({currentDate, setCurrentDate, setDateChanged }) => {


  var dayName = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']; //arreglo para convertir la respuesta de getDay (0-6) en el nombre del día en texto (Domingo-Sábado)

  const changeDate = (direction) => { //lógica de los botones de las flechas. Retrocede un día si el argumento es 'previous', de lo contrario avanza un dia.
    const currentTimeStamp = currentDate.getTime();
    const newTimeStamp = direction === 'previous' ? currentTimeStamp - 86400000 : currentTimeStamp + 86400000;
    setCurrentDate(new Date(newTimeStamp));
    if(setDateChanged)
      setDateChanged(true);
  }

  const onClickLeftArrowHandler = () => changeDate('previous'); //Restar un día con flecha izquierda
  const onClickRightArrowHandler = () => changeDate('next');    //Sumar un día con flecha derecha
  const onClickDatePickerHandler = () => { showDatePicker(currentDate, setCurrentDate, {setDateChanged}) }; //Abrir calendario para seleccionar fecha específica
  
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.icon} activeOpacity={0.6} onPress={onClickDatePickerHandler} /*Botón Calendario al presionar el icono */> 
          <Icon name="calendar" type="font-awesome" color="#FFE4D3"/>
        </TouchableOpacity>
        <View style={styles.dateControl}>
          <Button /*Botón Flecha Izquierda */
            icon={<Icon name="chevron-left" color="black" />}
            onPress={onClickLeftArrowHandler}
            type="clear"
          />
          <TouchableOpacity activeOpacity={0.6} onPress={onClickDatePickerHandler}>
            <Text style={styles.text}>{dayName[currentDate.getDay()]} {currentDate.getDate()}/{currentDate.getMonth()+1}</Text>
          </TouchableOpacity>
          <Button /*Botón Flecha Derecha */
            icon={<Icon name="chevron-right" color="black" />}
            type="clear"
            onPress={onClickRightArrowHandler}
            disabled={currentDate.toLocaleDateString() === new Date().toLocaleDateString()}
          />
        </View>
    </View>
  )
}