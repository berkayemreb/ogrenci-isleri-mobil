import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        flex: 1,
        alignSelf: 'stretch'
    },
    popUpContainer: {
        position: 'absolute',
        zIndex: 1,
        width: width,
        height: height,
        backgroundColor: 'rgba(0,16,35,0.6)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    popUpInnerContainer: {
        padding: 10,
        width: 200,
        backgroundColor: 'white',
    }
})
