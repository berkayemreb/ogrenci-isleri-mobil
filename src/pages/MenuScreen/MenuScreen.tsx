import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './MenuScreenStyles';
import { getDatabase, ref, child, get } from "firebase/database";


const MenuScreen = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `menu`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log("firebaseden gelen hali", snapshot.val());
                const data = snapshot.val();
                const newMenu: any = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));
                console.log("düzenlendikten sonraki hali:", newMenu);
                setMenu(newMenu);

            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, [])

    return (
        <View style={styles.container}>
            <Text> Menu Screen! </Text>
            {menu.map((item: any, index: any) => {
                return (
                    <View key={index}>
                        <Text>{item.name}</Text>
                        <Text>{item.price}</Text>
                    </View>
                )
            })}
        </View>
    )
}

export default MenuScreen;
