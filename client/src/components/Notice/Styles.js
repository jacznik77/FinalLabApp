import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom: '5%',
        borderRadius: 16
    },
    textContainer: {
        flex: 1,
        paddingTop: '2%',
        paddingBottom: '2%',
        paddingLeft: '2%',
        paddingRight: '2%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        flexShrink: 1,
    },
    title: {
        fontWeight: '600',
    },
    content: {
        fontSize: 12,
    },
    newspaper: {
        textAlign: 'right',
        alignSelf: 'stretch',
        color: 'silver',
        fontSize: 12,
        textAlignVertical: 'bottom'
    },
    image: {
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        width: 100,
        height: '100%',
        resizeMode: 'cover',
    }
})