import { createNativeStackNavigator } from "@react-navigation/native-stack"; 

import { Home } from "@/app/Home";
import { Product } from "@/app/Product";

export type StackRoutesParamList = {
    home: undefined;           
    product: undefined | { id: string }; // Example of passing parameters to the Product screen
};

const Stack = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Stack.Navigator 
            initialRouteName="home"
            screenOptions={{
                headerShown: false
            }}  
        >
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="product" component={Product} />
        </Stack.Navigator>
    )
}