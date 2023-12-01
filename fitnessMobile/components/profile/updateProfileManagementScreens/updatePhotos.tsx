import {
  ActivityIndicator,
  Dimensions,
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import * as React from "react";
import { launchImageLibrary } from "react-native-image-picker";
import rnfs from "react-native-fs";
import { useEffect, useState } from "react";
import Images from "../../../assets/Images";
import { _retrieveData, getMemberInformation } from "../../../utils/utils";
import IconM from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Environment from "../../../Environment";
import { Modal } from "../../modal/modal";

const UpdatePhotos = (props: any) => {
  const [photos, setPhotos] = useState({
    profile: {
      uri: null,
      base64: null
    },
    side: {
      uri: null,
      base64: null
    },
    back: {
      uri: null,
      base64: null
    }
  });
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
        setPhotos(parsedInfo.pictures);
      }
    });
  }, [props]);


  const updateClient = (pictures: any[]) => {
    setModalVisible(true);
    const payload: any = state.user;
    payload.pictures = pictures;

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


  const handleChoosePhoto = (type: string) => {
    launchImageLibrary({ mediaType: "photo", quality: 0.5 }, async (response: any) => {
      console.log(response);
      if (response) {
        let data = await rnfs.readFile(response.assets[0].uri, "base64").then((res: any) => {
          return res;
        });
        if (type === "profile")
          setPhotos({
            ...photos,
            profile: {
              uri: Platform.OS === "ios" ? response.assets[0].uri.replace("file://", "") : response.assets[0].uri,
              base64: data
            }
          });
        else if (type === "back")
          setPhotos({
            ...photos,
            back: {
              uri: Platform.OS === "ios" ? response.assets[0].uri.replace("file://", "") : response.assets[0].uri,
              base64: data
            }
          });
        else
          setPhotos({
            ...photos,
            side: {
              uri: Platform.OS === "ios" ? response.assets[0].uri.replace("file://", "") : response.assets[0].uri,
              base64: data
            }
          });
      }
    });


  };
  const getStatus = (): boolean => {
    return photos.profile.uri === null || photos.side.uri === null || photos.back.uri === null;
  };
  return (<View style={{
    height: "100%",
    backgroundColor: "#fff"
  }}> <Modal isVisible={isModalVisible}>
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

    <Text
      style={{ width: "100%", textAlign: "center", fontWeight: "bold", fontSize: 32, color: "#000", marginBottom: 20 }}>Please
      Upload your Photos!</Text>
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContentStyle}>
      <Pressable
        onPress={() => {
          // props.next('');
          handleChoosePhoto("profile");
        }}
        style={{
          width: "49%",
          padding: 15,
          alignItems: "center",
          borderStyle: "solid",
          borderColor: "#000",
          borderRadius: 8,
          backgroundColor: "#fafafa",
          marginBottom: 15
        }}>

        {
          <Image
            source={photos.profile.uri ? { uri: photos.profile.uri } : Images.placeHolder}
            style={{ width: 120, height: 120, borderRadius: 360 }}
          />}
        <View
          style={[{
            padding: 15,
            borderRadius: 8,
            borderStyle: "solid",
            marginTop: 30,
            backgroundColor: "#000",
            width: "100%"
          }]}>
          <Text style={{
            color: "#fff",
            textDecorationLine: "none",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 14
          }}>Profile Photo</Text>
        </View>
      </Pressable>

      <Pressable
        onPress={() => {
          // props.next('');
          handleChoosePhoto("back");
        }}
        style={{
          width: "49%",
          padding: 15,
          alignItems: "center",
          borderStyle: "solid",
          borderColor: "#000",
          borderRadius: 8,
          backgroundColor: "#fafafa",
          marginBottom: 15
        }}>
        {
          <Image
            source={photos.back.uri ? { uri: photos.back.uri } : Images.placeHolder}
            style={{ width: 120, height: 120, borderRadius: 360 }}
          />}
        <View
          style={[{
            padding: 15,
            borderRadius: 8,
            borderStyle: "solid",
            marginTop: 30,
            backgroundColor: "#000",
            width: "100%"
          }]}>
          <Text style={{
            color: "#fff",
            textDecorationLine: "none",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 14
          }}>Back Photo</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => {
          // props.next('');
          handleChoosePhoto("side");
        }}
        style={{
          width: "100%",
          padding: 15,
          alignItems: "center",
          borderStyle: "solid",
          borderColor: "#000",
          borderRadius: 8,
          backgroundColor: "#fafafa"
        }}>
        {
          <Image
            source={photos.side.uri ? { uri: photos.side.uri } : Images.placeHolder}
            style={{ width: 200, height: 200, borderRadius: 360 }}
          />}
        <View
          style={[{
            padding: 15,
            borderRadius: 8,
            borderStyle: "solid",
            marginTop: 30,
            backgroundColor: "#000",
            width: "100%"
          }]}>
          <Text style={{
            color: "#fff",
            textDecorationLine: "none",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 14
          }}>Side Photo</Text>
        </View>
      </Pressable>
      <Pressable
        disabled={getStatus()}
        style={({ pressed }) => [{
          padding: 15,
          borderRadius: 8,
          marginTop: 30,
          backgroundColor: "#126f80",
          width: "100%"
        }, { opacity: getStatus() ? 0.5 : 1 }]} onPress={() => {

        const base64Pictures: any[] = [];
        base64Pictures.push({ image: photos.back.base64 || "", uri: photos.back.uri });
        base64Pictures.push({ image: photos.side.base64 || "", uri: photos.side.uri });
        base64Pictures.push({ image: photos.profile.base64 || "", uri: photos.profile.uri });
        updateClient(base64Pictures);

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
  </View>);
};
export default UpdatePhotos;
const styles = StyleSheet.create({
  scrollView: {
    height: Dimensions.get("screen").height
  },
  scrollContentStyle: {
    flexGrow: 1,
    alignSelf: "center",
    width: "100%",
    padding: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "stretch"
  }
});
