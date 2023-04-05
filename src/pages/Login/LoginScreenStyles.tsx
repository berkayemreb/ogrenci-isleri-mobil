import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d8d8d8',
    },
    inner_container: {
        height:'95%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: width / 1.5,
        height: height / 7,
        resizeMode: 'contain',
    },
    buttons_container: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    normal_login_container: {
        width: '30%',
        backgroundColor: 'rgba(252, 190, 22, 0.65)',
        alignItems: 'center',
        padding: 7,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    active_login_container: {
        width: '30%',
        backgroundColor: '#e7e7e7',
        alignItems: 'center',
        padding: 7,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    normal_login_text: {
        color: '#333333',
        fontSize: 15,
        fontWeight: '500',
    },
    active_login_text: {
        color: '#333333',
        fontSize: 17,
        fontWeight: '700',
    },
    normal_signup_container: {
        marginLeft: 20,
        width: '30%',
        alignItems: 'center',
        padding: 7,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: 'rgba(252, 190, 22, 0.65)',
    },
    active_signup_container: {
        marginLeft: 20,
        width: '30%',
        alignItems: 'center',
        padding: 7,
        backgroundColor: '#e7e7e7',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    normal_signup_text: {
        color: '#333333',
        fontSize: 15,
        fontWeight: '500',
    },
    active_signup_text: {
        color: '#333333',
        fontSize: 17,
        fontWeight: '700',
    },
});

