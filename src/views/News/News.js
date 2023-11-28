import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import DayNavigationBar from '../../components/DayNavigationBar/DayNavigationBar';
import Notice from '../../components/Notice/Notice';
const News = ({ navigation }) => {

  var texto1 = 'Miriam Bregman gana el balotaje 2023 y es la nueva presidenta de la Republica Argentina';
  var texto2 = 'Garbarino regala placas de video por el día del niño con la compra de un caniche toy';
  var texto3 = 'Se nos fué La Roca';

  return (

    <View style={styles.container}>
      <DayNavigationBar navigation={navigation} />
      <ScrollView>
        <Notice navigation={navigation} fuente={require('../../../assets/bregman.jpg') } texto={texto1}></Notice>
        <Notice navigation={navigation} fuente={require('../../../assets/placaVideo.png') } texto={texto2}></Notice>
        <Notice navigation={navigation} fuente={require('../../../assets/RipRoca.jpg') } texto={texto3}></Notice>

      </ScrollView>


    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc48e',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 20
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 0.6
  }
})
  ;

export default News;