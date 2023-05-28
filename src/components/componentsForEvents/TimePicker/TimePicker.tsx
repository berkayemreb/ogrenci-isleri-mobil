import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './TimePickerStyles';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { FontAwesome5 } from '@expo/vector-icons';
import { formatTime } from '../../../utils/formatTime';
interface TimePickerProps {
    value: Date,
    onChange: (date: Date) => void;
}

const TimePicker = (props: TimePickerProps) => {

    const [showPicker, setShowPicker] = useState<boolean>(false);
    const [shownTime, setShownTime] = useState<any>('');


    const handleTimeChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        if (event.type === 'set') {
            const currentDate = selectedDate || props.value;
            setShowPicker(false);
            props.onChange(currentDate);
            setShownTime(formatTime(currentDate));
        }
        else setShowPicker(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Etkinliğin Saati</Text>
            <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.inner_container}>
                <View style={styles.calendar_container}>
                    <FontAwesome5 name="clock" size={24} color="black" style={styles.icon} />
                    <Text style={styles.text}>{shownTime === '' ? 'Etkinlik saatini seçiniz...' : shownTime}</Text>
                </View>
            </TouchableOpacity>
            {showPicker && (
                <DateTimePicker
                    value={props.value}
                    mode={'time'}
                    display='default'
                    onChange={handleTimeChange}
                />
            )}
        </View>
    )
}

export default TimePicker;