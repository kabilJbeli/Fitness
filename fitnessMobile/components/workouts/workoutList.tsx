import { Dimensions, Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Environment from "../../Environment";
import { _retrieveData, FlatListItemSeparator } from "../../utils/utils";
import { FlatList } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const WorkoutItem = (props: any) => {
  const navigation = useNavigation();

  return (<Pressable
    style={{
      width: "100%",
      padding: 25,
      borderRadius:8,
      backgroundColor: "#e8e8e8",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center"
    }
    }
    onPress={() => {
      // @ts-ignore
      navigation.navigate("watchWorkout", { userInfo: props.user, data: props.data });
    }
    }
  >
    <Text style={{color:"#000", fontWeight:"bold"}}>Consult This Workout</Text>
    <Icon name="arrow-right" size={20} color={"#000"} />

  </Pressable>);
};

const WorkoutList = (props: any) => {
  const [workouts, setWorkouts] = useState<any[]>([{}, {}]);
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    if (userInfo === null) {
      _retrieveData("userInfo").then((info: any) => {
        if (info !== undefined) {
          let parsedInfo = JSON.parse(info);
          if (parsedInfo !== undefined) {
            setUserInfo(parsedInfo);
            getWorkouts(parsedInfo.id);
          }
        }
      });
    } else
      getWorkouts(userInfo.id);
  }, [props]);

  const getWorkouts = (userID: string) => {
    axios({
      method: "GET",
      url: `${Environment.API_URL}/api/workoutsmanagement/checkWorkouts/${userID}`,
      headers: {
        "Content-Type": "application/json",
        useQueryString: false
      },
      data: null,
      params: {}
    })
      .then((response) => {
        setWorkouts(response.data);
        console.log(response.data);
      })
      .catch((err: any) => {
        console.error(`/api/workoutsmanagement/checkWorkouts/${userID}`, err);
      });
  };

  return (<View>
    <StatusBar translucent={true}  animated={true}    />
    <FlatList
      style={{ height: Dimensions.get("screen").height - 450 }}
      contentContainerStyle={styles.containerStyle}
      keyExtractor={(item, index) => index.toString()}
      data={workouts}
      ItemSeparatorComponent={FlatListItemSeparator}
      initialNumToRender={4}
      {...props}
      renderItem={({ item }) => (<WorkoutItem user={userInfo}  {...props} data={item} />)}
    />
  </View>);
};

export default WorkoutList;

const styles = StyleSheet.create({
  wrapperStyle: {
    height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "#fff"
  },
  containerStyle: {
    display: "flex",
    justifyContent: "space-evenly",
    verticalAlign: "middle",
    height:"100%",
    padding:15
  }
});
