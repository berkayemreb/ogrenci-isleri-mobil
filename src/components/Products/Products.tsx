import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './ProductsStyles';

interface ProductsProps {
    item: {
        topCategory?: string;
        category?: string;
        name?: string;
        price?: number;
    };
    onClick: () => void;
}

const Products = (props: ProductsProps) => {
    console.log("ITEM:", props.item);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onClick}>
                <Text >{props.item.topCategory || props.item.category || props.item.name}</Text>
                {props.item.price && <Text>{props.item.price}TL</Text>}
            </TouchableOpacity>
        </View>
    )
}

export default Products;