import React, { useState, useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, Button } from "react-native";

export default function Camera() {
  return (
    <View style={styles.container}>
      <Button title={"Scanner"} onPress={() => {}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
