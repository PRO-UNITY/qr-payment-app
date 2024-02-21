import { Pressable, StyleSheet, View, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors, Radius, Space } from "../constants/data";
import { useNavigation } from "@react-navigation/native";

const Tabbar = () => {
    const navigation = useNavigation();
    const navigateToHome = () => {
        navigation.navigate("Home");
    };
    const navigateToTransaction = () => {
        navigation.navigate("Transaction");
    };
    const navigateToQrCode = () => {
        navigation.navigate("QrScan");
    };
    return (
        <View style={styles.tabbar}>
            <Pressable onPress={navigateToHome} style={styles.btnTabbar}>
                <Icon name="home" color={Colors.white} size={35} />
            </Pressable>
            <Pressable onPress={navigateToQrCode} style={styles.btnQr}>
                <Icon name="qr-code-outline" color={Colors.primary} size={35} />
            </Pressable>
            <Pressable onPress={navigateToTransaction} style={styles.btnTabbar}>
                <Icon name="list" color={Colors.white} size={35} />
            </Pressable>
        </View>
    );
};

export default Tabbar;

const styles = StyleSheet.create({
    tabbar: {
        position: "relative",
        height: 80,
        backgroundColor: Colors.primary,
        borderTopLeftRadius: Radius.ROUNDED2,
        borderTopRightRadius: Radius.ROUNDED2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: Space.P2,
    },
    btnTabbar: {
        height: 50,
        paddingHorizontal: Space.P4,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    btnQr: {
        height: 100,
        width: 100,
        bottom:40,
        backgroundColor: Colors.white,
        paddingHorizontal: Space.P4,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        ...Platform.select({
            ios: {
                shadowColor: "black",
                shadowOpacity: 0.25,
                shadowRadius: 4,
                shadowOffset: { width: 0, height: 2 },
            },
            android: {
                elevation: 4,
            },
        }),
    },
});

