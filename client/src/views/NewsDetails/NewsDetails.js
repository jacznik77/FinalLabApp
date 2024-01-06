import React, { PureComponent } from "react";
import { View, Text, ImageBackground, Linking, ScrollView } from "react-native";
import SmallHeader from "../../components/SmallHeader/SmallHeader";
import { Button } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./Styles";

const NoticeDetails = ({ route, navigation }) => {
    const { imageSource, title, content, newspaper, url, date } = route.params;

    const handleOpenLink = () => {
        Linking.openURL(url).catch((err) => console.error('Error al abrir el enlace', err));
      };
    return (
        <View style={styles.container}>
            <SmallHeader navigation={navigation}/>
            <View style={styles.news}>
                <ImageBackground source={{uri: imageSource}} style={styles.image} imageStyle={styles.curvedTop}>
                    <LinearGradient 
                    colors={['#ffffff00', 'black']}
                    style={styles.LinearGradient}
                    />
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                </ImageBackground>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.content}>{content}</Text>
                </ScrollView>
                <View style={styles.source}>
                    <Text style={styles.newspaperSource}>{newspaper}</Text>
                    <Text style={styles.date}>{date.replace(/-/g, '/')}</Text>
                </View>
                <Button
                    title="Leer Noticia Completa"
                    color="#BA796B"
                    radius="lg"
                    onPress={handleOpenLink}
                />
            </View>
            <View style={styles.backToList}>
                <Button
                    title="Volver al Listado de Noticias"
                    color='#8E4C3E'
                    radius='lg'
                    onPress={() => { navigation.pop() }}
                />
            </View>
        </View>
    )
}

export default NoticeDetails;