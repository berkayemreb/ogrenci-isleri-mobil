import { useFonts } from 'expo-font';
import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

() => {
    const [fontsLoaded] = useFonts({
        'SommetRoundedRegular': require('../../../assets/fonts/SommetRoundedRegular.otf'),
    });
}

export default StyleSheet.create({
    container: {
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    image: {
        width: width / 1.5,
        height: height / 7,
        resizeMode: 'contain',
    },
    buttons_container: {
        marginTop: 5,
        display: 'flex',
        flexDirection: 'row',
    },
    login_container: {
        width: '30%',
        alignItems: 'center',
        backgroundColor: '#fcbe16',
        padding: 7,
    },
    login_text: {
        color: '#333333',
        fontSize: 15,
        fontFamily: 'SommetRoundedRegular',
    },
    signUp_container: {
        marginLeft: 20,
        width: '30%',
        alignItems: 'center',
        padding: 7,
        backgroundColor: '#fcbe16',
    },
    signUp_text: {
        color: '#333333',
        fontSize: 15,
        fontFamily: 'SommetRoundedRegular',
    },
});

