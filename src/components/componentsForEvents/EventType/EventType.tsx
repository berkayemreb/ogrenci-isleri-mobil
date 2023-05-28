import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './EventTypeStyles';
import { RadioButton } from 'react-native-paper';

interface EventTypeTypes {
    value: string,
    onChange(): void,
}

const EventType = (props: EventTypeTypes) => {

    return (
        <View style={styles.container}>
            <View style={styles.header_name_container}>
                <Text style={styles.header_name}> Etkinliğin Türü</Text>
            </View>
            <RadioButton.Group onValueChange={props.onChange} value={props.value}>
                <View style={styles.inner_container}>
                    <RadioButton.Item label="Bilgi Yarışması" value="Bilgi Yarışması" color='#4475a6' style={styles.radio_item_label} labelStyle={{ fontSize: 14 }} />
                    <RadioButton.Item label="Tanışma Etkinliği" value="Tanışma Etkinliği" color='#4475a6' style={styles.radio_item_label} labelStyle={{ fontSize: 14 }} />
                    <RadioButton.Item label="Kahvaltı Buluşması" value="Kahvaltı Buluşması" color='#4475a6' style={styles.radio_item_label} labelStyle={{ fontSize: 14 }} />
                    <RadioButton.Item label="Film Gecesi" value="Film Gecesi" color='#4475a6' style={styles.radio_item_label} labelStyle={{ fontSize: 14 }} />
                </View>
            </RadioButton.Group>
        </View>
    )
}

export default EventType;