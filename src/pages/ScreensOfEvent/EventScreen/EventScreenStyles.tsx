import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    normal_flow_container: {
    },
    out_flow_container: {
        position: 'absolute',
        right: 18,
        bottom: 32,
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