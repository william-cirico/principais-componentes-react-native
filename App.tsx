import React, { useRef, useState } from "react";
import { Button, Text, StyleSheet, View, StatusBar } from "react-native";
import DimensionsComponent from "./src/components/DimensionsComponent";
import DrawerLayoutAndroidComponent  from "./src/components/DrawerLayoutAndroidComponent/";
import ToastComponent from "./src/components/ToastComponents";

export default function App() {
  return (
    <>
      <StatusBar />
      {/* <DrawerLayoutAndroidComponent /> */}
      {/* <ToastComponent /> */}
      <DimensionsComponent />
    </>
  );
};