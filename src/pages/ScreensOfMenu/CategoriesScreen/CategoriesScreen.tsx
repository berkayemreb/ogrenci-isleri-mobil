import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getDatabase, ref, child, get } from "firebase/database";
import styles from './CategoriesScreenStyles';
import SubCategory from '../../../components/componentsForMenu/SubCategory';


interface itemOfMenuProps {
    item: {
        id: string,
        category?: string,
    }
}

const CategoriesScreen = () => {

    const route: any = useRoute();
    const navigation: any = useNavigation();

    const { itemId } = route.params;

    const [data, setData] = useState([]);

    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `menu/${itemId}/bottomCategories`)).then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();

                const newData: any = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));
                setData(newData);


            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, [])

    const onClickCategory = (id: string) => {
        const params = {
            firstItemId: itemId,
            secondItemId: id,
        };
        navigation.navigate('ProductsScreen', params);
    }

    const renderCategoryName = ({ item }: itemOfMenuProps) => (<SubCategory item={item} onClick={() => onClickCategory(item.id)} />)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inner_container}>
                <FlatList
                    data={data}
                    renderItem={renderCategoryName}
                    keyExtractor={item => item.id}
                />
            </View>

        </SafeAreaView>
    )
}

export default CategoriesScreen;