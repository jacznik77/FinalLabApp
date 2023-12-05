import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button } from '@rneui/themed';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header/Header';

const Home = ({ navigation }) => { //navigation es un prop automatico de react-navigation y se usa para cambiar entre pantallas

  return (
    <View style={styles.container}>
      <Header></Header>
      <Text style={styles.text}>Reciba las noticias más relevantes de distintas fuentes para no perder su valioso tiempo, solo en lo que ocupa en tomarse una taza de café.</Text>
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
    fontSize: 20
  },
  buttonsContainer: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
  ;

export default Home;