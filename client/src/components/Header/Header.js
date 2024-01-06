import React from 'react';
import { View, Text, Image} from 'react-native';
import styles from './Styles';

export default Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Your Daily Coffee </Text>
            <Image source={require('../../../assets/gatoTaza.png')} style={styles.image}/>
        </View>
    )
};