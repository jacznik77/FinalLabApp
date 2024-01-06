import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
    container: {
      marginBottom: 20,
      flexDirection: 'row',
      backgroundColor: '#BA796B',
      width: '80%',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 16
    },
    text: {
      fontSize: 20,
      color: 'white'
    },
    icon:{
      backgroundColor: '#8E4C3E',
      width: '15%',
      alignSelf: 'stretch',
      justifyContent: 'center',
      borderTopLeftRadius: 16,
      borderBottomLeftRadius: 16
    },
    dateControl: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexGrow: 1
    }
  })