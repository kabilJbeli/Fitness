import { View, Text, Pressable, TextInput, Dimensions, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import * as React from "react";
import { _retrieveData } from "../../../utils/utils";

const Allergies = (props: any) => {
  const [allergies, setAllergies] = useState<string>(""); // Initialize with an empty string instead of null

  useEffect(() => {
    _retrieveData("clientCreation").then(res => {
      if (res !== undefined && res !== null && res !== "") {
        const jsonResponse = JSON.parse(res);
        setAllergies(jsonResponse.information.allergiedescription);
      }
    });
  }, [props]);

  const getStatus = (): boolean => {
    return allergies === ""; // Check if allergies is an empty string
  };

  return (
    <View style={{
      alignSelf: "flex-start",
      width: "100%",
      padding: 15,
      justifyContent: "space-around"
    }}>
      <View>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 32, color: "#0DB0D4", marginBottom: 5 }}>Nutrition</Text>

        <Text style={{ textAlign: "center", color:"#fff" }}>Please specify if you have any sort of food or ingredients
          that you don’t like or can’t eat</Text>
      </View>
      <ScrollView style={{ height: Dimensions.get("window").height * 0.75 }}
                  contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}>
        <TextInput
          style={{
            flex: 1,
            textAlignVertical: "top",
            justifyContent: "flex-start",
            backgroundColor: "#f2f2f2",
            minHeight: 100,
            maxHeight: 150,
            padding: 10,
            borderRadius: 8
          }}
          placeholder="write here:"
          multiline={true}
          onChangeText={(value: string) => setAllergies(value)} // Use the value directly
          value={allergies}
        />
        <Pressable
          disabled={getStatus()}
          style={({ pressed }) => [{
            padding: 15,
            borderRadius: 8,
            marginTop: 10, // Changed marginTop to match the style of the other pages
            backgroundColor: "#0DB0D4",
            width: "100%"
          }, { opacity: getStatus() ? 0.5 : 1 }]}
          onPress={() => {
            props.next(allergies);
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

export default Allergies;
