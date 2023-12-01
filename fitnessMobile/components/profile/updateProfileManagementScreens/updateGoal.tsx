import { ActivityIndicator, Pressable, Text, View } from "react-native";
import * as React from "react";
import IconM from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import axios from "axios";
import Environment from "../../../Environment";
import { _retrieveData, getMemberInformation } from "../../../utils/utils";
import { Modal } from "../../modal/modal";

const UpdateGoal = (props: any) => {
  const navigation = useNavigation();
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
  const [goal, setGoal] = useState<any>(null);
  const [isModalVisible, setModalVisible] = useState(false);


  useEffect(() => {
    _retrieveData("memberInfo").then((info: any) => {
      let parsedInfo = JSON.parse(info);
      if (parsedInfo !== undefined) {
        setState({ user: { ...state.user, ...parsedInfo } });
        setGoal(parsedInfo.objectif);
      }
    });
  }, [props]);

  const updateClient = (pictures: any[]) => {
    setModalVisible(true);

    const payload: any = state.user;
    payload.objectif = goal;
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
      <View style={{
        height: "100%",
        alignSelf: "flex-start",
        width: "100%",
        padding: 15,
        justifyContent: "space-between"
      }}>
        <View style={{ marginTop: 0 }}>
          <Pressable
            style={{ width: 80, flexDirection: "row" }}
            onPress={() => {
              navigation.goBack();
            }}
          ><IconM name="arrow-back" size={32} color={"#000"} />
          </Pressable>
        </View>

        <View>
          <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 32, color: "#000", marginBottom: 30 }}>Qu'elle
            est votre objectif?</Text>
        </View>
        <View>
          <View>
            <Pressable
              style={{
                padding: 15,
                borderRadius: 8,

                marginBottom: 15,
                width: "100%",
                backgroundColor: "#126f80",
                opacity: goal === 0 ? 1 : 0.5
              }} onPress={() => {
              setGoal(0);

            }}>
              <Text style={{
                color: "#fff",
                textDecorationLine: "none",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 18
              }}>Me remettre en forme</Text>
              <Text style={{ color: "#fff", textDecorationLine: "none", textAlign: "center" }}>Me tonifier & vivre
                sainement</Text>
            </Pressable>
            <Pressable
              style={{
                padding: 15,
                borderRadius: 8,
                marginBottom: 15,
                width: "100%",
                backgroundColor: "#126f80",
                opacity: goal === 1 ? 1 : 0.5
              }} onPress={() => {
              setGoal(1);
            }}>
              <Text style={{
                color: "#fff",
                textDecorationLine: "none",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 18
              }}>Prendre du muscle</Text>
              <Text style={{ color: "#fff", textDecorationLine: "none", textAlign: "center" }}>Gagner masse
                musculaire</Text>
            </Pressable>
            <Pressable
              style={{
                padding: 15,
                borderRadius: 8,
                marginBottom: 15,
                width: "100%",
                backgroundColor: "#126f80",
                opacity: goal === 2 ? 1 : 0.5
              }} onPress={() => {
              setGoal(2);
            }}>
              <Text style={{
                color: "#fff",
                textDecorationLine: "none",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 18
              }}>Perdre du pods</Text>
              <Text style={{ color: "#fff", textDecorationLine: "none", textAlign: "center" }}>Développer votre
                énergie</Text>
            </Pressable>
          </View>
          <View style={{ marginTop: 30 }}>
            <Pressable
              disabled={goal === null}
              style={({ pressed }) => [{
                padding: 15,
                borderRadius: 8,
                marginTop: -20,
                backgroundColor: "#126f80",
                width: "100%",
                opacity:goal===null?0.3:1
              }]} onPress={() => {
              updateClient([]);
            }
            }>
              <Text style={{
                color: "#fff",
                textDecorationLine: "none",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 15
              }}>Update</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UpdateGoal;
