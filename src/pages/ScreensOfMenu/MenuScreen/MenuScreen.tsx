import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, View, Text } from 'react-native';
import styles from './MenuScreenStyles';
import { getDatabase, ref, child, get } from "firebase/database";
import { useNavigation } from '@react-navigation/native';
import ParentCategory from '../../../components/componentsForMenu/ParentCategory';

interface itemOfMenuProps {
    item: {
        id: string,
        title?: string,
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

    const renderCategoryName = ({ item }: itemOfMenuProps) => (<ParentCategory item={item} onClick={() => onClickCategory(item.id)} />)

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderCategoryName}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

export default MenuScreen;
