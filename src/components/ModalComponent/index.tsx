import { useState } from "react";
import { View, Text, Button } from "react-native";
import ModalExemplo from "./Modal";

export default function ModalComponent() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <View>
            {
                isModalVisible &&
                <ModalExemplo onClose={() => setIsModalVisible(false)} />
            }           
            <Button title="Abrir modal" onPress={() => setIsModalVisible(true)} />
            <Text>Modal</Text>
        </View>
    );
}