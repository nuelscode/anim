//import liraries
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import Plus from "./images/plus.png";
import Avatar from "./images/user.png";
import * as Animatable from "react-native-animatable";

// create a component
const AddImageIcon = (props) => {
  return (
    <TouchableHighlight>
      <Animatable.View
        animation="fadeInUp"
        easing="linear"
        iterationCount={1}
        delay={2500}
        duration={1000}
        style={{
          bottom: props.bottom || 0,
          left: props.left || 0,
          backgroundColor: "transparent",
          borderWidth: 2,
          position: "absolute",
          borderRadius: 25,
          width: 50,
          height: 50,
          borderColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Image
          source={Avatar}
          style={{
            borderRadius: 25,
            width: "100%",
            height: "100%",
            position: "absolute",
            //   backgroundColor: "black",
          }}
        />
        <Image
          source={Plus}
          style={{
            borderRadius: 25,
            width: "50%",
            height: "50%",
            position: "absolute",
          }}
        />
      </Animatable.View>
    </TouchableHighlight>
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
export default AddImageIcon;
