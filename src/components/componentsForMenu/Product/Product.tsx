import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './ProductStyles';

interface ProductProps {
    item: {
        name?: string;
        image?: string;
    };
    onClick: () => void;
}

const Product = (props: ProductProps) => {

    return (
        <TouchableOpacity onPress={props.onClick} style={styles.container} >
            <Text>{props.item.image}</Text>
            <Text >{props.item.name}</Text>
        </TouchableOpacity>
    )
}

export default Product;