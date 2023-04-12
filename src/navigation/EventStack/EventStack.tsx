import { createNativeStackNavigator } from "@react-navigation/native-stack"
import EventScreen from "../../pages/EventScreen";

const Stack = createNativeStackNavigator();

const EventStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="EventScreen" component={EventScreen} />
        </Stack.Navigator>
    )
}

export default EventStack;