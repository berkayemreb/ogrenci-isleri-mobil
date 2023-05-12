import React, { useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './CommunicationScreenStyles';
import PopUp from '../../components/componentsForCommunication/PopUp';
import { MaterialCommunityIcons } from '@expo/vector-icons';


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

    const closePopUp = () => {
        setIsOpen(!isOpen);
    }

    return (
        <View style={styles.container}>
            {isOpen && <PopUp title='Öğrenci İşleri Atölye' workingHoursIcon={<MaterialCommunityIcons name="clock-check-outline" size={20} color="#FF7F50" />} workingHoursText='08.00 - 02.30' phoneNumberIcon={<MaterialCommunityIcons name="phone-in-talk-outline" size={20} color="#FF7F50" />} phoneNumberText='0530 209 91 07' closePopUp={closePopUp} />}
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