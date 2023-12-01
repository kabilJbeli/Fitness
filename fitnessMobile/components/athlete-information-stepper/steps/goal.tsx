import { Pressable, Text, View } from "react-native";
import * as React from "react";

const Goal = (props: any) => {


  return (
    <View style={{
      height: "95%",
      alignSelf: "flex-start",
      width: "100%",
      padding: 15,
      justifyContent: "space-around"
     }}>
      <View>
      <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 32, color: "#fff", marginBottom: 30 }}>what is your goal ?</Text>
      </View>
      <View>
        <Pressable
          style={{
            padding: 15,
            borderRadius: 8,

            marginBottom: 15,
            width: "100%",
            backgroundColor:"#0DB0D4"
          }}  onPress={() => {
            props.next(0);
          }}>
          <Text style={{
            color: "#fff",
            textDecorationLine: "none",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 18 }}>Get in shape</Text>
          <Text style={{ color: "#fff", textDecorationLine: "none", textAlign: "center" }}>Tone up & live healthily</Text>
        </Pressable>
        <Pressable
          style={{
            padding: 15,
            borderRadius: 8,
            marginBottom: 15,
            width: "100%",
            backgroundColor:"#0DB0D4"
          }}   onPress={() => { props.next(1); }}>
          <Text style={{
            color: "#fff",
            textDecorationLine: "none",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 18  }}>Build a muscular body</Text>
          <Text style={{ color: "#fff", textDecorationLine: "none", textAlign: "center" }}>Gain muscle mass</Text>
        </Pressable>
        <Pressable
          style={{
            padding: 15,
            borderRadius: 8,
            marginBottom: 15,
            width: "100%",
            backgroundColor:"#0DB0D4"
          }}  onPress={() => {  props.next(2);  }}>
          <Text style={{
            color: "#fff",
            textDecorationLine: "none",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 18 }}>Lose weight</Text>
          <Text style={{ color: "#fff", textDecorationLine: "none", textAlign: "center" }}>Develop your energy</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Goal;
