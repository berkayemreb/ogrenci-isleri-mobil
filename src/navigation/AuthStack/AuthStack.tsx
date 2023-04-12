import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AuthScreen from "../../pages/AuthScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Auth" component={AuthScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack;