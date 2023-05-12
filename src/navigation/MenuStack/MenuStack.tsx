import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MenuScreen from "../../pages/MenuScreen";
import CategoriesScreen from "../../pages/CategoriesScreen";
import ProductsScreen from "../../pages/ProductsScreen";
import ProductDetailScreen from "../../pages/ProductDetailScreen";

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