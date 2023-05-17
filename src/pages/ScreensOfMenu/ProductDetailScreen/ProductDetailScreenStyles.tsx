import { StyleSheet, Dimensions } from "react-native";

const heightOfDevice = Dimensions.get('screen').height;
const widthOfDevice = Dimensions.get('screen').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e6e6',

    },
    image_container: {
        alignItems: 'center',
        marginVertical: 15
    },
    image: {
        width: "80%",
        height: heightOfDevice / 3,
        resizeMode: 'stretch',
        borderRadius: 70
    },
    inner_container: {
        flex: 1,
        paddingHorizontal: 15
    },
    header_contanier: {
    },
    headerName: {
        fontSize: 20,
        color: '#333333',
        fontWeight: '700',
    },
    description: {
        fontSize: 15,
        marginTop: 5,
        lineHeight: 21,
        color: '#333333'
    },
    line: {
        borderBottomWidth: 2,
        borderBottomColor: '#a0a0a0',
        borderStyle: 'dashed',
        marginVertical: 20,
        marginHorizontal: 3
    },
    price_container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    price: {
        fontStyle: 'italic',
        fontWeight: "700",
        color: '#333333',
        fontSize: 20,
    },
    price_icon: {
        marginTop: 3.5,
    }


})