import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./Styles";

export default Notice = ({ navigation, imageSource, title, newspaper, content, url, date }) => {
    return (
       <TouchableOpacity
        style={styles.container}
        activeOpacity={0.8}
        onPress={() => {navigation.push('NewsDetails', { imageSource, title, content, newspaper, url, date})}}
        >
        <Image
            source={{ uri: imageSource }}
            style={styles.image}
        />
        <View style={styles.textContainer}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.content} numberOfLines={3}>
                {content}
            </Text>
            <Text style={styles.newspaper}>
                {newspaper}
            </Text>
        </View>
       </TouchableOpacity>
    )}
