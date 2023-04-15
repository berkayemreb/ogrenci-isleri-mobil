import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './CommunicationScreenStyles';

const CommunicationScreen = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const region = {
        latitude: 37.74525459245689,
        longitude: 29.096191206200576,
        latitudeDelta: 0.02,
        longitudeDelta: 0.01,
    };

    const clickLocation = () => {
        setIsOpen(!isOpen);
    }

    return (
        <View style={styles.container}>
            {isOpen &&
                <View style={styles.popUpContainer}>
                    <View style={styles.popUpInnerContainer}>
                        <Text>Çalışma Saatleri:</Text>
                        <Text>Telefon Numarası:</Text>
                        <Button title='KAPAT' onPress={() => setIsOpen(!isOpen)} />
                    </View>
                </View>}
            <MapView
                style={styles.map}
                region={region}
            >
                <Marker coordinate={region} onPress={clickLocation} />
            </MapView>
        </View>
    )
}

export default CommunicationScreen;