import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ExitScreen from "../../pages/ExitScreen";

const Stack = createNativeStackNavigator();

const ExitStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ExitScreen" component={ExitScreen} />
        </Stack.Navigator>
    )
}

export default ExitStack;