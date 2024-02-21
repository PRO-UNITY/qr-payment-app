import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
    Platform,
    ScrollView,
} from "react-native";
import {
    Colors,
    FontSize,
    FontWeight,
    Radius,
    Space,
} from "../../constants/data";
import Icon from "react-native-vector-icons/Ionicons";
import Tabbar from "../../components/Tabbar";
import TransactionItem from "../../components/TransactionItem";

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.balance}>
                <View style={styles.balanceCart}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: Space.M3,
                        }}
                    >
                        <Text style={styles.title}>QrPay</Text>
                        <Icon
                            name="qr-code-outline"
                            color={Colors.white}
                            size={25}
                        />
                    </View>
                    <Text style={styles.cartNumber}>9860 **** **** 5174</Text>
                    <Text style={styles.cartBalance}>1 796 </Text>
                </View>
            </View>
            <Text
                style={{
                    fontSize: FontSize.CONTENT,
                    fontWeight: FontWeight.CONTENT,
                    paddingVertical: Space.P3,
                }}
            >
                Last Transactions
            </Text>
            <View style={{ height: 300 }}>
                <TransactionItem />
                <TransactionItem />
                <TransactionItem />
                <TransactionItem />
            </View>

            <View style={styles.tabbar}>
                <Tabbar />
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: Space.P3,
        position: "relative",
    },
    balanceCart: {
        height: 150,
        padding: Space.P3,
        backgroundColor: Colors.primary,
        borderTopLeftRadius: Radius.ROUNDED1,
        borderBottomLeftRadius: Radius.ROUNDED1,
        borderTopRightRadius: Radius.ROUNDED1,
        borderBottomRightRadius: 80,
    },
    balance: {
        height: 150,
        backgroundColor: Colors.white,
        borderRadius: Radius.ROUNDED1,
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
    title: {
        color: Colors.white,
        fontSize: FontSize.CONTENT,
        fontWeight: FontWeight.CONTENT,
    },
    cartNumber: {
        color: Colors.white,
        fontSize: FontSize.DESCRIPTION,
        fontWeight: FontWeight.DESCRIPTION,
        marginBottom: Space.M4,
    },
    cartBalance: {
        color: Colors.white,
        fontSize: FontSize.CONTENT,
        fontWeight: FontWeight.CONTENT,
    },
    tabbar: {
        paddingVertical: 0,
        position: "absolute",
        height: 80,
        bottom: 0,
        left: 0,
        right: 0,
    },
});
