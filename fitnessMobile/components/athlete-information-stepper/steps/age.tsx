import { Dimensions, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import * as React from "react";
import { useEffect, useState } from "react";
import { _retrieveData } from "../../../utils/utils";
import { Picker } from "react-native-wheel-pick";
import * as _ from "lodash";

const Age = (props: any) => {
  const [age, setAge] = useState<any>("18");
  const [ages, setAges] = useState<string[]>([]);

  const getStatus = (): boolean => {
    return age === null || age.length === 0;
  };

  useEffect(() => {
    _retrieveData("clientCreation").then(res => {
      if (res !== undefined && res !== null && res != "") {
        const jsonResponse = JSON.parse(res);
        setAge(jsonResponse.information.age.toString());
      }
    });
    setAges(_.range(12, 150).map(String));
  }, [props]);

  return (
    <View style={{
      alignSelf: "flex-start",
      width: "100%",
      padding: 15,
      justifyContent: "space-between"
    }}>
      <View>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 32, color: "#0DB0D4", marginBottom: 5 }}>How old are you</Text>
        <Text style={{ textAlign: "center", color: "#fff" }}>Age matters in giving you a workout that fits your body
          needs and comfort</Text>
      </View>

      <ScrollView style={{ height: Dimensions.get("window").height * 0.75}} contentContainerStyle={{ flexGrow: 1,justifyContent:"space-between" }}>
        <Picker
          textColor="#fff"

          style={{ backgroundColor: "transparent", width: "100%", height: 350, marginBottom: 30,marginTop:50 }}

          selectedValue={age}
          pickerData={ages}
          onValueChange={(value: any) => {
            console.log(value);
            setAge(value.toString());
          }}
        />
        <Pressable
          disabled={getStatus()}
          style={({ pressed }) => [{
            padding: 15,
            borderRadius: 8,
            marginTop: -100, // Increase the negative marginTop
            backgroundColor: "#0DB0D4",
            width: "100%"
          }, { opacity: getStatus() ? 0.5 : 1 }]} onPress={() => {
          props.next(age);
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

export default Age;

const styles = StyleSheet.create({
  InputContainerStyle: {
    fontSize: 80,
    textAlign: "center",
    color: "#000"
  },
  ErrorStyle: {}
});
