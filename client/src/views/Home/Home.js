import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';
import Header from '../../components/Header/Header';
import HomeButton from '../../components/HomeButton/HomeButton';

export default Home = ({ navigation }) => { //navigation es un prop automatico de react-navigation y se usa para cambiar entre pantallas
  const newsImage = { uri: "https://cdn3.iconfinder.com/data/icons/eziconic-v1-0/256/02.png" };
  const plusImage = {uri: "https://www.clker.com/cliparts/L/q/T/i/P/S/add-button-white-md.png"};
  return (
    <View style={styles.container}>
      <Header/>
      <Text style={styles.text}>
        ¿Te imaginas obtener las noticias que quieres mientras disfrutas de tu taza de café? Con nuestra app, eso es posible: olvídate de perder tiempo buscando noticias, nosotros lo hacemos por ti.
        {'\n'}{'\n'}
        En solo unos minutos, tendrás toda la información que necesitas para estar al tanto, ¡así puedes aprovechar al máximo tu tiempo y tu café!
        {'\n'}{'\n'}
        Además, nuestras noticias provienen de diversas fuentes, brindándote una perspectiva completa y variada.
      </Text>
      <View style={styles.buttonsContainer}>
        <HomeButton imageSource={newsImage} text={`Leer \nNoticias`} onPress={() => { navigation.push('News') }}/>
        <HomeButton imageSource={plusImage} text={`Agregar \nNoticia`} onPress={() => { navigation.push('AddNews') }}/>
      </View>
      <StatusBar style="auto" animated={false}/>
    </View>
  )
}