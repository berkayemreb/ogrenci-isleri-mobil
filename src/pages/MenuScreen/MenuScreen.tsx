import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './MenuScreenStyles';
import { getDatabase, ref, child, get } from "firebase/database";


const MenuScreen = () => {

    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `menu`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
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
        </View>
    )
}

export default MenuScreen;