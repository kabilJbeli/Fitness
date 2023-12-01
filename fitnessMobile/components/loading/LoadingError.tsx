import { Pressable, StatusBar, Text, View } from "react-native";
import { Modal } from "../modal/modal";
import React from "react";

const LoadingError = (props:any)=>{

  return (
    <View style={{ flex: 1, flexDirection: "column", backgroundColor: "#fff", height: "100%", marginTop: 0 }}>
      <StatusBar
        translucent={true}
        backgroundColor="#000"
        animated={true}
      />
      <Modal isVisible={true}>
        <Modal.Container>
          <Modal.Body>
            <View>
              <Text style={{ color: "white", fontWeight: "bold" }}>An error Has Occurred Please Try Again Later!</Text>
              <Pressable
                style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }, {
                  backgroundColor: "#2c65c9",
                  padding: 15,
                  marginBottom: 10
                }]}
                onPress={() => {
                  console.log(props)
                  props.logout();
                }}
              ><Text style={{ color: "#fff", textAlign: "center" }}>Logout</Text></Pressable>
            </View>
          </Modal.Body>
        </Modal.Container>
      </Modal>
    </View>
  );
}

export default LoadingError;
