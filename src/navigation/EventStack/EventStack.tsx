import { createNativeStackNavigator } from "@react-navigation/native-stack"
import EventScreen from "../../pages/ScreensOfEvent/EventScreen";
import CreateEventScreen from "../../pages/ScreensOfEvent/CreateEventScreen";
import EventDetailScreen from "../../pages/ScreensOfEvent/EventDetailScreen";

const Stack = createNativeStackNavigator();

const EventStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="EventScreen" component={EventScreen} options={{ headerTintColor: '#4475a6', headerTitleAlign: 'center', headerTitle: 'Etkinlikler' }} />
            <Stack.Screen name="CreateEventScreen" component={CreateEventScreen} options={{ headerTintColor: '#4475a6', headerTitleAlign: 'center', headerTitle: 'Etkinlik Oluştur' }} />
            <Stack.Screen name="EventDetailScreen" component={EventDetailScreen} options={{ headerTintColor: '#4475a6', headerTitleAlign: 'center', headerTitle: 'Etkinlik Detayı' }} />
        </Stack.Navigator>
    )
}

export default EventStack;