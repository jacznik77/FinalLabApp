import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/gatoTaza.png')} style={styles.image}></Image>
            <Text style={{ fontSize: 30}}> Your daily coffee </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        height: 80,
        width: 80,
        borderRadius: 30,
    },
    container:{
        flexDirection: 'row',
        paddingTop: 50,
        alignItems: 'center',
    }
})
export default Header;