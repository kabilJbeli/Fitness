import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import Environment from "../../Environment";
import React, { useEffect, useState } from "react";
import { FlatList } from "native-base";
import Images from "../../assets/Images";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-simple-toast";


const CoachItem = (props: any) => {
  return (
    <View style={{ width: "100%" }}>
      <Pressable style={{
        alignContent: "center",
        width: "100%",
        alignItems: "center",
        backgroundColor: props.coach.keycloackuid === props.data.keycloackuid ? "#2e92a4" : "#dcdcdc",
        paddingHorizontal: 25,
        padding: 15,
        borderRadius: 8,
        marginTop: 15
      }}
                 onPress={() => {
                   props.setCoachData(props.data);
                 }
                 }
      >

        <Image
          source={props.data.pictures !== null && props.data.pictures !== undefined ? { uri: "data:image/jpg;base64," + props.data.pictures.image } : Images.placeHolder}
          style={{ width: 100, height: 100, borderRadius: 180 }} />
      </Pressable>
      <Text style={{ textAlign: "center" }}>{props.data.surname} {props.data.name}</Text>
    </View>
  );
};

const Coaches = (props: any) => {
  const [state, setState]: any = useState({});
  const [coaches, setCoaches]: any = useState<any[]>([]);
  const [coach, setCoach]: any = useState<any>({});
  const navigation = useNavigation();

  const buyPackage = (packageInfo: any) => {
    packageInfo.keycloakcoach = coach.keycloackuid;
    axios({
      method: "PUT",
      url: `${Environment.API_URL}/api/usersmanagement/buyPackage`,
      headers: {
        "Content-Type": "application/json",
        useQueryString: false
      },
      data: packageInfo,
      params: {}
    })
      .then(response => {
        Toast.show("You have successfully bought this package", 100);
        //@ts-ignore
        navigation.navigate("PackagesList");
      })
      .catch((err: any) => {
        console.error(`/api/usersmanagement/buyPackage/${state}`, err);
      });
  };


  const getCoaches = () => {
    axios({
      method: "GET",
      url: `${Environment.API_URL}/api/usersmanagement/findcoachandnutro`,
      headers: {
        "Content-Type": "application/json",
        useQueryString: false
      },
      data: null,
      params: {}
    })
      .then(response => {
        const coachInfo = response.data;
        setCoaches(coachInfo["coachs"]);
      })
      .catch((err: any) => {
        console.error(`/api/usersmanagement/findcoachandnutro`, err);
      });
  };

  useEffect(() => {
    getCoaches();
    setState(props.route?.params.packageInfo);
  }, [props]);
  return (
    <SafeAreaView style={{ paddingTop: 40 }}>
      <View style={{ alignItems: "center" }}>
        <Text style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 32,
          borderBottomWidth: 3,
          marginTop: 30
        }}>Coaches</Text>
        <View style={{ backgroundColor: "#fff", width: "80%", borderRadius: 8, padding: 15, marginVertical: 50 }}>
          <Text style={{ fontSize: 21, textAlign: "center" }}>Select your coach that's gonna be monitoring your progress
            and giving you an ideal workout</Text>
        </View>
      </View>
      <FlatList
        style={{ height: "55%" }}
        contentContainerStyle={styles.containerStyle}
        keyExtractor={(item, index) => index.toString()}
        data={coaches}
        initialNumToRender={4}
        {...props}
        renderItem={({ item }) => (<CoachItem
          data={item} setCoachData={(data: any) => setCoach(data)}
          coach={coach}

        />)}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Pressable style={{
          backgroundColor: "#fff", width: 150, height: 40, borderRadius: 8, alignItems: "center",
          justifyContent: "center", borderWidth: 1, borderColor: "#f95151"
        }} onPress={() => {
          // @ts-ignore
          navigation.navigate("packageInformation", {
            packageData: props.route?.params.packageData,
            userInfo: props.route?.params.userInfo
          });
        }
        }><Text
          style={{ color: "#f95151", fontWeight: "bold", fontSize: 16 }}
        >Previous</Text>
        </Pressable>
        <Pressable
          disabled={coach?.keycloackuid === undefined}
          style={{
            backgroundColor: "#f95151", width: 150, height: 40, borderRadius: 8, alignItems: "center",
            justifyContent: "center", opacity: coach?.keycloackuid === undefined ? 0.5 : 1
          }} onPress={() => {
          buyPackage(state);
        }
        }><Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>Finish</Text></Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Coaches;
const styles = StyleSheet.create({
  wrapperStyle: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    width: "100%"

  },
  wrapperStyle2: {
    height: 250,
    display: "flex",
    justifyContent: "space-between",
    width: "100%"

  },
  containerStyle: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%"
  },
  sectionTitle: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff"
  },
  item: {
    marginTop: 10,
    padding: 5,
    borderRadius: 8,
    backgroundColor: "#565656"
  },
  text: {
    color: "white",
    fontSize: 15
  },
  packageTitle: {
    fontWeight: "bold",
    fontSize: 32,
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase"
  }
});
