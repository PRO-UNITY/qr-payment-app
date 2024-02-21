import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors, FontSize, FontWeight, Space } from "../../constants/data";

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <View style={{ width: "50%" }}>
                    <Image
                        style={{ width: 130, height: 130, borderRadius: 65 }}
                        source={require("../../assets/user.avif")}
                    />
                </View>

                <View style={{ width: "50%" }}>
                    <Text
                        style={{
                            fontSize: FontSize.CONTENT,
                            fontWeight: FontWeight.CONTENT,
                            color: Colors.primary,
                            marginBottom: Space.M2,
                        }}
                    >
                        Naimov
                    </Text>
                    <Text
                        style={{
                            fontSize: FontSize.CONTENT,
                            fontWeight: FontWeight.CONTENT,
                            color: Colors.primary,
                            marginBottom: Space.M2,
                        }}
                    >
                        Davlatshoh
                    </Text>
                    <Text
                        style={{
                            fontSize: FontSize.CONTENT,
                            fontWeight: FontWeight.CONTENT,
                            color: Colors.primary,
                            marginBottom: Space.M2,
                        }}
                    >
                        Rustamovich
                    </Text>
                </View>
            </View>
            <View style={styles.image}>
                <View style={{ width: "50%" }}>
                    <Text
                        style={{
                            fontSize: FontSize.DESCRIPTION,
                            fontWeight: FontWeight.DESCRIPTION,
                            color: Colors.dark,
                            marginBottom: Space.M2,
                        }}
                    >
                        Region
                    </Text>
                    <Text
                        style={{
                            fontSize: FontSize.DESCRIPTION,
                            fontWeight: FontWeight.DESCRIPTION,
                            color: Colors.dark,
                            marginBottom: Space.M2,
                        }}
                    >
                        Passport ID / card
                    </Text>
                    <Text
                        style={{
                            fontSize: FontSize.DESCRIPTION,
                            fontWeight: FontWeight.DESCRIPTION,
                            color: Colors.dark,
                            marginBottom: Space.M2,
                        }}
                    >
                        Date of issue
                    </Text>
                    <Text
                        style={{
                            fontSize: FontSize.DESCRIPTION,
                            fontWeight: FontWeight.DESCRIPTION,
                            color: Colors.dark,
                            marginBottom: Space.M2,
                        }}
                    >
                        Valid until
                    </Text>
                    <Text
                        style={{
                            fontSize: FontSize.DESCRIPTION,
                            fontWeight: FontWeight.DESCRIPTION,
                            color: Colors.dark,
                            marginBottom: Space.M2,
                        }}
                    >
                        Date of birth
                    </Text>
                </View>

                <View style={{ width: "50%" }}>
                    <Text
                        style={{
                            fontSize: FontSize.DESCRIPTION,
                            fontWeight: FontWeight.DESCRIPTION,
                            color: Colors.secondary,
                            marginBottom: Space.M2,
                        }}
                    >
                        Bukhara
                    </Text>
                    <Text
                        style={{
                            fontSize: FontSize.DESCRIPTION,
                            fontWeight: FontWeight.DESCRIPTION,
                            color: Colors.secondary,
                            marginBottom: Space.M2,
                        }}
                    >
                        AB 8085495
                    </Text>
                    <Text
                        style={{
                            fontSize: FontSize.DESCRIPTION,
                            fontWeight: FontWeight.DESCRIPTION,
                            color: Colors.secondary,
                            marginBottom: Space.M2,
                        }}
                    >
                        16.11.2017
                    </Text>
                    <Text
                        style={{
                            fontSize: FontSize.DESCRIPTION,
                            fontWeight: FontWeight.DESCRIPTION,
                            color: Colors.secondary,
                            marginBottom: Space.M2,
                        }}
                    >
                        15.11.2027
                    </Text>
                    <Text
                        style={{
                            fontSize: FontSize.DESCRIPTION,
                            fontWeight: FontWeight.DESCRIPTION,
                            color: Colors.secondary,
                            marginBottom: Space.M2,
                        }}
                    >
                        13.10.2001
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "start",
        padding: Space.P4,
    },
    image: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 150,
        marginBottom: Space.M2,
    },
});
