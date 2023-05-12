import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './SubCategoryStyles';

interface SubCategoryProps {
    item: {
        category?: string;
        image?: string;
    };
    onClick: () => void;
}

const SubCategory = (props: SubCategoryProps) => {
    return (
        <TouchableOpacity onPress={props.onClick} style={styles.container} >
            <Text>{props.item.image}</Text>
            <Text >{props.item.category}</Text>
        </TouchableOpacity>
    )
}

export default SubCategory;