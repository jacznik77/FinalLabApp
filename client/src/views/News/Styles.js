import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFE4D3',
      alignItems: 'center',
    },
    messageContainer:{
      flexDirection: "row",
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 16
    },
    message: {
      marginLeft: 6,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    flatList: {
      width: '90%',
      marginBottom: 25
    }
});