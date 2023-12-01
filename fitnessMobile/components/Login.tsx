import { Image, ImageBackground, KeyboardAvoidingView, Pressable, StatusBar, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { useKeycloak } from "@react-keycloak/native";
import { Provider } from "react-redux";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Text } from "react-native-elements";
import jwt_decode from "jwt-decode";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import axios from "axios";
import { Store } from "../redux/Store";
import { _storeData } from "../utils/utils";
import Navigation from "./navigation/navigation";
import CreateUserComponent from "./create-user/createUser";
import { createStackNavigator } from "@react-navigation/stack";
import { keyboardVerticalOffset } from "../shared/config";
import Images from "../assets/Images";
import InAppBrowser from "react-native-inappbrowser-reborn";
import AthleteInformationStepper from "./athlete-information-stepper/athleteInformationStepper";
import { useNetInfo } from "@react-native-community/netinfo";


const Stack = createStackNavigator();

const KeycloakLogin = (props: any) => {

  return (<NavigationContainer>
    <Stack.Navigator initialRouteName={"homePage"}>
      <Stack.Screen
        name="homePage"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="stepper" component={AthleteInformationStepper} options={{ headerShown: false }}
      />
      <Stack.Screen name="createUser" component={CreateUserComponent} options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>);
};
const Login = () => {
  const { keycloak, initialized } = useKeycloak();
  const [token, setToken] = useState<any>(null);
  const navigation = useNavigation();
  const netInfo = useNetInfo();

  const getUserInfo = () => {
    if (keycloak?.authenticated && keycloak?.token) {
      let decodedJwtData: any = jwt_decode(keycloak?.token);
      let userInfo = {
        firstName: decodedJwtData.given_name,
        lastName: decodedJwtData.family_name,
        email: decodedJwtData.email,
        name: decodedJwtData.name,
        username: decodedJwtData.preferred_username,
        roles: decodedJwtData.realm_access ? decodedJwtData.realm_access.roles : [],
        id: decodedJwtData.sub
      };
      if (token === null) {
        setToken(keycloak?.token);
      }
      _storeData("userInfo", JSON.stringify(userInfo)).then(() => {
      });
      _storeData("token", JSON.stringify(keycloak?.token)).then(() => {
      });
      _storeData("refreshToken", JSON.stringify(keycloak?.refreshToken)).then(() => {
      });
    } else {
      keycloak?.loadUserInfo().then(val => {
        getUserInfo();
      });
    }

  };
  const logoutUser = (logout?: any) => {
    InAppBrowser.open(
      keycloak?.createLogoutUrl().replace("redirect_uri", "post_logout_redirect_uri") + `&id_token_hint=${keycloak?.idToken}`
    ).then(res => {
      keycloak?.clearToken();
      _storeData("token", "");
      _storeData("userInfo", "");
      _storeData("refreshToken", "");
      _storeData("memberInfo", "");

      setToken(null);
    });
  };
  const getApplicationMainView = (tokenValue: any) => {
    let returnedValue;
    if (!keycloak?.authenticated) {
      returnedValue = (
        <ImageBackground source={Images.home} resizeMode="cover" style={[StyleSheet.absoluteFillObject,{
          height: "100%", width: "100%",
          left:0,

        }]}>
          <KeyboardAvoidingView
            enabled={true}
            style={styles.containerView}
            behavior="position"
            keyboardVerticalOffset={keyboardVerticalOffset}>
            <StatusBar translucent={true}  animated={true}    />
            <View style={styles.loginScreenContainer}>
              <View style={styles.loginFormView}>
                <View style={{minHeight:"40%", display:"flex", justifyContent:"space-between"}}>
                  <View style={{ alignItems: "center" }}>
                    <Text style={{color:"#fff",fontWeight:"900",fontSize:40, textAlign:"center"}}>Welcome to <Text style={{color:"#0DB0D4",fontWeight: 'bold'}}>Fit</Text>'you !</Text>
                    <Text style={{color:"#0DB0D4", fontSize:18, textAlign:"center", fontWeight: 'bold'}}>Your fitness journey starts here</Text>
                  </View>
                  <View>
                    {netInfo.isInternetReachable === false &&
                      <View><Text style={{ color: "#000", fontWeight: "bold", textAlign:"center" }}>Please connect to the internet or try
                        again later!</Text></View>}
                    {netInfo.isInternetReachable === true && <Pressable
                      style={({ pressed }) => [{ opacity: pressed ? 1 : 0.8 }, styles.loginButton]}

                      onPress={() => keycloak?.login().then(val => {
                      })}>
                      <Text style={styles.loginButtonText}>Login</Text>
                    </Pressable>}
                    {netInfo.isInternetReachable && <Pressable
                      style={({ pressed }) => [{ opacity: pressed ? 1 : 0.8 }, styles.loginButtonSignIn]}
                      onPress={() => {
                        // @ts-ignore
                        navigation.navigate("createUser");
                      }}
                    >
                      <Text style={styles.loginButtonTextSignIn}>Sign up</Text>
                    </Pressable>}
                  </View>
                </View>
              </View>
            </View>

          </KeyboardAvoidingView>
          <View style={styles.overlay} />

        </ImageBackground>
      );
    } else {

      if (token === null) {
        getUserInfo();
      }

      if (token) {
        axios.interceptors.request.use(
          (request: any) => {
            if (request.url?.includes("/api/") && request.headers !== undefined) {
              /**
               * To Enable the security please uncomment the code below
               */
              request.headers["Content-Type"] = "application/json";
              request.headers["Authorization"] = "Bearer " + token;
            }
            console.info(request);
            return request;
          },
          (error: any) => {
            return Promise.reject(error);
          }
        );
      }
      returnedValue = (
        <Provider store={Store}>
          <PaperProvider theme={theme}>
            <NavigationContainer independent={true}>
              <StatusBar
                translucent={true}
                animated={true}
              />
              <Navigation
                logout={(value: any) => {
                  logoutUser(value);
                }}
              />
            </NavigationContainer>
          </PaperProvider>
        </Provider>
      );

    }
    return returnedValue;
  };
  return getApplicationMainView(token);
};
export default KeycloakLogin;
const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    padding: 0,
    zIndex:4
  },
  loginScreenContainer: {
    flex: 1
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: "center"
  },
  loginFormView: {
    flex: 1,
    display: "flex",
    height: "100%",
    justifyContent: "flex-end",
    padding: 15
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5
  },
  loginButtonSignIn: {
    backgroundColor: "#FFFFFF",
    borderStyle: "solid",
    borderRadius: 8,
    height: 50,
    marginTop: 10,
    width: 350,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  loginButton: {
    backgroundColor: "#0DB0D4",
    borderStyle: "solid",
    borderRadius: 8,
    height: 50,
    marginTop: 10,
    width: 350,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    paddingRight: 15,
    fontWeight: 'bold'
  },
  loginButtonTextSignIn: {
    color: "#0DB0D4",
    fontSize: 18,
    paddingRight: 15,
    fontWeight: 'bold'
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: "transparent"
  },
  errorMessage: {
    color: "red",
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 12
  },
  inviteToConnect: {
    color: "white",
    marginTop: 8
  },
  textModal: {
    textAlign: "center",
    fontSize: 18
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.1)',
    zIndex:1
  }
});


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",

  }
};
