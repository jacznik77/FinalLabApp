import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import DayNavigationBar from '../../components/DayNavigationBar/DayNavigationBar';
import Notice from '../../components/Notice/Notice';
const News = ({ navigation }) => {
  const urlLocal = "192.168.0.15"; //Es posible que esto se mueva
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetchNews()
  }, [])

  async function fetchNews(){
    /* Seguramente esta función se mueva a otro archivo */
    const response = await fetch(`http://${urlLocal}:5000/api/noticias`);
    const data = await response.json();
    setNews(data.noticias)
  }
  /*
  Versión Hardcoded
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
  ]*/

  /* Me traigo las noticias usando la API */

  const [fechaActual, setFechaActual] = useState(new Date());

  return (

    <View style={styles.container}>
      <DayNavigationBar navigation={navigation} fechaActual={fechaActual} setFechaActual={setFechaActual}/>
      <FlatList
      style={{ flex: 1 }}
      data={news}
      renderItem={({item}) => <Notice navigation={navigation} fuenteImagen={item.imagen} texto={item.titulo} diario={item.fuente}></Notice>}
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
