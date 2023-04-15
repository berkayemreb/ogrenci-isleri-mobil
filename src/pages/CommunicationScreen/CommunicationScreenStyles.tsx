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
        top: 0,
        left: 0,
        zIndex: 1,
        width: width,
        height: height,
        backgroundColor: 'rgba(0,16,35,0.6)',
    },
    popUpInnerContainer: {
        padding: 10,
        width: 200,
        backgroundColor: 'white',
        position: 'absolute',
        top: '49%',
        left: '49%',
        transform: [
            { translateX: - width * 0.25 },
            { translateY: - height * - 0.01 }
        ]
    }
})
