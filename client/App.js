import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import Routes from './src/routes/Routes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Routes /*Componente con la lógica del stack de pantallas*//>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});