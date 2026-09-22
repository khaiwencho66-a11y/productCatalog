import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavBar from "./BottomNavBar";
import ProductDetailScreen from "../screens/ProductDetail";

const Stack = createNativeStackNavigator();

export default function MainStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="MainTabs"
                component={BottomNavBar}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ProductDetail"
                component={ProductDetailScreen}
            />
        </Stack.Navigator>
    );
}