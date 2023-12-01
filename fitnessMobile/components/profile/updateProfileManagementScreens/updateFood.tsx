import { View, Text, Pressable, TextInput, ActivityIndicator, Dimensions, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import * as React from "react";
import { _retrieveData, getMemberInformation } from "../../../utils/utils";
import IconM from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Environment from "../../../Environment";
import { Modal } from "../../modal/modal";

const UpdateFood = (props: any) => {
  const [food, setFood] = useState<string>(""); // Initialize with an empty string instead of null
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
        setFood(parsedInfo.foodrequirements);
      }
    });
  }, [props]);


  const updateClient = (pictures: any[]) => {
    setModalVisible(true);
    const payload: any = state.user;
    payload.foodrequirements = food;
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
        getMemberInformation(payload.keycloakkey)

        // @ts-ignore
        navigation.navigate("profile", { state });
      })
      .catch((err: any) => {
        setModalVisible(false);
        console.error("api/usersmanagement/updateUser", err);
      });
  };


  const getStatus = (): boolean => {
    return food === ""; // Check if food is an empty string
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
          <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 32, color: "#000", marginBottom: 5 }}>Les
            aliments à éviter dans son régime?</Text>
          <Text style={{ textAlign: "center" }}>Pour nous aider à améliorer le contenu que nous vous proposons, veuillez
            nous fournir avec des informations spécifiques</Text>
        </View>
        <ScrollView style={{
          height: Dimensions.get("window").height * 0.6
        }}
                    contentContainerStyle={{
                      flexGrow: 1,
                      paddingTop: 15,
                      justifyContent:"flex-end"
                    }}>
          <TextInput
            style={{
              flex: 1,
              textAlignVertical: "top",
              justifyContent: "flex-start",
              backgroundColor: "#f2f2f2",
              minHeight: 100,
              maxHeight:150,
              padding: 10,
              borderRadius: 8
            }}
            placeholder="écrire ici :"
            multiline={true}
            onChangeText={(value: string) => setFood(value)} // Use the value directly
            value={food}
          />

          <Pressable
            disabled={getStatus()}
            style={({ pressed }) => [{
              padding: 15,
              borderRadius: 8,
              marginTop: 10, // Changed marginTop to match the style of the other pages
              backgroundColor: "#126f80",
              width: "100%"
            }, { opacity: getStatus() ? 0.5 : 1 }]}
            onPress={() => {
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
  );
};

export default UpdateFood;
