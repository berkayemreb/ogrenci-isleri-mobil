import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './ExitScreenStyles';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../redux/store";
import { setUserLogout } from '../../redux/user/userSlice';

const ExitScreen = () => {
    const navigation = useNavigation<any>();
    const dispatch = useDispatch();
    const user: any = useSelector<RootState>((state) => state.user.user)

    const goToMenuPage = () => {
        navigation.navigate('Menu');
    }

    const handleLogOut = () => {
        dispatch(setUserLogout())
    }


    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <TouchableOpacity style={styles.cancel_button} onPress={goToMenuPage}>
                    <MaterialCommunityIcons name="window-close" size={28} color="#001023AA" />
                </TouchableOpacity>
                <View style={styles.body_container}>
                    <View>
                        <Text style={styles.email_value}>{user.email}</Text>
                        <Text style={styles.text}> hesabından çıkış yapmak istediğine emin misin?</Text>
                    </View>
                    <View style={styles.buttons_container}>
                        <TouchableOpacity style={styles.exit_button} onPress={handleLogOut}>
                            <Text style={styles.text_of_exit_button}>Çıkış Yap</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </View>
    )
}

export default ExitScreen;