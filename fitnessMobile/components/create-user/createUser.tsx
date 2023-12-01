import React, { useEffect, useState } from "react";
import {
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform, ActivityIndicator
} from "react-native";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import IconM from "react-native-vector-icons/MaterialIcons";
import axios from "axios";
import Environment from "../../Environment";
import { _retrieveData } from "../../utils/utils";
import { keyboardVerticalOffset } from "../../shared/config";
import * as _ from "lodash";
import Images from "../../assets/Images";
import { Modal } from "../modal/modal";

const CreateUserComponent = (props: any) => {
  const navigation = useNavigation();

  const defaultState = {
    user: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      emailUsed: false,
      isCheckingEmail: false,
      emailFormatValidity: true
    }
  };

  const [userInfo, setUserInfo] = useState<any>({});
  const [state, setState] = useState<any>(defaultState);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    _retrieveData("userInfo").then((info: any) => {
      let parsedInfo = JSON.parse(info);
      if (parsedInfo !== undefined) {
        setUserInfo(parsedInfo);
      }
    });
    _retrieveData("clientCreation").then((res) => {
      if (res !== undefined && res !== null && res !== "") {
        const jsonResponse = JSON.parse(res);
        if (jsonResponse.email !== null) {
          validateEmail(jsonResponse.email);
        }
        setState({
          user: {
            name: jsonResponse.name,
            surname: jsonResponse.surname,
            email: jsonResponse.email,
            password: jsonResponse.password,
            confirmPassword: jsonResponse.confirmPassword,
            phone: jsonResponse.phone,
            emailUsed: jsonResponse.emailUsed,
            isCheckingEmail: jsonResponse.isCheckingEmail,
            emailFormatValidity: jsonResponse.emailFormatValidity
          }
        });
      }
    });
  }, [props]);

  const validateEmail = (text: string) => {
    let reg = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct: ", text);
      setState({ user: { ...state.user, emailFormatValidity: false, email: text } });
    } else {
      setState({ user: { ...state.user, emailFormatValidity: true, email: text } });
      console.log("Email is Correct: ", text);
    }

  };

  const checkEmail = (email: string) => {
    setModalVisible(true);
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
      .then((response) => {
        setModalVisible(false);
        setState({
          user: { ...state.user, emailUsed: response.data, isCheckingEmail: false }
        });
        console.log(response.data);
        if (response.data === false) {
          setTimeout(() => {
            // @ts-ignore
            navigation.navigate("stepper", { state });
          }, 150);
        }
      })
      .catch((err: any) => {
        setModalVisible(false);
        setState({
          user: { ...state.user, isCheckingEmail: false }
        });
        console.error(`/api/usersmanagement/checkEmail/${email}`, err);
      });
  };

  const debounceEmailCheck = (email: string) => {
    const debounce = _.debounce((email: string) => {
      setState({
        user: {
          ...state.user,
          isCheckingEmail: false,
          emailUsed: false
        }
      });
    }, 1000, { trailing: true });
    debounce(email);
  };

  const createClient = () => {
    checkEmail(state.user.email);
  };

  const getButtonStatus = () => {
    return (
      state.user.password === "" ||
      state.user.name === "" ||
      state.user.surname === "" ||
      state.user.email === "" ||
      state.user.phone === "" ||
      state.user.password !== state.user.confirmPassword ||
      state.user.emailUsed === true ||
      state.user.isCheckingEmail === true ||
      state.user.emailFormatValidity === false
    );
  };

  return (
    <ImageBackground source={Images.account} resizeMode="cover" style={styles.container}>
      <StatusBar translucent={true} animated={true} />
      <Pressable
        style={styles.backButton}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <IconM name="arrow-back" size={32} color={"#fff"} />
      </Pressable>
      <Modal isVisible={isModalVisible}>
        <Modal.Container>
          <Modal.Body>
            <ActivityIndicator size="large" color={"#fff"} />
          </Modal.Body>
        </Modal.Container>
      </Modal>
      <Text style={styles.title}>Create an account</Text>
      <ScrollView style={styles.scrollView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.keyboardAvoidingView}
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
          <View style={styles.formContainer}>
            <Input
              placeholder={"Prénom"}
              inputContainerStyle={styles.inputContainerStyle}
              errorStyle={styles.errorStyle}
              onChangeText={(value: string) =>
                setState({ user: { ...state.user, name: value } })
              }
              value={state.user.name}
            />
            <Input
              placeholder={"Nom"}
              inputContainerStyle={styles.inputContainerStyle}
              errorStyle={styles.errorStyle}
              onChangeText={(value: string) =>
                setState({ user: { ...state.user, surname: value } })
              }
              value={state.user.surname}
            />
            <Input
              placeholder={"Email"}
              inputContainerStyle={styles.inputContainerStyle}
              errorMessage={
                state.user.emailUsed
                  ? "There's already an account created with this email address"
                  : state.user.isCheckingEmail
                    ? "Currently checking if the email address is used or not"
                    : state.user.emailFormatValidity === false
                      ? `Email format not correct: ${state.user.email}`
                      : ""
              }
              errorStyle={styles.errorStyle}
              onEndEditing={() => {
                if (state.user.email !== null && state.user.email !== "") {
                  debounceEmailCheck(state.user.email);
                }
              }}
              onChangeText={(value: string) => {
                validateEmail(value.trim());
              }}
              value={state.user.email}
            />
            <Input placeholder={"Phone Number"}
                   inputContainerStyle={styles.inputContainerStyle}
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
            <Input
              placeholder={"Mot de passe"}
              inputContainerStyle={styles.inputContainerStyle}
              errorStyle={styles.errorStyle}
              onChangeText={(value: string) =>
                setState({ user: { ...state.user, password: value.trim() } })
              }
              value={state.user.password}
              secureTextEntry={true}
            />
            <Input
              placeholder={"Confirmer le mot de passe"}
              inputContainerStyle={styles.inputContainerStyle}
              errorStyle={styles.errorStyle}
              errorMessage={
                state.user.password !== state.user.confirmPassword
                  ? "The provided passwords are not the same"
                  : ""
              }
              onChangeText={(value: string) =>
                setState({ user: { ...state.user, confirmPassword: value.trim() } })
              }
              value={state.user.confirmPassword}
              secureTextEntry={true}
            />
            <Pressable
              disabled={getButtonStatus()}
              style={({ pressed }) => [
                styles.registerButton,
                { opacity: getButtonStatus() ? 0.5 : 1 }
              ]}
              onPress={() => {
                createClient();
              }}
            >
              <Text style={styles.buttonText}>Sign up</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Dimensions.get("window").height * 0.05
  },
  backButton: {
    width: 80,
    flexDirection: "row",
    padding: 15,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    marginTop: 50
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 32,
    color: "#fff",
    marginTop: 15
  },
  scrollView: {
    marginTop: 30,
    height: Dimensions.get("screen").height - 380
  },
  keyboardAvoidingView: {
    flex: 1
  },
  formContainer: {
    padding: 15,
    alignSelf: "center",
    width: "100%"
  },
  inputContainerStyle: {
    width: "100%",
    borderRadius: 8,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    padding: 5,
    marginTop: 10
  },
  errorStyle: {
    color: "red"
  },
  registerButton: {
    backgroundColor: "#0DB0D4",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18
  }
});

export default CreateUserComponent;
