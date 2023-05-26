import { createNativeStackNavigator } from "@react-navigation/native-stack"
import EventScreen from "../../pages/ScreensOfEvent/EventScreen";
import CreateEventScreen from "../../pages/ScreensOfEvent/CreateEventScreen";

const Stack = createNativeStackNavigator();

const EventStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="EventScreen" component={EventScreen} options={{ headerTintColor: '#4475a6', headerTitleAlign: 'center', headerTitle: 'Etkinlikler' }} />
            <Stack.Screen name="CreateEventScreen" component={CreateEventScreen} options={{ headerTintColor: '#4475a6', headerTitleAlign: 'center', headerTitle: 'Etkinlik Oluştur' }} />
        </Stack.Navigator>
    )
}

export default EventStack;