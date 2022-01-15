import React from "react";
import { Text, View, Dimensions, Image, StyleSheet, Platform } from "react-native";

const larguraTela = Dimensions.get("screen").width;
const alturaTela = Dimensions.get("screen").height;

export default function DimensionsComponent() {
    return (
        <View>
            <Text>A altura da tela é {alturaTela}</Text>
            <Text>A largura da tela é {larguraTela}</Text>
            {
                Platform.OS === "android" &&
                <Text>Renderizou porque estou no android</Text>
            }
            <Text>A plataforma em que esse app está sendo executado é {Platform.OS}</Text>
            <Image 
                source={require("../../assets/icon.png")}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: larguraTela,
        height: 200
    }
})