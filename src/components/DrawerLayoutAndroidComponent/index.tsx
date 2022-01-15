import { useRef, useState } from "react";
import { Button, Text, View, DrawerLayoutAndroid, StyleSheet } from "react-native";
import Menu from "./Menu";

export default function DrawerLayoutAndroidComponent() {
  const drawer = useRef<any>(null);

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="right"
      renderNavigationView={() => <Menu closeMenu={() => drawer.current.closeDrawer()} />}
    >
      <View style={styles.container}>        
        <Text>
          Arraste para o lado para abrir o menu
        </Text>
        <Button
          title="Abrir o menu"
          onPress={() => drawer.current.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
});