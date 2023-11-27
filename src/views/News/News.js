import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import DayNavigationBar from '../../components/DayNavigationBar/DayNavigationBar';

const News = ({navigation}) => {


  return (
    <View style={styles.container}>
      <DayNavigationBar navigation={navigation}/>
      <Text style={styles.text}>Pantalla News</Text>
      <View style={styles.buttonsContainer}>

        <Button title='Leer noticias' color='#c28c55'> </Button>
        <Button title='Cargar noticia' color='#c28c55'> </Button>

      </View>
    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc48e',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 0.6
  }
})
  ;

export default News;