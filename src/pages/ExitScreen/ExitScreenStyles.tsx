import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c0c0c0'
    },
    inner_container: {
        width: width / 1.75,
        height: height / 3.25,
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: '#fff',
        borderColor: '#fff',
        paddingHorizontal: 7,
    },
    message_container: {
        flex: 0.75,
        justifyContent: 'flex-end'
    },
    email_value: {
        fontWeight: '600',
        textDecorationLine: 'underline',
        textAlign: 'center',
        fontSize: 15,
        color: '#333333',
    },
    text: {
        textAlign: 'center',
        fontSize: 15,
        color: '#333333',
    },
    buttons_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -12,
    },
    exit_button: {
        marginBottom: 6,
        width: '85%',
        backgroundColor: '#FF0111',
        paddingVertical: 6,
        borderRadius: 50,
    },
    text_of_exit_button: {
        textAlign: 'center',
        color: '#fff',
    },
    cancel_button: {
        width: '85%',
        backgroundColor: '#1E90FF',
        paddingVertical: 6,
        borderRadius: 50,
    },
    text_of_cancel_button: {
        textAlign: 'center',
        color: '#fff',
    }
})