import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
//import GatoTazaImage from './assets/gatoTaza.png';
import Header from '../../components/Header/Header';

const Home = () => {
return(
<View style={styles.container}>
<Header></Header>
<Text style={styles.text}>Reciba las noticias más relevantes de distintas fuentes para no perder su valioso tiempo, solo en lo que ocupa en tomarse una taza de café.</Text>
<View style={styles.buttonsContainer}>

<Button title='Leer noticias' color='#c28c55'> </Button>
<Button title='Cargar noticia' color='#c28c55'> </Button>

</View>
<StatusBar style="auto" />
</View>
)}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#ffc48e',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    text: {
      paddingTop: 0,
      padding: 30,
      fontSize: 20
    },
    buttonsContainer: {
      margin: 20,
      flexDirection: 'column',
      display: 'flex',
      justifyContent: 'space-around',
      flex: 0.6
    }
  })
;

export default Home;