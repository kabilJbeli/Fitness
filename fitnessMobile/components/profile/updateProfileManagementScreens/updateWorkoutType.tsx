import { ActivityIndicator, Image, Pressable, Text, View } from "react-native";
import * as React from "react";
import Images from "../../../assets/Images";
import { useEffect, useState } from "react";
import IconM from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { _retrieveData, getMemberInformation } from "../../../utils/utils";
import * as _ from "lodash";
import axios from "axios";
import Environment from "../../../Environment";
import { Modal } from "../../modal/modal";

const UpdateWorkoutType = (props: any) => {
  const [workout, setWorkout] = useState<any>(null);
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
        setWorkout(parsedInfo.workouthome);
      }
    });
  }, [props]);


  const updateClient = (pictures: any[]) => {
    setModalVisible(true);
    const payload: any = state.user;
    payload.workouthome = workout;
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

  const getStatus = (): boolean => {
    return workout === null;
  };

  return (
    <View
      style={{
        backgroundColor: "#fff"
      }}
    >
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
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 32,
            color: "#000",
            position: "absolute",
            top: 50
          }}
        >
          S’entraîne à la salle ou à la maison?
        </Text>

        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginTop: 30,
            width: "100%",
            padding: 15
          }}
        >
          <View style={{ marginBottom: 30 }}>
            <Pressable
              style={{
                flexDirection: "column", // Change to column layout
                alignItems: "center"

              }}
              onPress={() => {
                setWorkout(true);
              }}
            >
              <View style={{
                justifyContent: "center",
                padding: 30,
                width: 185,
                height: 185,
                backgroundColor: workout === true ? "#126f80" : "#d9d9d9",
                borderRadius: 15
              }}>
                <Image
                  source={Images.house}
                  style={{
                    width: "100%",
                    height: "100%"
                  }}
                />
              </View>
              <Text style={{ fontWeight: "bold", color: "#000", fontSize: 16, marginTop: 10 }}>
                À la maison
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
                padding: 30, width: 185, height: 185, backgroundColor: workout === false ? "#126f80" : "#d9d9d9"

                , borderRadius: 15
              }}>
                <Image
                  source={Images.gym}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <Text style={{ fontWeight: "bold", color: "#000", fontSize: 16, marginTop: 10 }}>
                À la salle de sport
              </Text>
            </Pressable>
          </View>

          <Pressable
            disabled={getStatus()}
            style={{
              padding: 15,
              borderRadius: 8,
              marginTop: 15,
              marginBottom: 15,
              width: "100%",
              backgroundColor: "#126f80",
              opacity: getStatus() ? 0.5 : 1
            }} onPress={() => {
            updateClient([]);
          }}>
            <Text style={{ color: "#fff", textDecorationLine: "none", textAlign: "center" }}>Update</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default UpdateWorkoutType;
