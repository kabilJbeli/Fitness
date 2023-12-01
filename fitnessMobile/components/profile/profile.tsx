import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React, { useEffect, useState } from "react";
import { _retrieveData, _storeData } from "../../utils/utils";
import axios from "axios/index";
import Environment from "../../Environment";
import IconM from "react-native-vector-icons/MaterialIcons";

const Profile = (props: any) => {
  const [userInfo, setUserInfo] = useState<any>({});
  const [member, setMember] = useState<any>({});
  const navigation = useNavigation();

  useEffect(() => {
    _retrieveData("userInfo").then((info: any) => {
      let parsedInfo = JSON.parse(info);
      if (parsedInfo !== undefined) {
        setUserInfo(parsedInfo);
        getMember(parsedInfo.id);

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

  return (<View style={{ paddingBottom: 50 }}>
    <View style={{ paddingTop: 15,paddingLeft:15 }}>
      <Pressable
        style={{ width: 80, flexDirection: "row" }}
        onPress={() => {
          navigation.goBack();
        }}
      ><IconM name="arrow-back" size={32} color={"#000"} />
      </Pressable>
    </View>
    <ScrollView style={{
      paddingVertical: 15,
      paddingHorizontal: 15,
      height: Dimensions.get("window").height * 0.9
    }}
                contentContainerStyle={{ flexGrow: 1 }}>

      <Pressable onPress={() => {
        // @ts-ignore
        navigation.navigate("updateProfile", { userInfo: member });
      }
      }
                 style={styles.buttonPressable}
      >
        <Text style={styles.buttonPressableText}>Update Profile Information</Text>
        <Icon name="arrow-right" size={20} color={"#000"} />
      </Pressable>
      <Pressable onPress={() => {
        // @ts-ignore
        navigation.navigate("updateGoal", { userInfo: member });
      }
      } style={styles.buttonPressable}>
        <Text style={styles.buttonPressableText}>Update Goal</Text>
        <Icon name="arrow-right" size={20} color={"#000"} />
      </Pressable>
      <Pressable
        onPress={() => {
          // @ts-ignore
          navigation.navigate("updateAge", { userInfo: member });
        }
        } style={styles.buttonPressable}
      >
        <Text style={styles.buttonPressableText}>Update Age</Text>
        <Icon name="arrow-right" size={20} color={"#000"} />
      </Pressable>
      <Pressable onPress={() => {
        // @ts-ignore
        navigation.navigate("updateGender", { userInfo: member });
      }
      } style={styles.buttonPressable}>
        <Text style={styles.buttonPressableText}>Update Gender</Text>
        <Icon name="arrow-right" size={20} color={"#000"} />
      </Pressable>
      <Pressable
        onPress={() => {
          // @ts-ignore
          navigation.navigate("updateHeight", { userInfo: member });
        }
        } style={styles.buttonPressable}>
        <Text style={styles.buttonPressableText}>Update Height</Text>
        <Icon name="arrow-right" size={20} color={"#000"} />
      </Pressable>
      <Pressable onPress={() => {
        // @ts-ignore
        navigation.navigate("updateWeight", { userInfo: member });
      }
      } style={styles.buttonPressable}>
        <Text style={styles.buttonPressableText}>Update Weight</Text>
        <Icon name="arrow-right" size={20} color={"#000"} />
      </Pressable>
      <Pressable
        onPress={() => {
          // @ts-ignore
          navigation.navigate("updateAllergies", { userInfo: member });
        }
        } style={styles.buttonPressable}
      >
        <Text style={styles.buttonPressableText}>Update Allergies</Text>
        <Icon name="arrow-right" size={20} color={"#000"} />
      </Pressable>
      <Pressable onPress={() => {
        // @ts-ignore
        navigation.navigate("updateFood", { userInfo: member });
      }
      } style={styles.buttonPressable}>
        <Text style={styles.buttonPressableText}>Update Food</Text>
        <Icon name="arrow-right" size={20} color={"#000"} />
      </Pressable>
      <Pressable onPress={() => {
        // @ts-ignore
        navigation.navigate("updateTrainingDays", { userInfo: member });
      }
      } style={styles.buttonPressable}>
        <Text style={styles.buttonPressableText}>Update Training Days Preferences</Text>
        <Icon name="arrow-right" size={20} color={"#000"} />
      </Pressable>
      <Pressable onPress={() => {
        // @ts-ignore
        navigation.navigate("updateWorkoutType", { userInfo: member });
      }
      } style={styles.buttonPressable}>
        <Text style={styles.buttonPressableText}>Update Workout Type</Text>
        <Icon name="arrow-right" size={20} color={"#000"} />
      </Pressable>
    </ScrollView></View>);
};
export default Profile;
const styles = StyleSheet.create({
  buttonPressable: {
    backgroundColor: "#e6e6e6",
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonPressableText: { color: "#000", textAlign: "center", fontWeight: "bold" }
});
