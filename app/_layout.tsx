import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import "../global.css"

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Stack
        screenOptions={{
          headerShown: false, 
        }}
      />
    </>
  );
}