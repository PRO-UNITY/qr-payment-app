import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import {
    Colors,
    FontSize,
    FontWeight,
    Radius,
    Space,
} from "../../constants/data";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
    const navigation = useNavigation();
    const navigateToLogin = () => {
        navigation.navigate("Login");
    };
    const navigateToHome = () => {
        navigation.navigate("Login");
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>QrPay</Text>
            <Text style={styles.label}>Type your username</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Type your phone number</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Type your password</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Type your confirm password</Text>
            <TextInput style={styles.input} />
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Pressable onPress={navigateToLogin}>
                    <Text style={styles.registerBtn}>login</Text>
                </Pressable>
                <Pressable onPress={navigateToHome} style={styles.btnLogin}>
                    <Text style={styles.textBtn}>register</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: Colors.white,
        paddingHorizontal: Space.P3,
    },
    title: {
        fontSize: FontSize.TITLE,
        fontWeight: FontWeight.TITLE,
        color: Colors.primary,
        marginBottom: Space.M5,
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.secondary,
        borderRadius: Radius.ROUNDED,
        paddingVertical: Space.P2,
        paddingHorizontal: Space.P2,
        marginBottom: Space.M2,
    },
    label: {
        marginBottom: Space.M2,
        color: Colors.primary,
        fontSize: FontSize.DESCRIPTION,
    },
    btnLogin: {
        backgroundColor: Colors.primary,
        paddingHorizontal: Space.P3,
        paddingVertical: Space.P2,
        borderRadius: Radius.ROUNDED,
    },
    registerBtn: {
        textDecorationLine: "underline",
        fontSize: FontSize.DESCRIPTION,
        color: Colors.primary,
    },
    textBtn: {
        color: Colors.white,
        fontSize: FontSize.DESCRIPTION,
    },
});
