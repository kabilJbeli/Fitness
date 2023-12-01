import { ActivityIndicator, StatusBar, View, Text } from "react-native";
import { Modal } from "../modal/modal";
import React from "react";

const Loading = (props:any) => {

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
           <ActivityIndicator size="large" color={"#fff"} />
          </Modal.Body>
        </Modal.Container>
      </Modal>
    </View>
  );
};

export default Loading;
