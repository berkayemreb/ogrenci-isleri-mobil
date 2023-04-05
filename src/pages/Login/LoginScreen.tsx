import React from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './LoginScreenStyles';

const LoginScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image style={styles.image} source={require('../../../assets/images/logo-bg-white.png')} />
            </View>
            <View style={styles.buttons_container}>
                <TouchableOpacity style={styles.login_container}>
                    <Text style={styles.login_text}>Giriş Yap</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signUp_container}>
                    <Text style={styles.signUp_text}>Kayıt Ol</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default LoginScreen;


