import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './InputStyles';

interface InputProps {
    onChangeText(): void,
    onBlur(): void,
    value: string,
    keyboardType?: any
}

const Input = (props: InputProps) => {
    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={props.onChangeText}
                onBlur={props.onBlur}
                value={props.value}
                cursorColor='#333333'
                selectionColor='#c0c0c0'
                keyboardType={props.keyboardType}
            />
        </View>
    )
}

export default Input;