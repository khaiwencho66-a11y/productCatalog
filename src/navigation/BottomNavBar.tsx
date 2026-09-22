import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./MainStack";


const Tab = createBottomTabNavigator();

export default function BottomNavBar() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Product List" component={MainStack}
                    options={{
                        headerShown: false,
                    }}
                />
            </Tab.Navigator>
            
        </NavigationContainer>
    )

}