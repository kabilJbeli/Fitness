import * as React from "react";
import {
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { _retrieveData, _storeData } from "../../utils/utils";
import axios from "axios";
import Environment from "../../Environment";
import IconF from "react-native-vector-icons/FontAwesome6";

import { useKeycloak } from "@react-keycloak/native";
import InAppBrowser from "react-native-inappbrowser-reborn";
import Images from "../../assets/Images";
import Toast from "react-native-simple-toast";

const Home = (props: any) => {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [member, setMember] = useState<any>({});
  const [currentLevel, setCurrenLevel] = useState<string>("intermediate");
  const { keycloak, initialized } = useKeycloak();
  const [token, setToken] = useState<any>(null);

  const navigation = useNavigation();

  useEffect(() => {
    getUserInfo();
  }, [props]);

  const getUserInfo = (): void => {

    _retrieveData("userInfo").then((info: any) => {
      if (info !== undefined) {
        let parsedInfo = JSON.parse(info);
        if (parsedInfo !== undefined) {
          setUserInfo(parsedInfo);
          if (parsedInfo.roles.includes("Client")) {
            getMemberInformation(parsedInfo.id);
          }
        }
      }
    });
  };

  const getMemberInformation = (id: string) => {
    axios({
      method: "GET",
      url: `${Environment.API_URL}/api/usersmanagement/findUser/${id}`,
      headers: {
        "Content-Type": "application/json",
        useQueryString: false
      },
      params: {}
    })
      .then(response => {
        setMember(response.data);
      })
      .catch((err: any) => {
        console.error("api/usersmanagement/findUser", err);
      });

  };


  const gotTo = (page: string) => {
// @ts-ignore
    navigation.navigate(page);
  };

  const getRole = (): string => {
    if (member) {
      return member.role;
    } else {
      return "";
    }
  };

  const getUserName = (): string => {
    if (userInfo) {
      return userInfo.firstName;
    } else {
      return "";
    }
  };
  const logout = () => {
    InAppBrowser.open(
      keycloak?.createLogoutUrl().replace("redirect_uri", "post_logout_redirect_uri") + `&id_token_hint=${keycloak?.idToken}`
    ).then(res => {
      keycloak?.clearToken();
      _storeData("token", "");
      _storeData("userInfo", "");
      _storeData("refreshToken", "");
      setToken(null);
    });
  };


  const getConditionalDisplay = (): any => {
    let returnedView = (<View></View>);
    if (userInfo?.roles.includes("Client")) {
      returnedView = (<ScrollView style={{ }}  contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ justifyContent: "center", width: "100%" }}>
          <Text style={styles.welcomeText}>Welcome, {getUserName()} <IconF name="hands-clapping" size={26}
                                                                           color={"#fac036"} /></Text>
          <Text style={{ textAlign: "center", fontSize: 18, color: "#000" }}>What are you feeling today?</Text>
        </View>
        <View style={styles.scrollView}>
          <Text style={{ fontWeight: "bold", color: "#000", fontSize: 18 }}>Featured workouts :</Text>
          <View style={{
            display: "flex", flexDirection: "row", marginTop: 15, flexWrap: "wrap"
          }}>

            <Pressable onPress={() => {
              // @ts-ignore
              navigation.navigate("watchWorkout", { userInfo: userInfo });
            }
            } style={{ width: "50%", borderRadius: 18, height: 250, padding: 5, marginBottom: 40 }}>
              <Image style={{ width: "100%", height: "100%", borderRadius: 18 }} source={Images.sport2} />
              <Text style={{ textAlign: "center", fontWeight: "bold", marginTop: 5 }}>Home workout</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                // @ts-ignore
                navigation.navigate("watchWorkout", { userInfo: userInfo });
              }
              }
              style={{ width: "50%", borderRadius: 18, height: 250, padding: 5, marginBottom: 40 }}>
              <Image style={{ width: "100%", height: "100%", borderRadius: 18 }} source={Images.sport1} />
              <Text style={{ textAlign: "center", fontWeight: "bold", marginTop: 5 }}>Gym workout</Text>
            </Pressable>
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
              <Pressable onPress={() => {
                setCurrenLevel("beginner");
                Toast.show("You changed your training level to beginner", 0);
              }
              } style={currentLevel === "beginner" ? styles.levelButtonActive : styles.levelButton}><Text
                style={currentLevel === "beginner" ? styles.levelButtonTextActive : styles.levelButtonText}>Beginner</Text></Pressable>
              <Pressable
                onPress={() => {
                  setCurrenLevel("intermediate");
                  Toast.show("You changed your training level to intermediate", 0);
                }
                }
                style={currentLevel === "intermediate" ? styles.levelButtonActive : styles.levelButton}><Text
                style={currentLevel === "intermediate" ? styles.levelButtonTextActive : styles.levelButtonText}>Intermediate</Text></Pressable>
              <Pressable
                onPress={() => {
                  setCurrenLevel("hard");
                  Toast.show("You changed your training level to hard", 0);
                }
                }
                style={currentLevel === "hard" ? styles.levelButtonActive : styles.levelButton}><Text
                style={currentLevel === "hard" ? styles.levelButtonTextActive : styles.levelButtonText}>Hard</Text></Pressable>
            </View>
          </View>
          <View style={{
            flexDirection: "row", justifyContent: "space-around", padding: 15,
            alignItems: "center", backgroundColor: "#ececec", marginTop: 30, borderRadius: 8
          }}>
            <View style={{ flexWrap: "wrap", flex: 1, justifyContent: "space-between" }}>
              <Text style={{ fontWeight: "bold", fontSize: 21, color: "#000", marginBottom: 40 }}>This week's
                diet</Text>
              <Pressable style={{ backgroundColor: "#0DB0D4", borderRadius: 8, height: 30 }}
                         onPress={() => {
                           // @ts-ignore
                           navigation.navigate("myMeal", { userInfo: userInfo });
                         }
                         }

              ><Text
                style={{ color: "#fff", fontSize: 18, textAlign: "center" }}


              >View</Text></Pressable>
            </View>
            <View style={{ padding: 15, width: "50%", height: 150 }}><Image style={{ width: "100%", height: "100%" }}
                                                                            source={Images.home1} /></View>
          </View>


        </View>
      </ScrollView>);
    } else if (userInfo !== null) {
      {
        setTimeout(() => {
          logout();
        }, 3000);
      }
      returnedView = (
        <View style={{ padding: 15 }}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={Images.denied}
              resizeMode={"contain"}
              style={{
                width: "100%",
                height: 120
              }}
            />
          </View>
          <Text style={{ paddingTop: 15, textAlign: "center" }}>You don't have access to view this app you will be
            redirected to the login page in <Text
              style={{ color: "red" }}>3s</Text></Text></View>);
    } else if (userInfo === null) {
      returnedView = (
        <View style={{ padding: 15 }}><Text>Still Loading User Information...</Text></View>);
    }
    return returnedView;
  };

  return (
    <SafeAreaView>
      {getConditionalDisplay()}
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  logoContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "auto"
  },
  welcomeText: {
    width: "100%",
    textAlign: "center",
    fontSize: 38,
    marginTop: 30,
    fontWeight: "bold",
    color: "#000"
  },
  boxWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    flexWrap: "wrap",
    width: "100%"
  },
  box: {
    width: "50%",
    padding: 15,
    display: "flex",
    flexDirection: "column"

  },
  logoutBox: {
    width: "100%",
    padding: 15
  },
  btn: {
    backgroundColor: "#262626",
    width: "100%",
    padding: 15,
    justifyContent: "center",
    height: "auto"
  },
  boxText: {
    color: "#fff",
    textAlign: "center",
    padding: 5,
    fontSize: 14
  },
  logoutBtn: {
    backgroundColor: "#0DB0D4",
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  logoutText: {
    color: "#fff",
    fontSize: 18
  },
  iconWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  scrollView: {
    padding: 10,
    marginTop: 15,
  },
  levelButtonActive: {
    borderColor: "#0DB0D4",
    borderWidth: 2,
    borderStyle: "solid",
    backgroundColor: "#0DB0D4",
    borderRadius: 8,
    width: 120,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8
  },
  levelButton: {
    borderColor: "#0DB0D4",
    borderWidth: 2,
    borderStyle: "solid",
    backgroundColor: "#fff",
    borderRadius: 8,
    width: 120,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8
  },
  levelButtonText: {
    color: "#0DB0D4",
    fontSize: 14
  },
  levelButtonTextActive: {
    color: "#fff",
    fontSize: 14
  }
});
