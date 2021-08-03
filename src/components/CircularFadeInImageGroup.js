//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageFade from "./imageFadeIn";
import Circ from "../components/circularProgress";
import AddImageIcon from "../components/addImageIcon";
import * as Animatable from "react-native-animatable";
// create a component
const MyComponent = (props) => {
  const Comp = ({ item, images, setImages }) => {
    return (
      <>
        {item.uri !== null ? (
          <ImageFade
            setImages={setImages}
            item={item}
            key={item.id}
            source={{ uri: item.uri }}
            bottom={
              Math.round(
                Math.cos((360 / images.length) * item.id * (Math.PI / 180)) *
                  props.radius
              ) - 25
            }
            left={
              Math.round(
                Math.sin((360 / images.length) * item.id * (Math.PI / 180)) *
                  props.radius
              ) - 25
            }
          />
        ) : (
          <AddImageIcon
            bottom={
              Math.round(
                Math.cos((360 / images.length) * item.id * (Math.PI / 180)) *
                  props.radius
              ) - 25
            }
            left={
              Math.round(
                Math.sin((360 / images.length) * item.id * (Math.PI / 180)) *
                  props.radius
              ) - 25
            }
          />
        )}
      </>
    );
  };
  const [images, setImages] = useState([
    {
      id: 0,
      uri: "data:image/jpeg;base64,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",
    },
    {
      id: 1,
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQioVcFdD1VcOXbPdWh8kd8XHF4sSujdxqkMQ&usqp=CAU",
    },
    {
      id: 2,
      uri: null,
    },
    {
      id: 3,
      uri: "data:image/jpeg;base64,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",
    },
    {
      id: 4,
      uri: null,
    },
  ]);

  // const [selectedImage, setSelectedImage] = useState(null)

  return (
    <View
      style={{
        top: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {/* <Modal display={selectedImage === null ? false : true}/> */}
      <Animatable.View
        animation={{
          from: {
            rotateZ: "0deg",
            scaleX: 1.1,
          },
          to: {
            rotateZ: "180deg",
            scaleX: 1.1,
          },
        }}
        duration={1000}
        delay={6000}
        iterationCount={2}
        easing="linear"
        style={{
          backgroundColor: "#9b77d1",
          width: props.radius * 3,
          height: props.radius * 3,
          borderRadius: props.radius * 1.5,
          position: "absolute",
        }}
      />
      {/* changed here */}
      <View style={{ right: 60, bottom: 60, position: "absolute" }}>
        <Circ
          imageStyles={{
            width: (props.radius * 5) / 6,
            height: (props.radius * 5) / 6,
            borderRadius: (props.radius * 5) / 12,
            marginLeft: 22,
            marginTop: (props.radius * 5) / 18,
            borderWidth: 2,
            borderColor: "white",
          }}
          inActiveStrokeColor="white"
          activeStrokeColor="white"
          activeStrokeWidth={120}
          inActiveStrokeWidth={30}
          radius={(props.radius * 2) / 3}
          duration={2000}
          initialValue={100}
          value={0}
          imageSource="data:image/jpeg;base64,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"
        />
      </View>
      <Animatable.View
        style={{ zIndex: 1 }}
        useNativeDriver
        animation="rotate"
        delay={4000}
        duration={2000}
        easing="linear">
        {images.map((item, key) => (
          <Comp item={item} key={key} images={images} setImages={setImages} />
        ))}
      </Animatable.View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default MyComponent;
