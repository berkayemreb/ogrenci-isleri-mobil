import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, TextInput, Platform, Text, Button } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './DatePickerStyles';
import { formatDate } from '../../../utils/formatDate';

interface DatePickerProps {
    value: Date,
    onChange: (date: Date) => void;
}

const DatePicker = (props: DatePickerProps) => {

    const [shownDate, setShownDate] = useState<any>('');
    const [showPicker, setShowPicker] = useState<boolean>(false);

    const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        if (event.type === 'set') {
            const currentDate = selectedDate || props.value;
            setShowPicker(false);
            props.onChange(currentDate);
            setShownDate(formatDate(currentDate));
        }
        else setShowPicker(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Etkinliğin Tarihi</Text>
            <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.inner_container}>
                <View style={styles.calendar_container}>
                    <FontAwesome5 name="calendar-alt" size={24} color="black" style={styles.icon} />
                    <Text style={styles.text}>{shownDate === '' ? 'Etkinlik tarihini seçiniz...' : shownDate}</Text>
                </View>
            </TouchableOpacity>
            {showPicker && (
                <DateTimePicker
                    value={props.value}
                    mode="date"
                    display="calendar"
                    onChange={handleDateChange}
                />
            )}
        </View>
    );
};


export default DatePicker;