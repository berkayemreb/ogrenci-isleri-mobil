import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, SafeAreaView, View } from 'react-native';
import ErrorMessage from '../../../components/componentsForEvents/ErrorMessage';
import ItemOfForm from '../../../components/componentsForEvents/ItemOfForm';
import styles from './CreateEventScreenStyles';
import DatePicker from '../../../components/componentsForEvents/DatePicker';

type FormData = {
    editorName: string,
    phoneNumber: string,
    eventName: string,
};

const CreateEventScreen = () => {

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

                <DatePicker />

                <Button title="Submit" onPress={handleSubmit(onSubmit)} />
            </View>
        </SafeAreaView>
    )
}

export default CreateEventScreen;