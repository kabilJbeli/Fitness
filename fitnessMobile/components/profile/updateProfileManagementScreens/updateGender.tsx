import { ActivityIndicator, Dimensions, Image, Pressable, ScrollView, Text, View } from "react-native";
import * as React from "react";
import Images from "../../../assets/Images";
import { useEffect, useState } from "react";
import { _retrieveData, getMemberInformation } from "../../../utils/utils";
import IconM from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import * as _ from "lodash";
import axios from "axios";
import Environment from "../../../Environment";
import { Modal } from "../../modal/modal";

const UpdateGender = (props: any) => {
  const [gender, setGender] = useState<any>(null);
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
        setGender(parsedInfo.gender);
      }
    });
  }, [props]);


  const updateClient = (pictures: any[]) => {
    setModalVisible(true);
    const payload: any = state.user;
    payload.gender = gender;
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
    return gender === null;
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
        alignSelf: "flex-start",
        width: "100%",
        padding: 15,
        justifyContent: "space-around"
      }}>

        <View>
          <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 32, color: "#000", marginBottom: 5 }}>Dites-nous
            a propos de vous?</Text>
          <Text style={{ textAlign: "center" }}>Pour nous aider à améliorer le contenu que nous vous proposons, veuillez
            nous fournir avec des informations spécifiques</Text>
        </View>
        <ScrollView style={{
          height: Dimensions.get("window").height * 0.65
        }}
                    contentContainerStyle={{
                      flexGrow: 1,
                      paddingTop: 15,
                      justifyContent:"space-between"
                    }}>
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
              padding: 30,
              width: 185,
              height: 185,
              backgroundColor: gender === "Male" ? "#126f80" : "#d9d9d9",
              borderRadius: 180,
              marginBottom: 10
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
            setGender("Female");
          }}>
            <View style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 30, width: 185, height: 185,
              backgroundColor: gender === "Female" ? "#126f80" : "#d9d9d9"
              , borderRadius: 180,
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

                marginBottom: 15,
                width: "100%",
                backgroundColor: "#126f80",
                opacity: getStatus() ? 0.5 : 1
              }} onPress={() => {
              updateClient([])
            }}>
              <Text style={{ color: "#fff", textDecorationLine: "none", textAlign: "center" }}>Suivant</Text>
            </Pressable>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
};

export default UpdateGender;
