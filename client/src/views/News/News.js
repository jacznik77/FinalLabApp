import React, { useState, useEffect } from 'react';
import {View, FlatList, Text, ActivityIndicator } from 'react-native';
import { Icon } from '@rneui/themed';
import DayNavigationBar from '../../components/DayNavigationBar/DayNavigationBar';
import Notice from '../../components/Notice/Notice';
import SmallHeader from '../../components/SmallHeader/SmallHeader';
import { fetchNews} from '../../services/News.service';
import { formatDateForBackend } from '../../Constants/constants';
import styles from './Styles';


/* Pantalla que muestra la lista de noticias disponibles para leer, a modo de lista y clasificadas por fecha. Para una fecha dada se muestran las noticias del dia seleccionado,
a menos que no exista ninguna, en cuyo caso se le indicará al usuatio. Funciona con paginador infinito siempre y cuando exista almenos una noticia para la fecha dada */

/* Estas variables se utilizan para control */
const batch = 10; //Cuantas noticias cargar por tanda en el paginador.
let from = 0; //Desde que nro de noticia cargar (información para el paginador)
let fetchInProgress = false; //Indica que se están trayendo noticias, sirve para que no se soliciten más noticias mientras hay una busqueda en proceso.

export default News = ({ navigation }) => {
  const [news, setNews] = useState([]); //Noticias que se muestran en pantalla
  const [fetchMoreNews, setFetchMoreNews] = useState(false); //Un banderín para indicar que se deben traer más noticias del backend
  const [message, setMessage] = useState("loading"); //Un código para indicarle mensajes informativos al usuario. Al comienzo es  "loading/cargando"
  const [currentDate, setCurrentDate] = useState(new Date()); //La fecha de la que se quieren obtener noticias
  const [dateChanged, setDateChanged] = useState(false); //Indica que la fecha cambió, sirve como banderín para indicar que se deben traer otras noticias del backend.

  useEffect(() => {
  /* Este UseEffect indica que se debe ir al backend, que es una operación asincrónica.
  *  Ocurre en dos situaciones: 
      -> si cambia la fecha, entonces se deben "limpiar" las noticias que se estan mostrando para traer unas nuevas. (cambia la query)
      -> si el paginador necesita que se traigan más noticias (recordar que se cargan en tandas de batch noticias)
  */
    if(dateChanged){
      /*Si cambió la fecha*/
      setDateChanged(false); //cambia a false ya que ahora se tratará una nueva fecha, y si vuelve a cambiar se debe indicar con true.
      setMessage("loading") //Indica al usuario que se están trayendo las noticias (cargando)
      setNews([]); //Se limpian las noticias porque la fecha cambió y las que se mostraban antes (de otra fecha) no sirven
      from = 0; //Se reestablece el "desde" ya que cambió la fecha. Ahora se debe traer desde la noticia 0.
      setFetchMoreNews(true); //Indica que se deben traer más noticias, debido al cambio de fecha.
      fetchInProgress = true; //Indica que hay una busqueda en proceso
    }
    if(fetchMoreNews){
      /* Si se solicitan más noticias*/
      newsHandler()
    }
  }, [fetchMoreNews, dateChanged])

  const newsHandler = async () => {
    /* Función para comunicarse con el backend */
    setFetchMoreNews(false); //Como ahora se traerán más noticias, se revierte el banderín.
    await fetchNews(batch, from, {date: formatDateForBackend(currentDate)}) //Comunicación asincrona con el backend (se delega a News.service). La query necesita: cantidad, desde, y la fecha que debe estar en un formato apropiado para el backend
    .catch(() => {
      //Si ocurre algun problema, entra a este bloque para indicar un mensaje de error.
      console.log("error dentro de fetched News");
      setMessage("error")
      return;
    })
    .then((result) => {
      //Si la busqueda al backend fue exitosa...
      if(result.length == 0){
        //Si no hay noticias, se indica al usuario con un mensaje de que no existen noticias
        setMessage("not found")
      }else{
        //Si hay noticias, se actualiza el state correspondiente (A las noticias existentes se les agrega las recien buscadas)
        fetchedNews = result;
        setNews([...news, ...result])
      }
    })
    .finally(() => fetchInProgress = false) //Finalmente se indica que la busqueda ha finalizado
  }

  const loadMoreNews = () => {
    //Este metodo lo usa la flatlist cuando se llega al final de la misma, es decir, "pide más noticias" para el paginador infinito
    if(!fetchInProgress){
      //Se buscarán más noticias solo si NO hay una busqueda en progreso.
      from = batch+from; //Se incrementa la variable "desde", para traer noticias nuevas
      fetchInProgress = true; //Se indica que hay una busqueda en progreso
      setFetchMoreNews(true); //Pide que se busquen más noticias, esto desencadena en el UseEffect
    }
  }

  const messageComponent = () => {
    /* Componente simple para mostrar en el paginador e indicar un mensaje*/
    let detail = "";
    let icon= "";
    switch (message){
      case 'loading':
        detail = "Cargando... espere por favor";
        break;
      case 'not found':
        detail = "No se han encontrado noticias";
        icon = "meh";
        break;
      case 'error':
        detail = "Ha ocurrido un error al obtener noticias";
        icon = "times-circle"
        break;
      default:
        detail = "No hay un mensaje de error para este caso"
        icon = "question";
        break;
    }
    return (
      <View style={styles.messageContainer}>
        {
          !icon ?  
          <ActivityIndicator color="black"/>
          :
          <Icon name={icon} type="font-awesome-5" color="black"/>
        }
        <Text style={styles.message}>{detail}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SmallHeader navigation={navigation}/>
      <DayNavigationBar currentDate={currentDate} setCurrentDate={setCurrentDate} setDateChanged={setDateChanged}/>
      <FlatList
      style={{ flex: 1, width: '90%'}}
      data={news}
      ListEmptyComponent={messageComponent} //Qué renderizar en lugar de tener una lista vacía
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
      onEndReachedThreshold={0.2} //A que distancia del final se llama a OnEndReached
      onEndReached={loadMoreNews} //Que hacer cuando se llega a la distancia indicada
      ListFooterComponent={news.length > 0 && messageComponent} //Mostrar este mensaje al final de la lista, unicamente si hay al menos una noticia, ya que, si no hay noticias el mensaje lo renderiza "listEmptyComponent"
      />
    </View>
  )
}
