import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CommunicationStack from "../CommunicationStack";
import EventStack from "../EventStack";
import ExitStack from "../ExitStack";
import MenuStack from "../MenuStack";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator initialRouteName="Menu" screenOptions={{
            tabBarStyle: { borderTopWidth: 0 },
            tabBarLabel: () => { return null },
            headerShown: false,
        }}>
            <Tab.Screen name="Communication" component={CommunicationStack} options={{
                tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="cellphone-marker" size={focused ? 26 : 22} color={focused ? '#FF7F50' : '#333333'} />
            }} />
            <Tab.Screen name="Event" component={EventStack} options={{
                tabBarIcon: ({ focused }) => <MaterialIcons name="event-note" size={focused ? 26 : 22} color={focused ? '#FF7F50' : '#333333'} />
            }} />
            <Tab.Screen name="Menu" component={MenuStack} options={{
                tabBarIcon: ({ focused }) => <MaterialIcons name="restaurant-menu" size={focused ? 26 : 22} color={focused ? '#FF7F50' : '#333333'} />
            }} />
            <Tab.Screen name="Exit" component={ExitStack} options={{
                tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="logout" size={focused ? 26 : 22} color={focused ? '#FF7F50' : '#333333'} />
            }} />
        </Tab.Navigator>
    )
}

export default BottomTabs;