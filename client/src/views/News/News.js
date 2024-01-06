import React, { useState, useEffect } from 'react';
import {View, FlatList, Text } from 'react-native';
import DayNavigationBar from '../../components/DayNavigationBar/DayNavigationBar';
import Notice from '../../components/Notice/Notice';
import SmallHeader from '../../components/SmallHeader/SmallHeader';
import { fetchNews, fetchNewsTotal } from '../../services/News.service';
import { formatDateForBackend } from '../../constants/constants';
import styles from './Styles';
export default News = ({ navigation }) => {
  const [news, setNews] = useState([]);
  const [from, setFrom] = useState(0); // Cuantas noticias existen en el backend en total?
  const [totalNews, setTotalNews] = useState(0);
  const [fetchMoreNews, setFetchMoreNews] = useState(false);
  const [showMessage, setshowMessage] = useState(true);
  const [message, setMessage] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [batch, setBatch] = useState(10); //Cuantas noticias se cargan por "tanda"
  
  useEffect(() => {
    setNews([]); //Cuando cambia de fecha se deben borrar las noticias anteriores
    getNewsTotal()
  }, [currentDate])

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
    await fetchNews(batch, from, {date: formatDateForBackend(currentDate)})
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
    await fetchNewsTotal({date: formatDateForBackend(currentDate)})
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
      <SmallHeader navigation={navigation}/>
      <DayNavigationBar currentDate={currentDate} setCurrentDate={setCurrentDate}/>
      <FlatList
      style={{ flex: 1, width: '90%'}}
      data={news}
      ListEmptyComponent={messageComponent}
      renderItem={({item}) => 
      <Notice
        navigation={navigation}
        imageSource={item.imagen}
        title={item.titulo}
        newspaper={item.fuente}
        content={item.contenido}
        url={item.vinculo}
        date={item.fecha}
      />
    }
      keyExtractor={item => Math.random()}
      onEndReachedThreshold={0}
      onEndReached={loadMoreNews}
      ListFooterComponent={news.length > 0 && messageComponent}
      />
    </View>
  )
}
