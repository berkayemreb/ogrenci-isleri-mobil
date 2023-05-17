import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getDatabase, ref, child, get } from "firebase/database";
import styles from './ProductDetailScreenStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';


interface ProductDetailProps {
    name?: string,
    price?: number,
    image?: string,
    description?: {
        contents: string,
    }
}

const ProductDetailScreen = () => {
    const route: any = useRoute();
    const [product, setProduct] = useState<ProductDetailProps>({});
    const { firstItemId, secondItemId, thirdItemId } = route.params;


    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `menu/${firstItemId}/bottomCategories/${secondItemId}/products/${thirdItemId}`)).then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                setProduct(data);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.image_container}>
                <Image style={styles.image} source={{ uri: product.image }} />
            </View>
            <View style={styles.inner_container}>
                <View style={styles.header_contanier}>
                    <Text style={styles.headerName}>{product.name}</Text>
                    {product.description && (<Text style={styles.description}>{product.description.contents}</Text>)}
                    <View style={styles.line}></View>
                    <View style={styles.price_container}>
                        <Text style={styles.price}>{product.price}</Text>
                        <MaterialCommunityIcons name="currency-try" style={styles.price_icon} size={20} color="#333333" />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProductDetailScreen;
