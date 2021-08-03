//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Modal from "./modal";

// create a component
const ImageFadeIn = (props) => {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <Modal
        display={display}
        item={props.item}
        setDisplay={setDisplay}
        setImages={props.setImages}
      />
      <Animatable.View
        style={{
          bottom: props.bottom || 0,
          left: props.left || 0,
          position: "absolute",
        }}
        animation="fadeInUp"
        easing="linear"
        iterationCount={1}
        delay={2500}
        duration={1000}>
        <TouchableWithoutFeedback onPress={() => setDisplay(true)}>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: "white",
            }}
            source={props.source}
          />
        </TouchableWithoutFeedback>
      </Animatable.View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});

//make this component available to the app
export default ImageFadeIn;
