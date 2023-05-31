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
        marginTop: 15,
        marginBottom: 10
    },
    image: {
        width: "80%",
        height: heightOfDevice / 4,
        resizeMode: 'stretch',
        borderRadius: 10
    },
    inner_container: {
        flex: 1,
        paddingHorizontal: 15
    },
    header_name_container: {
        marginBottom: 5,
    },
    event_name_text: {
        textAlign: 'center',
        marginBottom: 2,
        fontSize: 18,
        fontWeight: '600',
        color: '#FF7F50'
    },
    event_type_text: {
        textAlign: 'center',
        color: '#E57C23'

    },
    body_container: {
        marginTop: 5,
        paddingVertical: 7,
        paddingHorizontal: 9,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        height: heightOfDevice / 5,
        justifyContent: 'space-between'
    },
    description_text: {
        color: '#333333',
        fontSize: 16,
        marginBottom: 10,
    },
    footer_container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    editor_name_text: {
        flex: 1,
        textAlign: 'center',
    },
    phone_number_text: {
    },
    label_and_icon_container: {
        flexDirection: 'row',
        marginBottom: 4,

    },
    icon: {
        marginRight: 5,
    },
    join_button_contanier: {
        backgroundColor: '#4475a6',
        padding: 7,
        borderRadius: 5
    },
    unjoin_button_contanier: {
        backgroundColor: 'red',
        padding: 7,
        borderRadius: 5
    },
    button_text: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    },
})