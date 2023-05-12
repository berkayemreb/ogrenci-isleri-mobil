import React, { useRef, useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert, ActivityIndicator } from 'react-native';
import styles from './SignUpStyles';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import { useDispatch } from "react-redux";
import { setActiveUser } from "../../../redux/user/userSlice";

const SignUp = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);

    const emailRef = useRef<TextInput>(null);

    const dispatch = useDispatch();

    const onChangeEmail = (text: string) => {
        setEmail(text);
    }

    const onChangePassword = (text: string) => {
        setPassword(text);
    }
    const showAlertMessage = (errorCode?: string) => {
        let message;
        if (errorCode == 'auth/invalid-email') {
            message = 'Geçersiz E-posta.';
        } else if (errorCode == 'auth/weak-password') {
            message = 'Geçersiz Şifre';
        } else if (errorCode == 'auth/email-already-in-use') {
            message = 'Bu E-posta ile zaten kayıt yapılmıştır.';
        } else if (errorCode == 'auth/missing-password') {
            message = 'Şifre alanı boş bırakılamaz.';
        } else if (errorCode == 'auth/missing-email') {
            message = 'E-posta alanı boş bırakılamaz.';
        }
        Alert.alert(
            'Üye olma işleminiz başarısız.',
            message,
            [
                {
                    text: 'Tamam',
                    onPress: () => emailRef.current?.focus(),
                },
            ]
        );
    }
    const onSubmit = () => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = {
                    email: userCredential.user.email,
                    uid: userCredential.user.uid
                }
                dispatch(setActiveUser(user));                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                showAlertMessage(errorCode);
                setIsLoading(false);
                setEmail('');
                setPassword('');

            });

    }

    return (
        <View style={styles.container}>
            <View>
                <TextInput style={styles.input} cursorColor='#a0a0a0' selectionColor='#b5b5b5' placeholder='E-posta' onChangeText={onChangeEmail} value={email} autoCapitalize='none' ref={emailRef} />
                <TextInput style={styles.input} cursorColor='#a0a0a0' selectionColor='#b5b5b5' placeholder='Şifre' secureTextEntry onChangeText={onChangePassword} value={password} autoCapitalize='none' />
            </View>
            <TouchableOpacity style={styles.button} onPress={onSubmit} disabled={isLoading}>
                <Text style={styles.buttonText}>{isLoading ? <ActivityIndicator color="#333333" /> : 'Üye Ol'}</Text>
            </TouchableOpacity>
        </View>

    )
}

export default SignUp;