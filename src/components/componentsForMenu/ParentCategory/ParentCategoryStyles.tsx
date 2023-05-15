import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        margin: 15,
        borderWidth: 1,
        borderColor: '#a0a0a0',
        borderTopLeftRadius: 60,
        borderBottomLeftRadius: 60,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,

    },
    image_container: {
        padding: 7,
        width: '40%'
    },
    image: {
        minHeight: 85,
        resizeMode: 'contain',
        borderTopLeftRadius: 60,
        borderBottomLeftRadius: 60,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,

    },
    categoryName_container: {
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryName: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
    icon_container: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -3,
    }

})