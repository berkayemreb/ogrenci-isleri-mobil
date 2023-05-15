import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import styles from './SubCategoryStyles';
import { MaterialIcons } from '@expo/vector-icons';


interface SubCategoryProps {
    item: {
        category?: string;
        image?: string;
    };
    onClick: () => void;
}

const SubCategory = (props: SubCategoryProps) => {
    return (

        <TouchableWithoutFeedback onPress={props.onClick}>
            <View style={styles.container}>
                <View style={styles.image_container}>
                    <Image style={styles.image} source={{ uri: props.item.image }} />
                </View>
                <View style={styles.categoryName_container}>
                    <Text style={styles.categoryName}>{props.item.category}</Text>
                </View>
                <View style={styles.icon_container}>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="#333333" />

                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SubCategory;