import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import styles from './ProductStyles';
import { MaterialIcons } from '@expo/vector-icons';


interface ProductProps {
    item: {
        name?: string;
        image?: string;
    };
    index: number;
    onClick: () => void;
}

const Product = (props: ProductProps) => {
    const itemStyle = props.index === 0 ? styles.firstItem : null;

    return (
        <TouchableWithoutFeedback onPress={props.onClick}>
            <View style={[styles.container, itemStyle]}>
                <View>
                    <Image style={styles.image} source={{ uri: props.item.image }} />
                    <View style={styles.inner_container}>
                        <View style={styles.name_container}>
                            <Text style={styles.name}>{props.item.name}</Text>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color="#ffffff" style={styles.icon} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Product;