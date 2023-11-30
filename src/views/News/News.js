import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import DayNavigationBar from '../../components/DayNavigationBar/DayNavigationBar';
import Notice from '../../components/Notice/Notice';
const News = ({ navigation }) => {

  var texto1 = 'Miriam Bregman gana el balotaje 2023 y es la nueva presidenta de la Republica Argentina';
  var texto2 = 'Garbarino regala placas de video por el día del niño con la compra de un caniche toy';
  var texto3 = 'Se nos fué La Roca';

  const fechaActual = new Date()
  var diaNombre = fechaActual.getDay()
  var diaNumero = fechaActual.getDate()
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

//pasar a flatlistselectable
  return (

    <View style={styles.container}>
      <DayNavigationBar navigation={navigation} diaNombre={diaNombre} diaNumero={diaNumero} />
      <ScrollView style={{ flex: 1 }}>
        <Notice navigation={navigation} fuente={require('../../../assets/bregman.jpg')} texto={texto1}></Notice>
        <Notice navigation={navigation} fuente={require('../../../assets/placaVideo.png')} texto={texto2}></Notice>
        <Notice navigation={navigation} fuente={require('../../../assets/RipRoca.jpg')} texto={texto3}></Notice>

      </ScrollView>


    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc48e',
    alignItems: 'center',

  },
})
  ;

export default News;

/*

*/