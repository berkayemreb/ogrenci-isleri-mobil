import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, TouchableWithoutFeedback, Image } from 'react-native';
import styles from './EventScreenStyles';
import eventItemStyles from '../../../components/componentsForEvents/Event/EventStyles';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useIsFocused } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';

interface EventProps {
    id: any,
    editorName: any,
}

const EventScreen = () => {

    const navigation: any = useNavigation();

    const goToCreateEventScreen = () => {
        navigation.navigate('CreateEventScreen');
    }

    const [events, setEvents] = useState<EventProps[]>([]);
    const isFocused = useIsFocused();


    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventsRef = collection(db, 'events');
                const snapshot = await getDocs(eventsRef);

                const fetchedEvents: any = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setEvents(fetchedEvents);
            } catch (error) {
                console.log('Firestore verileri çekilirken bir hata oluştu:', error);
            }
        };

        if (isFocused) {
            fetchEvents();
        }
    }, [isFocused]);

    // ... bileşenin geri kalan kısmı ...
    console.log('DATA:', events);

    const renderEvent = ({ item, index }: any) => (<Event item={item} index={index} />)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.normal_flow_container}>
                <FlatList data={events} renderItem={renderEvent} keyExtractor={(item) => item.id.toString()} />
            </View>
            <View style={styles.out_flow_container}>
                <TouchableOpacity onPress={goToCreateEventScreen}>
                    <View style={styles.outside_button}>
                        <Text style={styles.inside_button}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

export default EventScreen;

const Event = (props: any) => {

    const navigation: any = useNavigation();

    const itemStyle = props.index === 0 ? eventItemStyles.firstItem : null;

    let imageSource: number;
    switch (props.item.eventType) {
        case 'Bilgi Yarışması':
            imageSource = require('../../../../assets/images/bilgi-yarismasi.jpg');
            break;
        case 'Film Gecesi':
            imageSource = require('../../../../assets/images/film-gecesi.jpg');
            break;
        case 'Kahvaltı Buluşması':
            imageSource = require('../../../../assets/images/kahvalti-bulusmasi.jpg');
            break;
        case 'Tanışma Etkinliği':
            imageSource = require('../../../../assets/images/tanisma-etkinligi.jpg');
            break;
        default:
            imageSource = require('../../../../assets/images/default.jpg');
            break;
    }

    const onClickEventItem = () => {
        navigation.navigate('EventDetailScreen', { item: props.item, imageSource });
    }

    return (
        <View style={eventItemStyles.outer_container}>
            <TouchableWithoutFeedback onPress={onClickEventItem}>
                <View style={[eventItemStyles.container, itemStyle]}>
                    <View>
                        <Image style={eventItemStyles.image} source={imageSource} />
                        <View style={eventItemStyles.inner_container}>
                            <View style={eventItemStyles.name_container}>
                                <Text style={eventItemStyles.name}>{props.item.eventType}</Text>
                            </View>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color="#ffffff" style={eventItemStyles.icon} />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}