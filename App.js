import React from "react";
import Main from "./src/pages/Main";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Main />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
