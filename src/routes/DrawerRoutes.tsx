import { createDrawerNavigator, DrawerScreenProps } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";

import { Home } from "@/app/Home";
import { Product } from "@/app/Product";

export type StackRoutesParamList = {
    home: undefined;           
    product: undefined | { id: string }; // Example of passing parameters to the Product screen
};

const Drawer = createDrawerNavigator();

export function DrawerRoutes() {
    return (
        <Drawer.Navigator 
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                drawerActiveTintColor: '#2C46B1',
                drawerInactiveTintColor: '#444444'
            }}  
        >
            <Drawer.Screen
                name="home"
                component={Home}
                options={{
                    drawerLabel: "Início",
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="product"
                component={Product}
                options={{
                    drawerLabel: "Produto",
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="add-circle" size={size} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}