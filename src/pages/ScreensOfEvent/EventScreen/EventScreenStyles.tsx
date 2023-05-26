import { StyleSheet, Dimensions } from 'react-native';

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;

export default StyleSheet.create({
    container: {
    },
    normal_flow_container: {
    },
    out_flow_container: {
        width: widthScreen / 1.10,
        height: heightScreen / 1.25,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    outside_button: {
        height: 75,
        width: 75,
        borderRadius: 50,
        backgroundColor: '#4475a6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inside_button: {
        fontSize: 50,
        marginTop: -4,
        color: '#ffffff',
        fontWeight: '300',

    },
})