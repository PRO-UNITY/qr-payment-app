import {
    Pressable,
    StyleSheet,
    View,
    Platform,
    Text,
    Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors, FontSize, FontWeight, Radius, Space } from "../constants/data";
import { useNavigation } from "@react-navigation/native";
import A from "../assets/user.avif";

const TransactionItem = () => {
    const navigation = useNavigation();
    const navigateTo = () => {
        navigation.navigate("TransactionDetail");
    };

    return (
        <Pressable onPress={navigateTo} style={styles.item}>
            <Image
                style={{ width: 50, height: 50, borderRadius: 25 }}
                source={require("../assets/user.avif")}
            />
            <View style={styles.about}>
                <Text style={styles.name}>Naimov Davlatshoh</Text>
                <Text style={styles.number}>9860 **** **** 5174</Text>
            </View>
            <View style={styles.date}>
                <Text>8 feb</Text>
            </View>
        </Pressable>
    );
};

export default TransactionItem;

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: Space.P2,
        marginBottom: Space.M2,
        height: 70,
        backgroundColor: Colors.white,
        borderRadius: Radius.ROUNDED,
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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    about: {
        flexDirection: "column",
        justifyContent: "space-around",
        width: "60%",
        height: 50,
    },
    date: {
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        height: 50,
    },
    name: {
        color: Colors.dark,
        fontSize: FontSize.DESCRIPTION,
        fontWeight: FontWeight.CONTENT,
    },
    number: {
        color: Colors.dark,
        fontSize: FontSize.DESCRIPTIONSM,
        fontWeight: FontWeight.CONTENT,
    },
});
