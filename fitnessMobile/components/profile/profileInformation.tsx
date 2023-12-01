import * as React from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { _retrieveData, _storeData } from "../../utils/utils";
import axios from "axios";
import Environment from "../../Environment";
import { createStackNavigator } from "@react-navigation/stack";
import ChangePasswordComponent from "./changePassword";
import { useNavigation } from "@react-navigation/native";
import updateProfile from "./updateProfile";
import UpdateAge from "./updateProfileManagementScreens/updateAge";
import UpdateAllergies from "./updateProfileManagementScreens/updateAllergies";
import UpdateFood from "./updateProfileManagementScreens/updateFood";
import UpdateGender from "./updateProfileManagementScreens/updateGender";
import UpdateGoal from "./updateProfileManagementScreens/updateGoal";
import UpdateHeight from "./updateProfileManagementScreens/updateHeight";
import UpdatePhotos from "./updateProfileManagementScreens/updatePhotos";
import UpdateTrainingDays from "./updateProfileManagementScreens/updateTrainingDays";
import UpdateWeight from "./updateProfileManagementScreens/updateWeight";
import UpdateWorkoutType from "./updateProfileManagementScreens/updateWorkoutType";
import Profile from "./profile";

const Stack = createStackNavigator();

export const MainProfileStack = (props: any) => {
  return (
    <Stack.Navigator initialRouteName="profile"

    >
      <Stack.Screen name="profile" component={ProfileInformation}
                    {...props}
                    options={{
                      headerShown: false
                    }}
      />
      <Stack.Screen name="changePassword" component={ChangePasswordComponent}
                    {...props}
                    options={{
                      title: "Change Password",
                      presentation: "card",
                      headerShown: false
                    }}
      />
      <Stack.Screen name="updateProfile" component={updateProfile}
                    {...props}
                    options={{
                      title: "Update Profile Information's",
                      presentation: "card",
                      headerShown: false
                    }}
      />
      <Stack.Screen name="updateAge" component={UpdateAge}
                    {...props}
                    options={{
                      title: "Update Profile Information's",
                      presentation: "card",
                      headerShown: false
                    }}
      />
      <Stack.Screen name="updateAllergies" component={UpdateAllergies}
                    {...props}
                    options={{
                      title: "Update Profile Information's",
                      presentation: "card",
                      headerShown: false
                    }}
      />
      <Stack.Screen name="updateFood" component={UpdateFood}
                    {...props}
                    options={{
                      title: "Update Profile Information's",
                      presentation: "card",
                      headerShown: false
                    }}
      />
      <Stack.Screen name="updateGender" component={UpdateGender}
                    {...props}
                    options={{
                      title: "Update Profile Information's",
                      presentation: "card",
                      headerShown: false
                    }}
      />
      <Stack.Screen name="updateGoal" component={UpdateGoal}
                    {...props}
                    options={{
                      title: "Update Profile Information's",
                      presentation: "card",
                      headerShown: false
                    }}
      />
      <Stack.Screen name="updateHeight" component={UpdateHeight}
                    {...props}
                    options={{
                      title: "Update Profile Information's",
                      presentation: "card",
                      headerShown: false
                    }}
      />
      <Stack.Screen name="updatePhotos" component={UpdatePhotos}
                    {...props}
                    options={{
                      title: "Update Profile Information's",
                      presentation: "card",
                      headerShown: false
                    }}
      />
      <Stack.Screen name="updateTrainingDays" component={UpdateTrainingDays}
                    {...props}
                    options={{
                      title: "Update Profile Information's",
                      presentation: "card",
                      headerShown: false
                    }}
      />
      <Stack.Screen name="updateWeight" component={UpdateWeight}
                    {...props}
                    options={{
                      title: "Update Profile Information's",
                      presentation: "card",
                      headerShown: false
                    }}
      />
      <Stack.Screen name="updateWorkoutType" component={UpdateWorkoutType}
                    {...props}
                    options={{
                      title: "Update Profile Information's",
                      presentation: "card",
                      headerShown: false
                    }}
      />

      <Stack.Screen name="profileUpdateInfo" component={Profile}
                    {...props}
                    options={{
                      title: "Update Profile Information's",
                      presentation: "card",
                      headerShown: false
                    }}
      />
    </Stack.Navigator>
  );
};


const ProfileInformation = (props: any) => {
  const [userInfo, setUserInfo] = useState<any>({});
  const [member, setMember] = useState<any>({});
  const navigation = useNavigation();

  useEffect(() => {
    _retrieveData("userInfo").then((info: any) => {
      let parsedInfo = JSON.parse(info);
      if (parsedInfo !== undefined) {
        setUserInfo(parsedInfo);
        getMember(parsedInfo.id);
        console.log(member.email);
        console.log(member.hasOwnProperty("email"));
      }
    });
  }, [props]);

  const getMember = (id: string) => {
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
        _storeData("memberInfo", JSON.stringify(response.data));
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  const getUserName = (): string => {
    return userInfo.name || "";
  };
  const getEmail = (): string => {
    return userInfo.email || "";
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}
    >
      <View style={{
        height: 150, width: "100%", justifyContent: "center", alignItems: "center",
        backgroundColor: "#2c65c9"

      }}>
        <Text style={{ color: "#fff", fontSize: 40, textAlign: "center" }}>
          {getUserName()}</Text>
        <Text style={{ color: "#fff", fontSize: 18, textAlign: "center" }}>
          {getEmail()}</Text>
      </View>
      <View>
        <View style={{ paddingHorizontal: 15, padding: 10, flexDirection: "row", justifyContent: "flex-start" }}>
          <Text style={{ fontWeight: "bold", paddingRight: 5 }}>First Name:</Text>
          <Text>{userInfo?.firstName || ""}</Text>
        </View>
        <View style={{ paddingHorizontal: 15, padding: 10, flexDirection: "row", justifyContent: "flex-start" }}>
          <Text style={{ fontWeight: "bold", paddingRight: 5 }}>Last Name:</Text>
          <Text>{userInfo?.lastName || ""}</Text>
        </View>
        <View style={{ paddingHorizontal: 15, padding: 10, flexDirection: "row", justifyContent: "flex-start" }}>
          <Text style={{ fontWeight: "bold", paddingRight: 5 }}>Email:</Text>
          <Text>{userInfo?.email || ""}</Text>
        </View>
        <View style={{ paddingHorizontal: 15, padding: 10, flexDirection: "row", justifyContent: "flex-start" }}>
          <Text style={{ fontWeight: "bold", paddingRight: 5 }}>Current Role:</Text>
          <Text>{member?.role || ""}</Text>
        </View>
        <View style={{ paddingHorizontal: 15, padding: 10, flexDirection: "row", justifyContent: "flex-start" }}>
          <Text style={{ fontWeight: "bold", paddingRight: 5 }}>Mobile Number:</Text>
          <Text>{member?.phone || ""}</Text>
        </View>
        <View style={{ paddingHorizontal: 15, padding: 10, flexDirection: "row", justifyContent: "flex-start" }}>
          <Text style={{ fontWeight: "bold", paddingRight: 5 }}>Age:</Text>
          <Text>{member?.age || ""}</Text>
        </View>
        <View style={{ paddingHorizontal: 15, padding: 10 }}>
          <Pressable
            disabled={!member.hasOwnProperty("email")}

            style={({ pressed }) => [{ opacity: pressed || !member.hasOwnProperty("email") ? 0.8 : 1 }, {
              backgroundColor: "#2c65c9",
              padding: 15,
              marginBottom: 10
            }]}
            onPress={() => {
              // @ts-ignore
              navigation.navigate("profileUpdateInfo");
            }}>
            <Text style={{ color: "#fff", textAlign: "center" }}>Update Profile Informations</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }, {
              backgroundColor: "#2c65c9",
              padding: 15,
              marginBottom: 10
            }]}
            onPress={() => {
              // @ts-ignore
              navigation.navigate("changePassword");
            }}>
            <Text style={{ color: "#fff", textAlign: "center" }}>Change Password</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ProfileInformation;
