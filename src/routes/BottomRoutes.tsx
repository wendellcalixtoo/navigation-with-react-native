import { createBottomTabNavigator, BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import { Home } from "@/app/Home";
import { Product } from "@/app/Product";

export type StackRoutesParamList = {
    home: undefined;           
    product: undefined | { id: string }; // Example of passing parameters to the Product screen
};

const Tab = createBottomTabNavigator();

export function BottomRoutes() {
    return (
        <Tab.Navigator 
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#2C46B1',
                tabBarInactiveTintColor: '#444444',
                tabBarShowLabel: true,
            }}  
        >
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarLabel: "Início",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="product"
                component={Product}
                options={{
                    tabBarLabel: "Produto",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="add-circle" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}