import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import styles from './ParentCategoryStyles';
import { MaterialIcons } from '@expo/vector-icons';

interface ParentCategoryProps {
    item: {
        title?: string;
        image?: string;
    };
    onClick: () => void;
}

const ParentCategory = (props: ParentCategoryProps) => {
    return (
        <TouchableWithoutFeedback onPress={props.onClick}>
            <View style={styles.container}>
                <View style={styles.image_container}>
                    <Image style={styles.image} source={{ uri: props.item.image }} />
                </View>
                <View style={styles.categoryName_container}>
                    <Text style={styles.categoryName}>{props.item.title}</Text>
                </View>
                <View style={styles.icon_container}>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="#333333" />

                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ParentCategory;