import React, { useState } from "react";
import { View, Text, Button, Modal, Alert, StyleSheet, TextInput, Pressable } from "react-native";

export default function ModalExemplo({ onClose }: { onClose: () => void }) {
    const [texto, setTexto] = useState("");

    function onRequestClose() {
        Alert.alert("O modal fechou");
        onClose();
    }

    return (
        <Modal 
                visible={true}
                transparent={true}
                animationType="fade"
                onRequestClose={onRequestClose}
            >
                <Pressable style={styles.centeredView} onPress={() => onClose()}>
                    <View style={styles.modalView}>
                        <Text>Hello world!</Text>
                        <TextInput style={styles.input} value={texto} onChangeText={setTexto} />
                        <Button title="Fechar modal" onPress={onClose}/>
                        <Button title="Limpar" onPress={() => setTexto("")}/>
                    </View>
                </Pressable>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000cc"
      },
      modalView: {        
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,        
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      input: {
          borderColor: "black",
          borderWidth: 1,
          width: 200,
          height: 30,
          fontSize: 16
      }
})