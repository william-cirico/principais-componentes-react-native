import React, { useRef, useState } from "react";
import { Button, Text, StyleSheet, View, StatusBar } from "react-native";
import DimensionsComponent from "./src/components/DimensionsComponent";
import DrawerLayoutAndroidComponent  from "./src/components/DrawerLayoutAndroidComponent/";
import FlatListComponente from "./src/components/FlatListComponent/index";
import KeyboardAvoidingViewComponent from "./src/components/KeyboardAvoidingViewComponent";
import ModalComponent from "./src/components/ModalComponent/index";
import PermissionComponent from "./src/components/PermissionComponent";
import RefreshComponent from "./src/components/RefreshComponent";
import ToastComponent from "./src/components/ToastComponents";

export default function App() {
  return (
    <>
      <StatusBar />
      {/* <DrawerLayoutAndroidComponent /> */}
      {/* <ToastComponent /> */}
      {/* <DimensionsComponent /> */}
      {/* <ModalComponent /> */}
      {/* <RefreshComponent /> */}
      {/* <PermissionComponent /> */}
      <KeyboardAvoidingViewComponent />
    </>
  );
};