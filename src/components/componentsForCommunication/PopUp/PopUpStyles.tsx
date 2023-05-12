import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 1,
        width: width,
        height: height,
        backgroundColor: 'rgba(0,16,35,0.6)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inner_container: {
        borderRadius: 6,
        width: width / 1.9,
        backgroundColor: 'white',
        padding: 7
    },
    header_container: {
        display: 'flex',
    },
    button: {
        alignItems: 'flex-end',
    },
    title_container: {
        alignItems: 'center',
        marginTop: -8,
    },
    title: {
        color: '#333333',
        fontWeight: '600',
        fontSize: 15,
    },
    body_container:{
        paddingLeft: 5,
        paddingTop: 5
    },
    label_value_container: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 5,
    },
    label: {
        marginRight: 7
    }
})