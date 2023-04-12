import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CommunicationScreen from "../../pages/CommunicationScreen";

const Stack = createNativeStackNavigator();

const CommunicationStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="CommunicationScreen" component={CommunicationScreen} />
        </Stack.Navigator>
    )
}

export default CommunicationStack;