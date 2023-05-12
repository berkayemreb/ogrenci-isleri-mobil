import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import styles from './MenuScreenStyles';
import { getDatabase, ref, child, get } from "firebase/database";
import { useNavigation } from '@react-navigation/native';
import Products from '../../components/Products';

interface itemOfMenuProps {
    item: {
        id: string,
        topCategory?: string,
    }
}

const MenuScreen = () => {
    const [data, setData] = useState([]);

    const navigation: any = useNavigation();

    useEffect(() => {

        const dbRef = ref(getDatabase());
        get(child(dbRef, `menu`)).then((snapshot) => {
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
            itemId: id,
        };
        navigation.navigate('CategoriesScreen', params);
    }

    const renderCategoryName = ({ item }: itemOfMenuProps) => (<Products item={item} onClick={() => onClickCategory(item.id)} />)

    return (
        <SafeAreaView>
            <FlatList
                data={data}
                renderItem={renderCategoryName}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

export default MenuScreen;
