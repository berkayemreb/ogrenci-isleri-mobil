import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getDatabase, ref, child, get } from "firebase/database";
import styles from './ProductDetailScreenStyles';

interface ProductProps {
    name?: string,
    price?: number,
    image?: string,
    description?: {
        contents: string,
    }
}

const ProductDetailScreen = () => {
    const route: any = useRoute();
    const [product, setProduct] = useState<ProductProps>({});
    const { firstItemId, secondItemId, thirdItemId } = route.params;


    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `menu/${firstItemId}/bottomCategories/${secondItemId}/products/${thirdItemId}`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log("firebaseden gelen hali", snapshot.val());
                const data = snapshot.val();
                console.log("DATA:", data);
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
            <Text>ProductDetailScreen Page!</Text>
            <Text>{product.name}</Text>
            <Text>{product.price} TL</Text>
            <Text>{product.image}</Text>
            {product.description && (<Text>{product.description.contents}</Text>)}
        </View>
    )
}

export default ProductDetailScreen;
