import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button } from '@rneui/themed';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header/Header';

const Home = ({ navigation }) => { //navigation es un prop automatico de react-navigation y se usa para cambiar entre pantallas

  return (
    <View style={styles.container}>
      <Header></Header>
      <Text style={styles.text}>¿Te imaginas obtener las noticias que quieres mientras disfrutas de tu taza de café? Con nuestra app, eso es posible. {'\n'}{'\n'}Olvídate de perder tiempo buscando noticias, nosotros lo hacemos por ti. En solo unos minutos, tendrás toda la información que necesitas para estar al tanto, ¡así puedes aprovechar al máximo tu tiempo y tu café! {'\n'}{'\n'}Además, nuestras noticias provienen de diversas fuentes, brindándote una perspectiva completa y variada.</Text>
      <View style={styles.buttonsContainer}>

        <View style={{ paddingRight: 30 }}>
          <Button title='Leer noticias'
            titleStyle={{ color: 'black' }}
            color='#9d6b37' radius='lg'
            onPress={() => { navigation.push('News') }}></Button>
        </View>
        <Button title='Cargar noticia'
          titleStyle={{ color: 'black' }}
          color='#9d6b37' radius='lg'
          onPress={() => { navigation.push('LoadNotice') }}></Button>

      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffc48e',
    justifyContent: 'space-around',
  },
  text: {
    paddingTop: 0,
    padding: 30,
    fontSize: 18
  },
  buttonsContainer: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
  ;

export default Home;