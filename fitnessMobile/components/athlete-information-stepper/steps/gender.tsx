import { Dimensions, Image, Pressable, ScrollView, Text, View } from "react-native";
import * as React from "react";
import Images from "../../../assets/Images";
import { useEffect, useState } from "react";
import { _retrieveData } from "../../../utils/utils";

const Gender = (props: any) => {
  const [gender, setGender] = useState<any>(null);


  useEffect(() => {
    _retrieveData("clientCreation").then(res => {
      if (res !== undefined && res !== null && res !== "") {
        const jsonResponse = JSON.parse(res);
        setGender(jsonResponse.information.gender);
      }
    });
  }, [props]);

  const getStatus = (): boolean => {
    return gender === null;
  };

  return (
    <View style={{
      backgroundColor:"transparent",
      alignSelf: "flex-start",
      width: "100%",
      padding: 15,
      justifyContent: "space-around"
    }}>
      <View>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 32, color: "#0DB0D4", marginBottom: 5 }}>What's your gender?</Text>
        <Text style={{ textAlign: "center", color: "#fff" }}>To help us improve the content we deliver to you please
          provide us with specific information</Text>
      </View>
      <ScrollView style={{
        height: Dimensions.get("window").height * 0.77
      }}
                  contentContainerStyle={{
                    flexGrow: 1,
                    paddingTop: 30,
                    justifyContent:"space-between"
                  }}
      >
        <Pressable
          style={{
            flexDirection: "column", // Change to column layout
            alignItems: "center"

          }} onPress={() => {
          setGender("Male");
        }}>
          <View style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 15,
            width: 185,
            height: 185,
            backgroundColor: gender === "Male" ? "#0DB0D4" : "#d9d9d9",
            borderRadius: 180,
            marginTop:60
          }}>
            <Image
              source={Images.homme}
              style={{ width: 135, height: 80 }}
            />
            <Text style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 15,
              fontWeight: "bold",
              marginTop: 10
            }}>Male</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            flexDirection: "column", // Change to column layout
            alignItems: "center"
          }} onPress={() => {
          setGender("Femelle");
        }}>
          <View style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 15, width: 185, height: 185,
            backgroundColor: gender === "Femelle" ? "#0DB0D4" : "#d9d9d9",
            borderRadius: 180,
            marginBottom: 15
          }}>
            <Image
              source={Images.femme}
              style={{ width: 90, height: 90 }}
            />
            <Text style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 15,
              fontWeight: "bold",
              marginTop: 10
            }}>Femme</Text>
          </View>
          <Pressable
            disabled={getStatus()}
            style={{
              padding: 15,
              borderRadius: 8,
              position:"relative",
              marginBottom: 15,
              width: "100%",
              backgroundColor: "#0DB0D4",
              opacity: getStatus() ? 0.5 : 1
            }} onPress={() => {
            props.next(gender);
          }}>
            <Text style={{ color: "#fff", textDecorationLine: "none", textAlign: "center",fontSize:15,fontWeight: "bold"}}>Next</Text>
          </Pressable>
        </Pressable>
      </ScrollView>
    </View>
  );

};
export default Gender;
