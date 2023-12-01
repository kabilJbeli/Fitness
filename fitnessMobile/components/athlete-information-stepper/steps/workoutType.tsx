import { Dimensions, Image, Pressable, ScrollView, Text, View } from "react-native";
import * as React from "react";
import Images from "../../../assets/Images";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';

const WorkoutType = (props: any) => {
  const [workout, setWorkout] = useState<any>(null);
  const [home, setHome] = useState<any>(null);

  const getStatus = (): boolean => {
    return workout === null;
  };
  const navigation = useNavigation();

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 32,
          color: "#fff"
        }}
      >
        Workout at home or at the gym?
      </Text>
      <ScrollView
        style={{
          height: Dimensions.get("window").height * 0.80,
          width: "100%"
        }}
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 30,
          width: "100%",
          padding: 15
        }}
      >

        <View>
          <View style={{ marginBottom: 30 }}>
            <Pressable
              style={{
                flexDirection: "column", // Change to column layout
                alignItems: "center"
              }}
              onPress={() => {
                setWorkout(true);
                setHome(true);
              }}
            >
              <View style={{
                justifyContent: "center",
                width: 300,
                height: 185,
                borderColor: home === true ? "#126f80" : "#FFFFFF",
                borderWidth: 3,
                borderRadius: 60
              }}>
                <Image
                  source={Images.house}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 60
                  }}
                />
              </View>
              <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 16, marginTop: 10 }}>
                At home
              </Text>
            </Pressable>
          </View>

          <View>
            <Pressable
              style={{
                flexDirection: "column", // Change to column layout
                alignItems: "center"
              }}
              onPress={() => {
                setWorkout(false);
              }}
            >
              <View style={{
                justifyContent: "center",
                width: 300,
                height: 185,
                borderColor: workout === false ? "#126f80" : "#FFFFFF",
                borderWidth: 3,
                borderRadius: 60
              }}>
                <Image
                  source={Images.gym}
                  style={{ width: "100%", height: "100%", borderRadius: 60 }}
                />
              </View>
              <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 16, marginTop: 10 }}>
                At the gym
              </Text>
            </Pressable>
          </View>
        </View>
        <Pressable
          style={{
            padding: 15,
            borderRadius: 8,
            marginTop: 15,
            marginBottom: 15,
            width: '100%',
            backgroundColor: '#126f80',
            opacity: getStatus() ? 0.5 : 1,
          }}
          onPress={() => {
            if (home) {
console.log("equipment")
              navigation.navigate("equipment");
            } else {
              console.log("photos")

              navigation.navigate("photos");
            }
          }}
        >
          <Text style={{ color: '#fff', textDecorationLine: 'none', textAlign: 'center' }}>Next</Text>
        </Pressable>

      </ScrollView>
    </View>
  );
};

export default WorkoutType;
