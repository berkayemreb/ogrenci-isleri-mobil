import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '85%',
        backgroundColor: '#e7e7e7',
        paddingTop: 35,
        paddingBottom: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    input: {
        height: 30,
        borderWidth: 1,
        borderColor: '#a0a0a0',
        marginHorizontal: 18,
        marginBottom: 15,
        paddingHorizontal: 7,
        borderRadius: 5,
    },
    button: {
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: '#fcbe16',
        marginHorizontal: 15,
        borderRadius: 50,
    },
    buttonText: {
        paddingVertical: 7,
        fontSize: 16,
        fontWeight: '700',
    }
})