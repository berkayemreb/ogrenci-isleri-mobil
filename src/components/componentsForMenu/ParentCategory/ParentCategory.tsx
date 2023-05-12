import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './ParentCategoryStyles';

interface ParentCategoryProps {
    item: {
        title?: string;
        image?: string;
    };
    onClick: () => void;
}

const ParentCategory = (props: ParentCategoryProps) => {
    return (
        <TouchableOpacity onPress={props.onClick} style={styles.container} >
            <Text>{props.item.image}</Text>
            <Text >{props.item.title}</Text>
        </TouchableOpacity>
    )
}

export default ParentCategory;