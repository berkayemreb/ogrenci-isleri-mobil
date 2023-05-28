import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, SafeAreaView, View } from 'react-native';
import ErrorMessage from '../../../components/componentsForEvents/ErrorMessage';
import ItemOfForm from '../../../components/componentsForEvents/ItemOfForm';
import styles from './CreateEventScreenStyles';
import DatePicker from '../../../components/componentsForEvents/DatePicker';
import TimePicker from '../../../components/componentsForEvents/TimePicker';

type FormData = {
    editorName: string,
    phoneNumber: string,
    eventName: string,
    eventDate: Date,
    eventTime: Date,
};

const CreateEventScreen = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };



    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <ItemOfForm
                            labelName='Etkinliği Düzenleyen Kişinin / Kulübün İsmi'
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                    name="editorName"
                    rules={{ required: true }}
                    defaultValue=""
                />
                {errors?.editorName && <ErrorMessage message='Bu alanı doldurmak zorunludur.' />}

                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <ItemOfForm
                            labelName='Etkinlik Yöneticisinin İletişim Numarası'
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            keyboardType='number-pad'
                        />
                    )}
                    name="phoneNumber"
                    rules={{ required: true }}
                    defaultValue=""
                />
                {errors?.phoneNumber && <ErrorMessage message='Bu alanı doldurmak zorunludur.' />}

                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <ItemOfForm
                            labelName='Etkinliğin Adı'
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                    name="eventName"
                    rules={{ required: true }}
                    defaultValue=""
                />
                {errors?.eventName && <ErrorMessage message='Bu alanı doldurmak zorunludur.' />}

                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <DatePicker
                            value={value}
                            onChange={onChange}
                        />
                    )}
                    name="eventDate"
                    defaultValue={new Date()}
                />
                {errors?.eventDate && <ErrorMessage message='Bu alanı doldurmak zorunludur.' />}

                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TimePicker
                            value={value}
                            onChange={onChange}
                        />
                    )}
                    name="eventTime"
                    defaultValue={new Date()}
                />
                {errors?.eventTime && <ErrorMessage message='Bu alanı doldurmak zorunludur.' />}

                <Button title="Submit" onPress={handleSubmit(onSubmit)} />
            </View>
        </SafeAreaView>
    )
}

export default CreateEventScreen;