import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const DayNavigationBar = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button title='menu' color='#c28c55' onPress={() => {navigation.pop()}}></Button>

            <View style={styles.textContainer}>
                <Button title=' < ' color='#c28c55'></Button>
                <Text style={styles.text}>Miercoles 23</Text>
                <Button title=' > ' color='#c28c55'></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        alignItems: 'center',
        flexDirection: 'row',
    },
    textContainer: {
        backgroundColor: '#c28c55',
        width: 200,
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
    },
    text: {
        fontSize: 20,
    }
}
)

export default DayNavigationBar;