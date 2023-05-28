import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Pressable, TextInput } from 'react-native';
import styles from './EventScreenStyles';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../firebase';
import { useIsFocused } from "@react-navigation/native";

const EventScreen = () => {

    const isFocused = useIsFocused();

    const navigation: any = useNavigation();

    const goToCreateEventScreen = () => {
        navigation.navigate('CreateEventScreen');
    }

    const [documentData, setDocumentData] = useState<any>([]);

    useEffect(() => {
        console.log("useEffect içi");
        if (isFocused) {
            const fetchData = async () => {
                const querySnapshot = await getDocs(collection(db, "events"));
                querySnapshot.forEach((doc) => {
                    console.log("docData:", doc.data());
                    setDocumentData([...documentData, doc.data()])
                });
            };
            fetchData();
        }

    }, [isFocused])

    console.log("ARRAY:", documentData);


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.normal_flow_container}>
                <Text>Etkinlikeri gör</Text>
            </View>
            <View style={styles.out_flow_container}>
                <TouchableOpacity onPress={goToCreateEventScreen}>
                    <View style={styles.outside_button}>
                        <Text style={styles.inside_button}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

export default EventScreen;