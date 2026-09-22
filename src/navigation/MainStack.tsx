import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductListScreen from "../screens/ProductList";
import ProductDetailScreen from "../screens/ProductDetail";


const Stack = createNativeStackNavigator();

export default function MainStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Product List" component={ProductListScreen}/>
            <Stack.Screen name="Product Detail" component={ProductDetailScreen}/>

        </Stack.Navigator>
    );
}