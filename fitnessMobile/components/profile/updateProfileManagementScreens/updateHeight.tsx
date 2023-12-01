import { ActivityIndicator, Dimensions, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import * as React from "react";
import { useEffect, useState } from "react";
import { _retrieveData, getMemberInformation } from "../../../utils/utils";
import { Picker } from "react-native-wheel-pick";
import * as _ from "lodash";
import IconM from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Environment from "../../../Environment";
import { Modal } from "../../modal/modal";

const UpdateHeight = (props: any) => {
  const [height, setHeight] = useState<string>("160"); // Initialize with an empty string instead of null
  const [heights, setHeights] = useState<string[]>([]); // Initialize with an empty string instead of null
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
        setHeight(parsedInfo.taille);
      }
    });
    setHeights(_.range(130, 250).map(String));

  }, [props]);


  const updateClient = (pictures: any[]) => {
    setModalVisible(true);
    const payload: any = state.user;
    payload.taille = height;
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
    return height === ""; // Check if height is an empty string
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
          <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 32, color: "#000", marginBottom: 5 }}>Quelle
            est votre taille?</Text>
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
          <Picker
            style={{ backgroundColor: "white", width: "100%", height: 350, marginBottom: 30 }}
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
              backgroundColor: "#126f80",
              width: "100%"
            }, { opacity: getStatus() ? 0.5 : 1 }]} onPress={() => {
            updateClient([]);
          }}>
            <Text style={{
              color: "#fff",
              textDecorationLine: "none",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 15
            }}>Update</Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
};

export default UpdateHeight;

const styles = StyleSheet.create({
  InputContainerStyle: {
    fontSize: 80,
    textAlign: "center",
    color: "#000"
  },
  ErrorStyle: {}
});
