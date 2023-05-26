import React from 'react';
import { View, Text } from 'react-native';
import styles from './ItemOfFormStyles';
import Input from '../Input';

interface ItemOfFormProps {
    labelName: string,
    onChangeText(): void,
    onBlur(): void,
    value: string,
    keyboardType?: any
}

const ItemOfForm = (props: ItemOfFormProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.labelName}>{props.labelName}</Text>
            <Input
                onChangeText={props.onChangeText}
                onBlur={props.onBlur}
                value={props.value}
                keyboardType={props.keyboardType}
            />
        </View>
    )
}

export default ItemOfForm;