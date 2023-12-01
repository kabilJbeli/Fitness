import {
  ActivityIndicator, Dimensions,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import IconM from "react-native-vector-icons/MaterialIcons";
import { keyboardVerticalOffset } from "../../shared/config";
import { Input } from "react-native-elements";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { _retrieveData, _storeData, getMemberInformation } from "../../utils/utils";
import axios from "axios/index";
import Environment from "../../Environment";
import * as _ from "lodash";
import { Modal } from "../modal/modal";

const updateProfile = (props: any) => {
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
      taille: null
    }
  };
  const [state, setState] = useState<any>(defaultState);
  const [isModalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState<any>(null);


  useEffect(() => {
    _retrieveData("memberInfo").then((info: any) => {
      let parsedInfo = JSON.parse(info);
      if (parsedInfo !== undefined) {
        console.log(parsedInfo);
        setState({ user: { ...state.user, ...parsedInfo } });
        console.log(state.user);
      }
    });
  }, [props]);

  const getButtonStatus = () => {
    return state.user.name === null || state.user.surname === null || state.user.email === null
      || state.user.emailUsed === true || state.user.isCheckingEmail === true
      || state.user.emailFormatValidity === false;
  };


  const updateClient = (pictures: any[]) => {
    setModalVisible(true);

    const payload: any = state.user;
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
        console.error("api/usersmanagement/clientcreation", err);
        setError("An error has occurred while updating the profile informations");
      });
  };

  const checkEmail = (email: string) => {
    axios({
      method: "GET",
      url: `${Environment.API_URL}/api/usersmanagement/checkEmail/${email.trim().toLowerCase()}`,
      headers: {
        "Content-Type": "application/json",
        useQueryString: false
      },
      data: null,
      params: {}
    })
      .then(response => {
        setState({
          user: { ...state.user, emailUsed: response.data, isCheckingEmail: false }
        });
        console.log(response.data);
      })
      .catch((err: any) => {
        setState({
          user: { ...state.user, isCheckingEmail: false }
        });
        console.error(`/api/usersmanagement/checkEmail/${email}`, err);
      });
  };

  const debounceEmailCheck = (email: string) => {
    const debounce = _.debounce((email: string) => {
      checkEmail(email);
    }, 1500, { trailing: true });
    debounce(email);
    setState({
      user: { ...state.user, isCheckingEmail: true }
    });
  };

  const validateEmail = (text: string) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct: ", text);
      setState({ user: { ...state.user, emailFormatValidity: false } });
    } else {
      setState({ user: { ...state.user, emailFormatValidity: true } });
      console.log("Email is Correct: ", text);
    }
  };
  return (
    <View style={{
      display: "flex",
      justifyContent: "space-between",
      height: "100%",
      width: "100%",
      paddingRight: 0,
      backgroundColor: "#fff",
      paddingBottom: 30
    }}>
      <Modal isVisible={isModalVisible}>
        <Modal.Container>
          <Modal.Body>
            <ActivityIndicator size="large" color={"#fff"} />
          </Modal.Body>
        </Modal.Container>
      </Modal>
      <View style={{ marginTop: 15, padding: 15 }}>
        <View>
          <Pressable
            style={{ width: 80, flexDirection: "row" }}
            onPress={() => {
              navigation.goBack();
            }}
          ><IconM name="arrow-back" size={32} color={"#000"} />
          </Pressable>
        </View>
      </View>

      <View>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 32, color: "#000" }}>Update Profile
          Informations</Text>
        {error !== null &&
          <View style={{ paddingHorizontal: 15 }}><Text
            style={{ textAlign: "center", color: "red" }}>{error}</Text></View>}
        <ScrollView style={styles.scrollView}>
          <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={keyboardVerticalOffset}>
            <View style={{ padding: 1 }}>
              <View style={{ width: "100%" }}>
                <Input
                  placeholder={"Prénom"}
                  inputContainerStyle={styles.InputContainerStyle}
                  errorStyle={styles.ErrorStyle}
                  onChangeText={(value: string) => setState((prevState: any) => {
                    let user = Object.assign({}, prevState.user);
                    if (value !== "") {
                      user.name = value.trim();
                    } else {
                      user.name = value;
                    }
                    return { user };
                  })}
                  value={state.user?.name || ""}
                />
              </View>
            </View>
            <View style={{ padding: 0, width: "100%" }}>
              <View style={{ width: "100%" }}>
                <Input
                  placeholder={"Nom"}
                  inputContainerStyle={styles.InputContainerStyle}
                  errorStyle={styles.ErrorStyle}
                  onChangeText={(value: string) => setState((prevState: any) => {
                    let user = Object.assign({}, prevState.user);
                    if (value !== "") {
                      user.surname = value.trim();
                    } else {
                      user.surname = value;
                    }
                    return { user };
                  })}
                  value={state.user?.surname || ""}
                />
              </View>
            </View>
            <View style={{ width: "100%" }}>
              <Input placeholder={"Phone Number"}
                     inputContainerStyle={styles.InputContainerStyle}
                     leftIconContainerStyle={styles.LeftIconContainerStyle}
                     onChangeText={text =>
                       setState((prevState: any) => {
                         let user = Object.assign({}, prevState.user);
                         user.phone = text;
                         return { user };
                       })
                     }
                     keyboardType="phone-pad"
                     value={state.user.phone || ""}
              />
            </View>

            <View style={{ paddingVertical: 0, padding: 10 }}>
              <Pressable
                disabled={getButtonStatus()}
                style={({ pressed }) => [{
                  backgroundColor: "#126f80",
                  padding: 15,
                  marginBottom: 10,
                  borderRadius: 8,
                  width: "100%"
                }, { opacity: getButtonStatus() ? 0.5 : 1 }]}
                onPress={() => {
                  updateClient([]);
                }}>
                <Text style={{ color: "#fff", textAlign: "center", fontSize: 18 }}>Update</Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </View>
  );
};
export default updateProfile;
const styles = StyleSheet.create({
  columnDisplay: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "100%",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 22
  },
  buttonWrapper: {
    backgroundColor: "#1f9683",
    padding: 10,
    opacity: 1,
    width: "100%"

  },
  cancelWrapper: {
    backgroundColor: "#c8003f",
    padding: 10,
    opacity: 1,
    marginTop: 15,
    width: "100%"

  },
  disabled: {
    opacity: 0.5,
    backgroundColor: "#1f9683",
    padding: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    height: "100%",
    padding: 0,
    backgroundColor: "#fff"
  },
  modalView: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 0,
    alignItems: "center",
    shadowColor: "#fff",
    borderColor: "#fff",
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 5,
    width: "100%",
    height: "100%"
  },
  button: {
    borderRadius: 0,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF"
  },
  buttonClose: {
    backgroundColor: "#2196F3"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  InputContainerStyle: {
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#000",
    display: "flex",
    justifyContent: "center",
    padding: 5
  },
  LeftIconContainerStyle: {},
  ErrorStyle: {},
  textModal: {
    textAlign: "center",
    fontSize: 18
  },
  scrollView: {
    marginTop: 30,
    height: Dimensions.get("screen").height - 300
  }
});
