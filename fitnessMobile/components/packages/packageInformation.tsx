import {  ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import IconM from "react-native-vector-icons/MaterialIcons";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "native-base";
import { FlatListItemSeparator } from "../../utils/utils";
import axios from "axios";
import Environment from "../../Environment";
import { BuyPackage } from "../../models/buyPackage";
import Images from "../../assets/Images";

const PackageItem = (props: any) => {
  return (<View style={styles.item}>
    <View style={{ flexDirection: "column", alignItems: "center" }}>
      <Text style={styles.text}>{props.data.description} </Text>
      <Text style={styles.text}>Price: {props.data.prix}/TND</Text>
      <Text style={styles.text}>Reduction: {props.data.reduction}% </Text>
      <View style={{ borderBottomWidth: 1, flex: 1 }}></View>
    </View>
  </View>);
};

const PackageInformation = (props: any) => {
  const [state, setState]: any = useState({});
  const [userInfo, setUserInfo]: any = useState({});

  const navigation = useNavigation();

  useEffect(() => {
    setState(props.route?.params.packageData);
    setUserInfo(props.route?.params.userInfo);
    console.log("packageData ============>", props.route?.params.packageData);
    console.log("userInfo ============>", props.route?.params.userInfo);

  }, [props]);

  const buyPackage = () => {
    console.warn("userInfo =============> ", userInfo);

    const packageInfo: BuyPackage = {
      keycloakclient: userInfo.id,
      idpackage: state.idPackage,
      keycloakcoach: ""
    };

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
        console.log("buy package =====>", response.data);
        //@ts-ignore
        navigation.navigate("PackagesList");
      })
      .catch((err: any) => {
        setState({
          user: { ...state.user, isCheckingEmail: false }
        });
        console.error(`/api/usersmanagement/buyPackage/${state}`, err);
      });
  };

  return (
    <ImageBackground source={Images.subscription} resizeMode="cover"
                     style={[styles.wrapperStyle]}>
      <View style={{ padding: 15, marginTop: 30 }}>
        <View>
          <Pressable
            style={{ width: 80, flexDirection: "row" }}
            onPress={() => {
              navigation.goBack();
            }}
          ><IconM name="arrow-back" size={32} color={"#fff"} />
          </Pressable>
        </View>
      </View>
      <View style={{ padding: 15 }}>
        <View>
          <View>
            <Text style={styles.packageTitle}>{state.libelle}</Text>
            <Text style={{ textAlign: "center", color: "#fff" }}>{state.description}</Text>
            <Text style={{ textAlign: "center", color: "#fff" }}>Validity: {state.validity}/{state.unitetime}</Text>
          </View>
          <Text style={styles.sectionTitle}>Package Items:</Text>
          <View style={styles.wrapperStyle2}>
            <FlatList
              style={{ height: 450 }}
              contentContainerStyle={styles.containerStyle}
              keyExtractor={(item, index) => index.toString()}
              data={state?.packageItemsList}
              ItemSeparatorComponent={FlatListItemSeparator}
              initialNumToRender={3}
              {...props}
              renderItem={({ item }) => (<PackageItem
                data={item} />)}

            />
          </View>
        </View>
        <Pressable
          style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }, {
            backgroundColor: "#2c65c9",
            padding: 15,
            marginTop: 10,
            marginBottom: 10,
            zIndex: 3
          }]}
          onPress={() => {
            // buyPackage();
            // @ts-ignore
            navigation.navigate("coaches", {
              packageInfo: {
                keycloakclient: userInfo.id,
                idpackage: state.idPackage,
                keycloakcoach: ""
              }, packageData: state, userInfo: userInfo
            });
          }
          }
        ><Text style={{ color: "#fff", textAlign: "center" }}>Continue</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default PackageInformation;
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
    justifyContent: "center",
    verticalAlign: "middle",
    height: "100%"
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
