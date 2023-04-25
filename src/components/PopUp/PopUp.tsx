import React, { ReactNode } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import styles from './PopUpStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
interface PopUpTypes {
    title?: string;
    workingHoursIcon?: any;
    workingHoursText?: string;
    phoneNumberIcon?: any;
    phoneNumberText?: string;
    closePopUp(): void;
}

const PopUp = (props: PopUpTypes) => {

    const callNumber = (phoneNumber: ReactNode): void => {
        const url = `tel:${phoneNumber}`;
        Linking.openURL(url);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <View style={styles.header_container}>
                    <View style={styles.title_container}>
                        <Text style={styles.title}>{props.title}</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={props.closePopUp}>
                        <View>
                            <MaterialCommunityIcons name="window-close" size={28} color="#001023AA" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.label_value_container}>
                    <View style={styles.label}>{props.workingHoursIcon}</View>
                    <Text>{props.workingHoursText}</Text>
                </View>
                <TouchableOpacity style={styles.label_value_container} onPress={() => callNumber(props.phoneNumberText)}>
                    <View style={styles.label}>{props.phoneNumberIcon}</View>
                    <Text>{props.phoneNumberText}</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default PopUp;