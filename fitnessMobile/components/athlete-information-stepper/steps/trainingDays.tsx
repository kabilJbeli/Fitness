import { View, Text, Pressable, Dimensions, ScrollView } from "react-native";

import { useEffect, useState } from "react";
import * as React from "react";
import { _retrieveData } from "../../../utils/utils";
import { Picker } from "react-native-wheel-pick";

const TrainingDays = (props: any) => {
  const [trainingDays, setSelectedTrainingDays] = useState(1);

  useEffect(() => {
    _retrieveData("clientCreation").then(res => {
      if (res !== undefined && res !== null && res != "") {
        const jsonResponse = JSON.parse(res);
        setSelectedTrainingDays(jsonResponse.information.daysworkout);
      }
    });
  }, [props]);
  return (
    <View style={{
      alignSelf: "center",
      width: "100%",
      padding: 15,
      justifyContent: "space-around"
    }}>
      <View>
      <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 32, color: "#0DB0D4", marginBottom: 5 }}>How many workout days a week?</Text>
      <Text style={{ textAlign: "center", color: "#fff" }}>please select how many days will you like to train in a week
        this will help us build a workout plan for you</Text>
      </View>
      <View>
        <ScrollView style={{ height: Dimensions.get("window").height * 0.75 }}
                    contentContainerStyle={{ flexGrow: 1, justifyContent: "space-around" }}>
          <Picker
            textColor="#fff"

            style={{ backgroundColor: "transparent", width: "100%", height: 350, marginBottom: 30}}
            selectedValue={trainingDays}
            pickerData={[1, 2, 3, 4, 5]}
            onValueChange={(value: any) => {
              console.log(value);
              setSelectedTrainingDays(value);
            }}
          />

          <Pressable
            style={({ pressed }) => [{
              padding: 15,
              borderRadius: 8,
              marginTop: 30,
              backgroundColor: "#0DB0D4",
              width: "100%"
            }]} onPress={() => {
            props.next(trainingDays);
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
    </View>
  );
};

export default TrainingDays;
