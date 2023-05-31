import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Linking, Alert } from 'react-native';
import styles from './EventDetailScreenStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { formatDateWithSecondsInfo } from '../../../utils/formatDateWithSecondsInfo';
import { formatTimeWithSecondsInfo } from '../../../utils/formatTimeWithSecondsInfo';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const EventDetailScreen = () => {

    const [hasJoin, setHasJoin] = useState<boolean>(false);

    const route: any = useRoute();

    const { item, imageSource } = route.params;

    const user: any = useSelector<RootState>((state) => state.user.user)

    const eventDate = formatDateWithSecondsInfo(item.eventDate.seconds);
    const eventTime = formatTimeWithSecondsInfo(item.eventTime);

    const callNumber = (phoneNumber: string): void => {
        const url = `tel:${phoneNumber}`;
        Linking.openURL(url);
    };

    const onAttendEvent = () => {
        setHasJoin(!hasJoin);
        Alert.alert('', hasJoin ? `${user.email} mail adresiyle etkinliğe katılmayı iptal ettiniz.` : `Etkinliğe ${user.email} mail adresiyle başarıyla katıldınız...`, [{ text: 'TAMAM' }])
    }

    return (

        <View style={styles.container}>
            <View style={styles.image_container}>
                <Image style={styles.image} source={imageSource} />
            </View>
            <View style={styles.inner_container}>
                <View style={styles.header_name_container}>
                    <Text style={styles.event_name_text}>{item.eventName}</Text>
                    <Text style={styles.event_type_text}>~ {item.eventType} ~</Text>
                </View>
                <View style={styles.body_container}>
                    {item.eventDescription && <Text style={styles.description_text}>{item.eventDescription}</Text>}
                    <View style={styles.footer_container}>
                        <View>
                            <View style={styles.label_and_icon_container}>
                                <MaterialCommunityIcons name="calendar-month" size={20} color="black" style={styles.icon} />
                                <Text>{eventDate}</Text>
                            </View>
                            <View style={styles.label_and_icon_container}>
                                <MaterialCommunityIcons name="clock-outline" size={20} color="black" style={styles.icon} />
                                <Text>{eventTime}</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.label_and_icon_container}>
                                <MaterialCommunityIcons name="account-supervisor" size={20} color="black" style={styles.icon} />
                                <Text style={styles.editor_name_text}>{item.editorName}</Text>
                            </View>
                            <TouchableOpacity style={styles.label_and_icon_container} onPress={() => callNumber(item.phoneNumber)}>
                                <MaterialCommunityIcons name="phone-in-talk" size={20} color="black" style={styles.icon} />
                                <Text style={styles.phone_number_text}>{item.phoneNumber}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={!hasJoin ? styles.join_button_contanier : styles.unjoin_button_contanier} onPress={onAttendEvent}>
                    <Text style={styles.button_text}>{hasJoin ? 'Etkinliğe Katılmayı İptal Et' : 'Etkinliğe Katıl'}  </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EventDetailScreen;