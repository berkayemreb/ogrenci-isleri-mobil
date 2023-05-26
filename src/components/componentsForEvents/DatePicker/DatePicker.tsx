import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, TextInput, Platform, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './DatePickerStyles';

const DatePicker = (props: any) => {

    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {

        console.log('selectedDate:', selectedDate);

    }, [selectedDate])

    const toggleDatePicker = () => {
        setShowPicker(!showPicker);
        console.log('takvim inputuna tıklandı');
    }

    const onChange = ({ type }: any, selectedDate: any) => {
        if (type == 'set') {
            const currentData = selectedDate;
            setDate(currentData);

            if (Platform.OS === 'android') {
                toggleDatePicker();
                setSelectedDate(formatDate(currentData));
            }
        } else {
            toggleDatePicker();
        }
    }

    const formatDate = (rawDate: any) => {
        let date = new Date(rawDate);

        let year = date.getFullYear();
        let month: any = date.getMonth() + 1;
        let day: any = date.getDate();

        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;

        return `${day}/${month}/${year}`;

    }

    return (
        <View >
            <Text style={styles.label}>Etkinliğin Tarihini Seçiniz</Text>
            {showPicker &&
                <DateTimePicker
                    mode='date'
                    display='spinner'
                    value={date}
                    onChange={onChange}
                    minimumDate={new Date()}
                    maximumDate={new Date('2030-12-31')}
                />}
            <TouchableOpacity onPress={toggleDatePicker} style={styles.calendar_container}>
                <FontAwesome5 name="calendar-alt" size={24} color="black" style={styles.icon} />
                <TextInput
                    placeholder={selectedDate}
                    editable={false}
                    value={selectedDate}
                    style={styles.input}
                />
            </TouchableOpacity>


        </View>
    );
};


export default DatePicker;