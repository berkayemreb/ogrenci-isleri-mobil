import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './LoginScreenStyles';
import { LoginScreenProps } from '../../navigation/types';

const LoginScreen = ({ navigation }: LoginScreenProps) => {

    const goToHomePage = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Text>LoginScreen Page!</Text>
            <Button title='go to home' onPress={goToHomePage} />
        </View>
    )
}

export default LoginScreen;


