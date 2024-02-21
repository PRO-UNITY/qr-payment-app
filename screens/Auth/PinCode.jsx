import React, { useState, useRef } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
    Button,
} from "react-native";
import {
    Colors,
    FontSize,
    FontWeight,
    Radius,
    Space,
} from "../../constants/data";
import { useNavigation } from "@react-navigation/native";

const Pin = () => {
    const [pin, setPin] = useState(["", "", "", ""]);
    const pinInputs = useRef([]);
    const navigation = useNavigation();

    const handleChange = (text, index) => {
        const newPin = [...pin];
        newPin[index] = text;

        if (text.length === 1 && index < 3) {
            pinInputs.current[index + 1].focus();
        } else if (text.length === 0 && index > 0) {
            pinInputs.current[index - 1].focus();
        }

        setPin(newPin);
    };

    const isPinFilled = pin.every((value) => value.length === 1);

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "column", alignItems: "center", marginBottom:Space.M4 }}>
                <Text style={styles.title}>Pin code</Text>
                <View style={{ flexDirection: "row", gap: 10 }}>
                    {pin.map((value, index) => (
                        <TextInput
                            key={index}
                            style={styles.input}
                            value={value}
                            onChangeText={(text) => handleChange(text, index)}
                            keyboardType="numeric"
                            maxLength={1}
                            ref={(ref) => (pinInputs.current[index] = ref)}
                        />
                    ))}
                </View>
            </View>
            {isPinFilled && (
                <Pressable
                style={styles.btnNext}
                    title="Submit"
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text style={styles.textBtn}>next</Text>
                </Pressable>
            )}
        </View>
    );
};

export default Pin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        justifyContent: "center",
    },
    title: {
        color: Colors.primary,
        fontSize: FontSize.CONTENT,
        fontWeight: FontWeight.CONTENT,
        marginBottom: Space.M4,
    },
    input: {
        width: 46,
        borderWidth: 1,
        borderColor: Colors.secondary,
        paddingHorizontal: Space.P3,
        paddingVertical: Space.P2,
        borderRadius: Radius.ROUNDED2,
    },
    btnNext:{
        backgroundColor:Colors.primary,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:Space.P3,
        borderRadius:Radius.ROUNDED2
    },
    textBtn:{
        color:Colors.white,
        fontSize:FontSize.DESCRIPTION
    }
});
