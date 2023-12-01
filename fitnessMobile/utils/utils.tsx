import { StackNavigationProp } from "@react-navigation/stack";
import { ToastAndroid, View } from "react-native";
import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Environment from "../Environment";

type RootStackParamList = {
  Home: { projectId: Number }, // undefined because you aren't passing any params to the home screen
  Profile: { name: string };
};
type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;
export type Props = {
  navigation: ProfileScreenNavigationProp;
};


export const showToastWithGravity = (message: string) => {
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};


export const _storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(
      key,
      value
    );
  } catch (error) {
    // Error saving data
    //	console.error(error);
  }
};

export const _retrieveData = async (key: string) => {
  let response = "";

  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      response = value;
    }
  } catch (error) {
    // Error retrieving data
    //	console.error(error);
  }
  return response;
};


export const FlatListItemSeparator = () => {
  return (
    <View
      style={{
        backgroundColor: "transparent"
      }}
    />
  );
};


export const getMemberInformation = (id: string) => {
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
      _storeData("memberInfo", JSON.stringify(response.data));
    })
    .catch((err: any) => {
      console.error("api/usersmanagement/findUser", err);
    });

};
