import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors, FontSize, Radius, Space } from "../../constants/data";
import { useNavigation } from "@react-navigation/native";

const ViewHome = () => {
    const navigation = useNavigation();
    const navigateTo = () => {
        navigation.navigate("Login");
    };
    return (
        <View style={styles.container}>
            <Text style={styles.textView}>Qr Pay</Text>
            <Pressable style={styles.btn} onPress={navigateTo}>
                <Text style={styles.textBtn}>Start </Text>
                <Text>
                    <Icon
                        name="arrow-forward-outline"
                        size={20}
                        color={Colors.white}
                    />
                </Text>
            </Pressable>
        </View>
    );
};

export default ViewHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.white,
    },
    textView: {
        fontSize: 35,
        fontWeight: "800",
        color: "#0248fa",
        marginBottom: Space.M2,
    },
    btn: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.primary,
        borderRadius: Radius.ROUNDED1,
        paddingVertical: Space.P2,
        paddingHorizontal: Space.P4,
    },
    textBtn: {
        color: Colors.white,
        fontSize: FontSize.DESCRIPTION,
    },
});
