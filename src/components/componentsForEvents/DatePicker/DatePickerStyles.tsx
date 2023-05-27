import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginVertical: 10
    },
    inner_container: {
        width: '70%',
        marginTop: 5,
    },
    label: {
        color: '#333333',
        fontWeight: '600',
    },
    calendar_container: {
        flexDirection: 'row',
    },
    icon: {
        marginTop: 2,
        marginRight: 10
    },
    text: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 50,
        padding: 5,
        textAlign: 'center',
        backgroundColor: '#ffffff',
        borderColor: '#a0a0a0',
        color: '#333333'
    }
})