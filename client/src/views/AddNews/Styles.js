import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFE4D3',
        alignItems: 'center',
    },
    form: {
        width: '85%',
        height: '75%',
    },
    formBody: {
        backgroundColor: 'white',
        paddingHorizontal: 12,
        paddingTop: 16,
    },
    formTitle: {
        backgroundColor: '#8E4C3E',
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 20,
        paddingVertical: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8 
    },
    scroll: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    dateLabel: {
        paddingLeft: 12,
        fontWeight: '600',
        fontSize: 16,
        marginBottom: 5
    },
    dateContainer: {
        flexDirection: 'row',
        marginLeft: 12,
        marginBottom: 26,
    },
    dateIcon: {
        backgroundColor: '#8E4C3E',
        paddingVertical: 8,
        paddingHorizontal: 12,
        alignSelf: 'center',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    date: {
        fontSize: 16,
        color: '#BA796B',
        backgroundColor: '#FFE4D3',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        paddingVertical: 9,
        paddingHorizontal: 12,
        alignSelf: 'center',
    },
    addButton: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: 'white',
        padding: 20
    },
    backButton : {
        flexGrow: 1,
        justifyContent: 'center'
    }
})