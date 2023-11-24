import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Button } from 'react-native';
import Routes from './src/routes/Routes';
//import GatoTazaImage from './assets/gatoTaza.png';
import Header from './src/components/Header/Header';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

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
});

/*
    <View style={styles.container}>
      <Header></Header>
      <Text style={styles.text}>Reciba las noticias más relevantes de distintas fuentes para no perder su valioso tiempo, solo en lo que ocupa en tomarse una taza de café.</Text>
      <View style={styles.buttonsContainer}>

      <Button title='Leer noticias' color='#c28c55'> </Button>
      <Button title='Cargar noticia' color='#c28c55'> </Button>

      </View>
      <StatusBar style="auto" />
    </View>
*/