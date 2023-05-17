import { StyleSheet, Dimensions } from "react-native";

const widthOfScreen = Dimensions.get('screen').width;
const heightOfScreen = Dimensions.get('screen').height;

export default StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    firstItem: {
        marginTop: 20,
    },
    image: {
        width: widthOfScreen / 1.5,
        height: heightOfScreen / 5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        resizeMode: 'contain',
    },
    inner_container: {
        width: widthOfScreen / 1.5,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#424242',
        opacity: 0.8,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 5,
    },
    name_container: {
        width: "100%"
    },
    name: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',
    },
    icon: {
        position: 'absolute',
        right: 0,
        bottom: 5
    }


})