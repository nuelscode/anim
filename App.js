import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import ImageFadeIn from "./src/components/CircularFadeInImageGroup";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      {/* <AddImageIcon /> */}
      <ImageFadeIn radius={90} />
      {/* <Modal /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "#fff",
  },
});

// <Circ
//   activeColor="transparent"
//   passiveColor="darkviolet"
//   radius={100}
//   duration={5000}
// />
// <Circle
// percent={percent}
//   radius={100}
//   ringWidth={100}
//   ringColor="red"
//   ringBgColor="blue"
// />
