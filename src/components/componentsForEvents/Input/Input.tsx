import React from 'react';
import { TextInput, View, KeyboardTypeOptions } from 'react-native';
import styles from './InputStyles';

interface InputProps {
    onChangeText(): void,
    onBlur(): void,
    value: string,
    keyboardType?: KeyboardTypeOptions,
    multiline?: boolean,
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
                multiline={props.multiline}
                numberOfLines={props.multiline ? 4 : 1}
                textAlignVertical={props.multiline ? 'top' : 'auto'}
            />
        </View>
    )
}

export default Input;