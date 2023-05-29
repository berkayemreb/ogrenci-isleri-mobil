import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './EventScreenStyles';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useIsFocused } from "@react-navigation/native";

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

    const renderEvent = ({ item }: any) => (<Event item={item} />)

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
    return (
        <TouchableOpacity onPress={() => { console.log('tıklanan Id:', props.item.id) }} >
            <Text>{props.item.editorName}</Text>
            <Text>{props.item.id}</Text>
        </TouchableOpacity>
    )
}