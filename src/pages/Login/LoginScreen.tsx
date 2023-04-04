import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './LoginScreenStyles';

const LoginScreen = () => {

    const goToHomePage = () => {
    }

    return (
        <View style={styles.container}>
            <Text>LoginScreen Page!</Text>
            <Button title='go to home' onPress={goToHomePage} />
        </View>
    )
}

export default LoginScreen;


