import { Dimensions, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import * as React from "react";
import { useEffect, useState } from "react";
import { _retrieveData } from "../../../utils/utils";
import { Picker } from "react-native-wheel-pick";
import * as _ from "lodash";

const Height = (props: any) => {
  const [height, setHeight] = useState<string>("160"); // Initialize with an empty string instead of null
  const [heights, setHeights] = useState<string[]>([]); // Initialize with an empty string instead of null

  useEffect(() => {
    _retrieveData("clientCreation").then(res => {
      if (res !== undefined && res !== null && res !== "") {
        const jsonResponse = JSON.parse(res);
        setHeight(jsonResponse.information.taille);
      }
    });

    setHeights(_.range(130, 250).map(String));
  }, [props]);

  const getStatus = (): boolean => {
    return height === ""; // Check if height is an empty string
  };

  return (
    <View style={{

      alignSelf: "flex-start",
      width: "100%",
      padding: 15,
      justifyContent: "space-around"
    }}>
      <View>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 32, color: "#fff", marginBottom: 5 }}>How tall are you?</Text>
        <Text style={{ textAlign: "center", color: "#fff" }}>Height will help us determine what kinda of a workout plan that works with your body </Text>
      </View>

      <ScrollView style={{ height: Dimensions.get("window").height * 0.75}} contentContainerStyle={{ flexGrow: 1,justifyContent:"space-between" }}>

        <Picker
          textColor="#fff"

          style={{ backgroundColor: "transparent", width: "100%", height: 350, marginBottom: 30,marginTop:50}}
          selectedValue={height}
          pickerData={heights}
          onValueChange={(value: any) => {
            console.log(value);
            setHeight(value);
          }}
        />
        <Pressable
          disabled={getStatus()}
          style={({ pressed }) => [{
            padding: 15,
            borderRadius: 8,
            marginTop: -20,
            backgroundColor: "#0DB0D4",
            width: "100%"
          }, { opacity: getStatus() ? 0.5 : 1 }]} onPress={() => {
          props.next(height);
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

export default Height;

const styles = StyleSheet.create({
  InputContainerStyle: {
    fontSize: 80,
    textAlign: "center",
    color: "#000"
  },
  ErrorStyle: {}
});
