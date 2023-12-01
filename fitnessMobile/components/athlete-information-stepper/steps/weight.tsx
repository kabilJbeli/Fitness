import { Dimensions, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import * as React from "react";
import { useEffect, useState } from "react";
import { _retrieveData } from "../../../utils/utils";
import { Picker } from "react-native-wheel-pick";
import * as _ from "lodash";

const Weight = (props: any) => {
  const [weight, setWeight] = useState<string>("60"); // Initialize with an empty string instead of null
  const [weights, setWeights] = useState<string[]>([]); // Initialize with an empty string instead of null

  useEffect(() => {
    _retrieveData("clientCreation").then(res => {
      if (res !== undefined && res !== null && res !== "") {
        const jsonResponse = JSON.parse(res);
        setWeight(jsonResponse.information.poids);
      }
    });
    setWeights(_.range(40, 400).map(String));

  }, [props]);

  const getStatus = (): boolean => {
    return weight === ""; // Check if weight is an empty string
  };

  return (
    <View style={{
      alignSelf: "flex-start",
      width: "100%",
      padding: 15,
      justifyContent: "space-around"
    }}>
      <View>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 32, color: "#fff", marginBottom: 5 }}>What is your weight ?</Text>
        <Text style={{ textAlign: "center", color: "#fff" }}>Weight will help us determine what kinda of a workout plan that works with your body </Text>
      </View>
      <ScrollView style={{ height: Dimensions.get("window").height * 0.75}} contentContainerStyle={{ flexGrow: 1,justifyContent:"space-between" }}>
        <Picker
          textColor="#fff"

          style={{ backgroundColor: "transparent", width: "100%", height: 350, marginBottom: 30,marginTop:50}}
          selectedValue={weight}
          pickerData={weights}
          onValueChange={(value: any) => {
            console.log(value);
            setWeight(value);
          }}
        />
        <Pressable
          disabled={getStatus()}
          style={({ pressed }) => [{
            padding: 15,
            borderRadius: 8,
            marginTop: -20, // Changed marginTop to match the style of the other pages
            backgroundColor: "#0DB0D4",
            width: "100%"
          }, { opacity: getStatus() ? 0.5 : 1 }]} onPress={() => {
          props.next(weight);
        }}>
          <Text style={{
            color: "#fff",
            textDecorationLine: "none",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 15
          }}>Next</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default Weight;

const styles = StyleSheet.create({
  InputContainerStyle: {
    fontSize: 80,
    textAlign: "center",
    color: "#000"
  },
  ErrorStyle: {}
});
