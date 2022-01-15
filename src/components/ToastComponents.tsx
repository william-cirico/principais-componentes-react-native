import React, { ToastAndroid } from "react-native";
import { Button, View } from "react-native";

export default function ToastComponent() {
    return (
        <View>
            <Button title="Abrir Toast 1" onPress={() => ToastAndroid.show("TOAST 1", ToastAndroid.LONG)} />
            <Button title="Abrir Toast 2" onPress={() => ToastAndroid.showWithGravity("Toast 2", ToastAndroid.SHORT, ToastAndroid.CENTER)} />
            <Button title="Abrir Toast 3" onPress={() => ToastAndroid.showWithGravityAndOffset("Toast 2", ToastAndroid.SHORT, ToastAndroid.CENTER, 50, 50)} />
        </View>
    );
}