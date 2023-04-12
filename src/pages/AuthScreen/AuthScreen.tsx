import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './AuthScreenStyles';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

const AuthScreen = () => {

    const [isOpenSignIn, setIsOpenSignIn] = useState<Boolean>(true);
    const [isOpenSignUp, setIsOpenSignUp] = useState<Boolean>(false);

    const onClickLogin = () => {
        setIsOpenSignUp(false);
        setIsOpenSignIn(true);
    }

    const onClickSignup = () => {
        setIsOpenSignIn(false);
        setIsOpenSignUp(true);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inner_container}>
                <View>
                    <Image style={styles.image} source={require('../../../assets/images/logo-bg-white.png')} />
                </View>
                <View style={styles.buttons_container}>
                    <TouchableOpacity style={isOpenSignIn ? styles.active_login_container : styles.normal_login_container} onPress={onClickLogin}>
                        <Text style={isOpenSignIn ? styles.active_login_text : styles.normal_login_text}>Giriş Yap</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={isOpenSignUp ? styles.active_signup_container : styles.normal_signup_container} onPress={onClickSignup}>
                        <Text style={isOpenSignUp ? styles.active_signup_text : styles.normal_signup_text}>Üye Ol</Text>
                    </TouchableOpacity>
                </View>
                {isOpenSignIn && <SignIn />}
                {isOpenSignUp && <SignUp />}
            </View>
        </SafeAreaView>
    )
}

export default AuthScreen;


