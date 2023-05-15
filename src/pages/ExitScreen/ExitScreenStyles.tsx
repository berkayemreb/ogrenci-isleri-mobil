import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B9C4CF',

    },
    inner_container: {
        width: width / 1.75,
        height: height / 4,
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: '#fff',
        borderColor: '#fff',
        paddingHorizontal: 7,
    },
    cancel_button: {
        alignItems: 'flex-end',
        paddingTop: 5,
    },
    body_container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '80%'
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    exit_button: {
        width: '85%',
        backgroundColor: '#DF2E38',
        paddingVertical: 6,
        borderRadius: 50,
    },
    text_of_exit_button: {
        textAlign: 'center',
        color: '#ffffff',
    },

})