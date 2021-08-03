//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import * as Animatable from "react-native-animatable";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons'; 
import Modal from "./modal";

// create a component
const ImageFadeIn = (props) => {
  const [display, setDisplay] = useState(false);
  const { item, setImages } = props;
  return (
    <>
      {
        display
        ?  <>
          <View 
            style = {styles.absoluteWrapper}>

             <Image 
                style = {styles.image} 
                source = {{ uri: item.uri }} />

             <TouchableOpacity 
                onPress={() => {
                  setImages((prev) => {
                    const newImages = [...prev];
                    newImages[item.id] = { id: item.id, uri: null };
                    return [...newImages];
                  });
                  setDisplay(false);
                  // console.log(item.id);
                }}
                style = {styles.minusBtnWrapper}>
             <AntDesign name="minus" size={24} color="black" />
             </TouchableOpacity>   
          </View>

           </>
        : null  
      }
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
  minusBtnWrapper: {
     position: "absolute", 
     width: 30, 
     height: 30, 
     borderWidth: 2, 
     borderColor: "#000", 
     borderRadius: 15, 
     alignItems: "center", 
     justifyContent: "center" 
  },
  absoluteWrapper: { 
     width: 140,
     height: 140, 
     position: "absolute", 
     bottom: 70, 
     left: 40 
  },
  image: {
     flex: 1, 
     width: null, 
     height: null, 
     borderRadius: 70 
    }
});

//make this component available to the app
export default ImageFadeIn;