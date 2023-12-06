import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import DayNavigationBar from '../../components/DayNavigationBar/DayNavigationBar';
import Notice from '../../components/Notice/Notice';
const News = ({ navigation }) => {

  const DATA = [
    {
      id: '1',
      title: 'Miriam Bregman gana el balotaje 2023 y es la nueva presidenta de la Republica Argentina',
      fuenteImagen: require('../../../assets/bregman.jpg'),
      diario: 'C5N'
    },
    {
      id: '2',
      title: 'Garbarino regala placas de video por el día del niño con la compra de un caniche toy',
      fuenteImagen: require('../../../assets/placaVideo.png'),
      diario: 'infobae'
    },
    {
      id: '3',
      title: 'Se nos fué La Roca',
      fuenteImagen: require('../../../assets/RipRoca.jpg'),
      diario: 'FakeNews'
    }
  ]

  const [fechaActual, setFechaActual] = useState(new Date());

  return (

    <View style={styles.container}>
      <DayNavigationBar navigation={navigation} fechaActual={fechaActual} setFechaActual={setFechaActual}/>
      <FlatList
      style={{ flex: 1 }}
      data={DATA}
      renderItem={({item}) => <Notice navigation={navigation} fuenteImagen={item.fuenteImagen} texto={item.title} diario={item.diario}></Notice>}
      keyExtractor={item => item.id}
      />
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
