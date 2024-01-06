import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#8E4C3E',
    },
    image: {
        resizeMode: 'contain',
        width: '30%',
        height: '90%',
        marginLeft: '5%'
    },
    text:{
        fontSize: 32,
        fontWeight: '600',
        color: 'white',
        flexWrap: 'wrap',
        textAlign: 'center',
        marginLeft: '10%',
    }

})