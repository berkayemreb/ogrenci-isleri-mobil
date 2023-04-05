import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './SignInStyles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';


const SignIn = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onChangeEmail = (text: string) => {
        setEmail(text);
    }

    const onChangePassword = (text: string) => {
        setPassword(text);
    }

    const onSubmit = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("Giriş başarıyla tamamlandı");
                setEmail('');
                setPassword('');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Giriş yapılamadı");
                setEmail('');
                setPassword('');
            });
    }

    return (
        <View style={styles.container}>
            <View>
                <TextInput style={styles.input} cursorColor='#a0a0a0' selectionColor='#b5b5b5' placeholder='E-posta' onChangeText={onChangeEmail} value={email} autoCapitalize='none' />
                <TextInput style={styles.input} cursorColor='#a0a0a0' selectionColor='#b5b5b5' placeholder='Şifre' secureTextEntry onChangeText={onChangePassword} value={password} autoCapitalize='none' />
            </View>
            <TouchableOpacity style={styles.button} onPress={onSubmit} >
                <Text style={styles.buttonText}>Giriş Yap</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignIn;