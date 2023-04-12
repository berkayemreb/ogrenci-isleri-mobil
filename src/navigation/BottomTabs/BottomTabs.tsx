import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CommunicationStack from "../CommunicationStack";
import EventStack from "../EventStack";
import ExitStack from "../ExitStack";
import MenuStack from "../MenuStack";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator initialRouteName="Menu">
            <Tab.Screen name="Exit" component={ExitStack} options={{ headerShown: false }} />
            <Tab.Screen name="Event" component={EventStack} options={{ headerShown: false }} />
            <Tab.Screen name="Menu" component={MenuStack} options={{ headerShown: false }} />
            <Tab.Screen name="Communication" component={CommunicationStack} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

export default BottomTabs;