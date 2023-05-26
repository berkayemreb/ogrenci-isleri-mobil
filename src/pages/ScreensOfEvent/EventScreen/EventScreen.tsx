import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Pressable, TextInput } from 'react-native';
import styles from './EventScreenStyles';
import { useNavigation } from '@react-navigation/native';

const EventScreen = () => {

    const navigation: any = useNavigation();

    const goToCreateEventScreen = () => {
        navigation.navigate('CreateEventScreen');
    }

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