import React, { useState } from 'react';
import { View, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({ control, name }: any) => {

    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
        control.onChange(name, currentDate); // React Hook Form'a değeri iletebilirsiniz
    };

    const showDatepicker = () => {
        setShowDatePicker(true);
    };

    return (
        <View>
            <Button onPress={showDatepicker} title="Tarih Seç" />
            {showDatePicker && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
};


export default DatePicker;