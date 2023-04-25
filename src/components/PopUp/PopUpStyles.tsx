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
        borderRadius: 3,
        padding: 10,
        width: width / 2,
        backgroundColor: 'white',
    },
    header_container: {
        display: 'flex',
        flexDirection: 'row',
    },
    button: {
        width: '15%',
    },
    title_container: {
        width: '85%',
        alignItems: 'flex-end',
        marginBottom: 5,
    },
    title: {
        color: '#333333',
        fontWeight: '600',
        fontSize: 15,
        lineHeight: 27,
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