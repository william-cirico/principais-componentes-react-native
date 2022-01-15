import { Image, StyleSheet, Text, View } from "react-native";

export default function Item({ title, image }: { title: string, image: string }) {
    return (
        <View>
            <Text style={styles.texto}>{title}</Text>
            <Image 
                source={{ uri: image }}
                style={styles.image}
            />
        </View>
    ); 
}


const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 200
    },
    texto: {
        color: "red"
    }
})