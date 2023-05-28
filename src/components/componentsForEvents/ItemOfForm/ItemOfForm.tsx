import React from 'react';
import { View, Text, KeyboardTypeOptions } from 'react-native';
import styles from './ItemOfFormStyles';
import Input from '../Input';

interface ItemOfFormProps {
    labelName: string,
    onChangeText(): void,
    onBlur(): void,
    value: string,
    keyboardType?: KeyboardTypeOptions,
    isLastItem?: boolean,
    multiline?: boolean
}

const ItemOfForm = (props: ItemOfFormProps) => {

    const lastItemStyle = props.isLastItem ? styles.lastItem : null;

    return (
        <View style={[styles.container, lastItemStyle]}>
            <Text style={styles.labelName}>{props.labelName}</Text>
            <Input
                onChangeText={props.onChangeText}
                onBlur={props.onBlur}
                value={props.value}
                keyboardType={props.keyboardType}
                multiline={props.multiline}
            />
        </View>
    )
}

export default ItemOfForm;