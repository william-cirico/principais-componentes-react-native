import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default function Menu({ closeMenu }: { closeMenu: () => void }) {
    return (
        <View style={[styles.container, styles.navigationContainer]}>
            <Text>Menu</Text>
            <Button
                title="Close drawer"
                onPress={() => closeMenu()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 16
    },
    navigationContainer: {
        backgroundColor: "#ecf0f1"
    },
});