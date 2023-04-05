import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './SignUpStyles';

const SignUp = () => {

    const [eposta, setEposta] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onChangeEposta = (text: string) => {
        setEposta(text);
    }

    const onChangePassword = (text: string) => {
        setPassword(text);
    }

    const onSubmit = () => {

        console.log("Üye olundu");

        console.log({ eposta, password });

        setEposta('');
        setPassword('');
    }

    return (
        <View style={styles.container}>
            <View>
                <TextInput style={styles.input} cursorColor='#a0a0a0' selectionColor='#b5b5b5' placeholder='E-posta' onChangeText={onChangeEposta} value={eposta} autoCapitalize='none' />
                <TextInput style={styles.input} cursorColor='#a0a0a0' selectionColor='#b5b5b5' placeholder='Şifre' secureTextEntry onChangeText={onChangePassword} value={password} autoCapitalize='none' />
            </View>
            <TouchableOpacity style={styles.button} onPress={onSubmit}>
                <Text style={styles.buttonText}>Üye Ol</Text>
            </TouchableOpacity>
        </View>

    )
}

export default SignUp;