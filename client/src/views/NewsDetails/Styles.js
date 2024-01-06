import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFE4D3',
        alignItems: 'center',
    },
    news: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: '10%',
        marginHorizontal: '5%',
        paddingBottom: '5%',
        flex: 1,
        borderRadius: 8
    },
    header: {
        alignSelf: 'stretch',
    },
    linearGradient: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    image:{
        height: 250,
        alignSelf: 'stretch',
    },
    titleContainer: {
        position: 'absolute',
        bottom: 20,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 18,
        color: 'white',
        fontWeight: '600',
    },
    content: {
        paddingHorizontal: 20
    },
    source: {
        marginBottom: 10,
        marginRight: 20,
        alignSelf: 'flex-end',
    },
    newspaperSource: {
        fontWeight: '600',
        color: 'silver'
    },
    date: {
        color: 'silver',
        textAlign: 'right'
    },
    curvedTop: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    backToList: {
        marginTop: 'auto',
        marginBottom: '10%'
    },
    scrollView: {
        marginVertical: 20
    }
});