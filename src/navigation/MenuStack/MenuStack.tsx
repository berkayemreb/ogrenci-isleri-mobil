import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MenuScreen from "../../pages/MenuScreen";

const Stack = createNativeStackNavigator();

const MenuStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MenuScreen" component={MenuScreen} />
        </Stack.Navigator>
    )
}

export default MenuStack;