import { View, StyleSheet, Text, ScrollView, Platform } from "react-native";
import {
    Colors,
    FontSize,
    FontWeight,
    Radius,
    Space,
} from "../../constants/data";
import Tabbar from "../../components/Tabbar";
import TransactionItem from "../../components/TransactionItem";
const TransactionDetail = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Naimov Davlatshoh</Text>
            <ScrollView style={{ marginBottom: 70, padding: Space.P1 }}>
                <View style={styles.message}>
                    <Text
                        style={{
                            fontSize: FontSize.DESCRIPTION,
                            fontWeight: FontWeight.DESCRIPTION,
                            color: Colors.white,
                        }}
                    >
                        100 000 so'm
                    </Text>
                    <Text
                        style={{
                            fontSize: FontSize.DESCRIPTIONSM,
                            fontWeight: FontWeight.DESCRIPTIONSM,
                            color: Colors.white,
                            marginLeft: "auto",
                        }}
                    >
                        8 feb 14:02
                    </Text>
                </View>
                <View style={styles.message}>
                    <Text
                        style={{
                            fontSize: FontSize.DESCRIPTION,
                            fontWeight: FontWeight.DESCRIPTION,
                            color: Colors.white,
                        }}
                    >
                        230 000 so'm
                    </Text>
                    <Text
                        style={{
                            fontSize: FontSize.DESCRIPTIONSM,
                            fontWeight: FontWeight.DESCRIPTIONSM,
                            color: Colors.white,
                            marginLeft: "auto",
                        }}
                    >
                        8 feb 14:02
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default TransactionDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: Space.P3,
        position: "relative",
    },
    title: {
        color: Colors.dark,
        fontSize: 26,
        fontWeight: "600",
        marginBottom: Space.M1,
    },
    message: {
        width: 200,
        height: 70,
        paddingVertical: Space.P1,
        paddingHorizontal: Space.P2,
        backgroundColor: Colors.primary,
        marginLeft: "auto",
        borderRadius: Radius.ROUNDED1,
        marginBottom: Space.M2,
    },
});
