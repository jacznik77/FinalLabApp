import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';
import Header from '../../components/Header/Header';
import HomeButton from '../../components/HomeButton/HomeButton';

/* Pantalla principal en la que inicia la aplicación.
   Se muestra el Header que contiene el título y el logo, seguido de una introducción de la funcionalidad de la app.
   Contiene dos botones para dirigirse a las demás pantallas. */

export default Home = ({ navigation }) => { //navigation es un prop automatico de react-navigation y se usa para cambiar entre pantallas

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>
        ¿Te imaginas obtener las noticias que quieres mientras disfrutas de tu taza de café? Con nuestra app, eso es posible: olvídate de perder tiempo buscando noticias, nosotros lo hacemos por ti.
        {'\n'}{'\n'}
        En solo unos minutos, tendrás toda la información que necesitas para estar al tanto, ¡así puedes aprovechar al máximo tu tiempo y tu café!
        {'\n'}{'\n'}
        Además, nuestras noticias provienen de diversas fuentes, brindándote una perspectiva completa y variada.
      </Text>
      <View style={styles.buttonsContainer}>
        <HomeButton
          imageSource={require('../../../assets/news.png')}
          text={`Leer \nNoticias`}
          onPress={() => { navigation.push('News') }} />
        <HomeButton
          imageSource={require('../../../assets/add-button-white-md.png')}
          text={`Agregar \nNoticia`}
          onPress={() => { navigation.push('AddNews') }} />
      </View>
      <StatusBar style="auto" animated={false} />
    </View>
  )
}