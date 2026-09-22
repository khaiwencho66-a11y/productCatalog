import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductListScreen from "../screens/ProductList";


const Tab = createBottomTabNavigator();

export default function BottomNavBar() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Products" component={ProductListScreen} />
        </Tab.Navigator>
    )

}