import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import DayNavigationBar from '../../components/DayNavigationBar/DayNavigationBar';
import Notice from '../../components/Notice/Notice';
const News = ({ navigation }) => {
  const urlLocal = "192.168.0.15"; //Es posible que esto se mueva
  const [news, setNews] = useState([]);
  const [from, setFrom] = useState(0); // Cuantas noticias existen en el backend en total?
  const [totalNews, setTotalNews] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const amount = 10; //Cuantas noticias se cargan por "tanda"
  useEffect(() => {
    if(totalNews != 0)
      fetchNews()
    else
      fetchTotalNews()
  }, [totalNews])

  async function fetchNews(){
    /* Seguramente esta función se mueva a otro archivo */
    if(!isLoading)
      setIsLoading(true);
    const response = await fetch(`http://${urlLocal}:5000/api/noticias?cantidad=${amount}&desde=${from}`);
    const data = await response.json();
    setFrom((amount+from)%31);
    setNews([...news, ...data.noticias])
    setIsLoading(false)
  }

  async function fetchTotalNews(){
    const response = await fetch(`http://${urlLocal}:5000/api/noticias/total`);
    const data = await response.json();
    setTotalNews(data.cantidad);
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
      keyExtractor={item => Math.random()}
      //ListEmptyComponent={<Text>Cargando, espere por favor...</Text>}
      onEndReachedThreshold={0.8}
      onEndReached={fetchNews}
      />
      {
      isLoading &&
      <View><Text>Cargando, espere por favor...</Text></View>
      }
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
