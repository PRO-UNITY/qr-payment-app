import { View, StyleSheet, Text, ScrollView, Platform } from "react-native";
import { Colors, FontSize, FontWeight, Space } from "../../constants/data";
import Tabbar from "../../components/Tabbar";
import TransactionItem from "../../components/TransactionItem";
const Transaction = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Transactions</Text>
            <ScrollView style={{ marginBottom: 70, padding:Space.P1 }}>
                <View style={styles.transactions}>
                    <TransactionItem />
                    <TransactionItem />
                    <TransactionItem />
                    <TransactionItem />
                    <TransactionItem />
                    <TransactionItem />
                </View>
            </ScrollView>
            <View style={styles.tabbar}>
                <Tabbar />
            </View>
        </View>
    );
};

export default Transaction;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: Space.P3,
        position: "relative",
    },
    transactions: {
        marginBottom: Space.M2,
    },
    title: {
        color: Colors.dark,
        fontSize: 26,
        fontWeight: "600",
        marginBottom: Space.M1,
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
