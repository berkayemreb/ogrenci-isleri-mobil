import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MenuScreen from "../../pages/ScreensOfMenu/MenuScreen";
import CategoriesScreen from "../../pages/ScreensOfMenu/CategoriesScreen";
import ProductsScreen from "../../pages/ScreensOfMenu/ProductsScreen";
import ProductDetailScreen from "../../pages/ScreensOfMenu/ProductDetailScreen";

const Stack = createNativeStackNavigator();

const MenuStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MenuScreen" component={MenuScreen} />
            <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
            <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
            <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
        </Stack.Navigator>
    )
}

export default MenuStack;