import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { ButtonIcon } from "@/components/ButtonIcon";

export function Home () {
    const navigation = useNavigation();

    return (
        <View
            style={{
                flex: 1,
                padding: 32,
                paddingTop: 54
            }}
        >
            <Header>
                <ButtonIcon name="menu" onPress={() => { navigation.toggleDrawer() }} />
                <Title>Home</Title>
                <ButtonIcon name="add-circle" onPress={() => navigation.navigate("product", { id: "666" })} />
            </Header>
        </View>
    )
}