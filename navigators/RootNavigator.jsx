import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
    Home,
    Login,
    Pin,
    Profile,
    QrScan,
    Register,
    Transaction,
    TransactionDetail,
    ViewHome,
} from "../screens";
import Tabbar from "../components/Tabbar";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/data";
import { useNavigation } from "@react-navigation/native";

const RootStack = createNativeStackNavigator();
const RootNavigator = () => {
    const navigation = useNavigation();
    const navigateTo = () => {
        navigation.navigate("Profile");
    };
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="View" component={ViewHome} />
            <RootStack.Screen name="Pin" component={Pin} />
            <RootStack.Screen name="Login" component={Login} />
            <RootStack.Screen name="Register" component={Register} />
            <RootStack.Screen name="QrScan" component={QrScan} />
            <RootStack.Screen
                name="TransactionDetail"
                component={TransactionDetail}
            />
            <RootStack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: true,
                    headerLeft: () => (
                        <TouchableOpacity onPress={navigateTo}>
                            <Ionicons
                                name="person"
                                size={24}
                                color={Colors.primary}
                            />
                        </TouchableOpacity>
                    ),
                    headerTitle: "",
                }}
            />
            <RootStack.Screen
                name="Transaction"
                component={Transaction}
                options={{
                    headerShown: true,
                    headerLeft: () => (
                        <TouchableOpacity onPress={navigateTo}>
                            <Ionicons
                                name="person"
                                size={24}
                                color={Colors.primary}
                            />
                        </TouchableOpacity>
                    ),
                    headerTitle: "Transactions",
                }}
            />
            <RootStack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                }}
            />
        </RootStack.Navigator>
    );
};

export default RootNavigator;
