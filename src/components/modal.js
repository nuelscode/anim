import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import Minus from "./images/minus.png";
// import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const App = ({ display, setDisplay, item, setImages }) => {
  return (
    // <View style={styles.centeredView}>
    <Modal
      animationType="fade"
      transparent={false}
      visible={display}
      onRequestClose={() => {
        setDisplay(false);
      }}>
      <View style={styles.centeredView}>
        <TouchableWithoutFeedback
          onPress={() => {
            setImages((prev) => {
              const newImages = [...prev];
              newImages[item.id] = { id: item.id, uri: null };
              return [...newImages];
            });
            setDisplay(false);
            // console.log(item.id);
          }}>
          <Image
            source={Minus}
            style={{
              width: 20,
              height: 20,
              position: "absolute",
              top: 0,
              right: 40,
              zIndex: 1,
            }}
            resizeMode="contain"
          />
        </TouchableWithoutFeedback>
        <Image
          style={{ width: "100%", height: "100%", borderRadius: 50,  }}
          resizeMode="contain"
          source={{
            uri: item.uri,
          }}
        />
      </View>
    </Modal>
    // </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#666060",
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    position: 'absolute',
    right: 50,
    top: 100
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default App;
