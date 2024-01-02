import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import DayNavigationBar from '../../components/DayNavigationBar/DayNavigationBar';
import Notice from '../../components/Notice/Notice';
import { fetchNews, fetchNewsTotal } from '../../services/News.service';
import { formatDateForBackend } from '../../Constants/constants';
const News = ({ navigation }) => {
  const [news, setNews] = useState([]);
  const [from, setFrom] = useState(0); // Cuantas noticias existen en el backend en total?
  const [totalNews, setTotalNews] = useState(0);
  const [fetchMoreNews, setFetchMoreNews] = useState(false);
  const [showMessage, setshowMessage] = useState(true);
  const [message, setMessage] = useState("");
  const [fechaActual, setFechaActual] = useState(new Date());
  const [batch, setBatch] = useState(10); //Cuantas noticias se cargan por "tanda"
  
  useEffect(() => {
    setNews([]); //Cuando cambia de fecha se deben borrar las noticias anteriores
    getNewsTotal()
  }, [fechaActual])

  useEffect(() => {
    if(fetchMoreNews)
      newsHandler()
  }, [fetchMoreNews])

  const newsHandler = async () => {
    setFetchMoreNews(false);
    if(!showMessage){
        setshowMessage(true);
        setMessage("Cargando... espere por favor")
    }
    await fetchNews(batch, from, {date: formatDateForBackend(fechaActual)})
    .catch(() => {
      console.log("error dentro de fetched News");
      setMessage("Ha ocurrido un error al obtener noticias")
      return;
    })
    .then((result) => {
      fetchedNews = result;
      setNews([...news, ...result])
      setshowMessage(false)
    })
  }

  const getNewsTotal = async () => {
    await fetchNewsTotal({date: formatDateForBackend(fechaActual)})
    .catch(() => {
      console.log("error dentro de getNewsTotal")
      setMessage("Ha ocurrido un error al obtener noticias");
      return ;
    })
    .then((result) => {
      setTotalNews(result);
      let newBatch = result < 10 ? result : 10;
        setBatch(newBatch);
      if(result == 0){
        setMessage("No se han encontrado noticias")
        setshowMessage(true)
      }else{
        setFetchMoreNews(true);
      }
    })
  }

  const loadMoreNews = () => {
    if(totalNews && !showMessage){
      setFrom((batch+from)%totalNews);
      setFetchMoreNews(true);
    }
  }

  const messageComponent = () => {
    return (
      showMessage ? 
      <View>
        <Text style={styles.message}>{message}</Text>
      </View> : null
    );
  }

  return (

    <View style={styles.container}>
      <DayNavigationBar navigation={navigation} fechaActual={fechaActual} setFechaActual={setFechaActual}/>
      <FlatList
      style={{ flex: 1 }}
      data={news}
      ListEmptyComponent={messageComponent}
      renderItem={({item}) => <Notice navigation={navigation} fuenteImagen={item.imagen} titulo={item.titulo} diario={item.fuente} contenido ={item.contenido} vinculo ={item.vinculo}></Notice>}
      keyExtractor={item => Math.random()}
      onEndReachedThreshold={0}
      onEndReached={loadMoreNews}
      ListFooterComponent={news.length > 0 && messageComponent}
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
  message: {
    marginVertical: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default News;
