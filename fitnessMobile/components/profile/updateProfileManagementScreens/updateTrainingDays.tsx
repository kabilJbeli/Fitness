import { View, Text, Pressable, ActivityIndicator, Dimensions, ScrollView } from "react-native";

import { useEffect, useState } from "react";
import * as React from "react";
import { _retrieveData, getMemberInformation } from "../../../utils/utils";
import { Picker } from "react-native-wheel-pick";
import IconM from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Environment from "../../../Environment";
import { Modal } from "../../modal/modal";

const UpdateTrainingDays = (props: any) => {
  const [trainingDays, setSelectedTrainingDays] = useState(1);
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const defaultState = {
    user: {
      keycloakkey: null,
      name: null,
      surname: null,
      email: null,
      password: null,
      confirmPassword: null,
      phone: null,
      emailUsed: false,
      isCheckingEmail: false,
      emailFormatValidity: true,
      age: null,
      poids: null,
      taille: null,
      objectif: null
    }
  };
  const [state, setState] = useState<any>(defaultState);
  useEffect(() => {
    _retrieveData("memberInfo").then((info: any) => {
      let parsedInfo = JSON.parse(info);
      if (parsedInfo !== undefined) {
        setState({ user: { ...state.user, ...parsedInfo } });
        setSelectedTrainingDays(parsedInfo.daysworkout);
      }
    });
  }, [props]);
  const updateClient = (pictures: any[]) => {
    setModalVisible(true);
    const payload: any = state.user;
    payload.daysworkout = trainingDays;
    axios({
      method: "PUT",
      url: `${Environment.API_URL}/api/usersmanagement/updateUser`,
      headers: {
        "Content-Type": "application/json",
        useQueryString: false
      },
      data: payload,
      params: {}
    })
      .then(response => {
        setModalVisible(false);
        getMemberInformation(payload.keycloakkey);
        // @ts-ignore
        navigation.navigate("profile", { state });
      })
      .catch((err: any) => {
        setModalVisible(false);
        console.error("api/usersmanagement/updateUser", err);
      });
  };
  return (
    <View style={{
      backgroundColor: "#fff"
    }}>
      <Modal isVisible={isModalVisible}>
        <Modal.Container>
          <Modal.Body>
            <ActivityIndicator size="large" color={"#fff"} />
          </Modal.Body>
        </Modal.Container>
      </Modal>
      <View style={{ marginTop: 0 }}>
        <Pressable
          style={{ width: 80, flexDirection: "row" }}
          onPress={() => {
            navigation.goBack();
          }}
        ><IconM name="arrow-back" size={32} color={"#000"} />
        </Pressable>
      </View>
      <View style={{
        alignSelf: "center",
        width: "100%",
        padding: 15,
        justifyContent: "space-around"
      }}>
        <View>
          <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 32, color: "#000", marginBottom: 5 }}>Entraînement
            par semaine?</Text>
          <Text style={{ textAlign: "center" }}>Pour nous aider à améliorer le contenu que nous vous proposons, veuillez
            nous fournir avec des informations spécifiques</Text>
        </View>
        <View>

          <ScrollView style={{ height: Dimensions.get("window").height * 0.6 }}
                      contentContainerStyle={{ flexGrow: 1, justifyContent: "space-around" }}>
            <Picker
              style={{ backgroundColor: "white", width: "100%", height: 300 }}
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
                backgroundColor: "#126f80",
                width: "100%"
              }]} onPress={() => {
              updateClient([]);
            }}>
              <Text style={{
                color: "#fff",
                textDecorationLine: "none",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 18
              }}>Update</Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default UpdateTrainingDays;
