import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './ProductsScreenStyles';
import { getDatabase, ref, child, get } from "firebase/database";
import Products from '../../components/Products';

interface itemOfMenuProps {
    item: {
        id: string,
        topCategory?: string,
    }
}

const ProductsScreen = () => {

    const route: any = useRoute();
    const navigation: any = useNavigation();

    const { firstItemId, secondItemId } = route.params;

    const [data, setData] = useState([]);

    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `menu/${firstItemId}/bottomCategories/${secondItemId}/products`)).then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                const newData: any = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));
                setData(newData)


            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, [])

    const onClickCategory = (id: string) => {

        const params = {
            firstItemId,
            secondItemId,
            thirdItemId: id,
        };
        navigation.navigate('ProductDetailScreen', params);
    }

    const renderProduct = ({ item }: itemOfMenuProps) => (<Products item={item} onClick={() => onClickCategory(item.id)} />)

    return (
        <SafeAreaView>
            <FlatList
                data={data}
                renderItem={renderProduct}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

export default ProductsScreen;