import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MenuScreen from "../../pages/ScreensOfMenu/MenuScreen";
import CategoriesScreen from "../../pages/ScreensOfMenu/CategoriesScreen";
import ProductsScreen from "../../pages/ScreensOfMenu/ProductsScreen";
import ProductDetailScreen from "../../pages/ScreensOfMenu/ProductDetailScreen";

const Stack = createNativeStackNavigator();

const MenuStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="MenuScreen"
                component={MenuScreen}
                options={
                    {
                        headerTintColor: '#4475a6',
                        headerTitleAlign: 'center',
                        headerTitle: 'Menü',

                    }

                } />
            <Stack.Screen
                name="CategoriesScreen"
                component={CategoriesScreen}
                options={
                    {
                        headerTintColor: '#4475a6',
                        headerTitleAlign: 'center',
                        headerTitle: 'Kategoriler',
                    }

                } />
            <Stack.Screen
                name="ProductsScreen"
                component={ProductsScreen}
                options={
                    {
                        headerTintColor: '#4475a6',
                        headerTitleAlign: 'center',
                        headerTitle: 'Ürünler',

                    }

                } />
            <Stack.Screen
                name="ProductDetailScreen"
                component={ProductDetailScreen}
                options={
                    {
                        headerTintColor: '#4475a6',
                        headerTitleAlign: 'center',
                        headerTitle: 'Ürün Detay',

                    }

                } />
        </Stack.Navigator>
    )
}

export default MenuStack;