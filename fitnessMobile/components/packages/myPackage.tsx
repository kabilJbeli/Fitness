import { Text, View, ImageBackground, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { _retrieveData } from "../../utils/utils";
import * as React from "react";


const MyPackage = (props: any) => {
  const [myPackage, setMyPackage] = useState<any>(null);

  useEffect(() => {
    _retrieveData("currentPackage").then((info: any) => {
      let parsedInfo = JSON.parse(info);
      if (parsedInfo !== undefined) {
        console.log("parsed package", parsedInfo);
        setMyPackage(parsedInfo);
      }
    });
  }, [props]);
  return (<View style={{ backgroundColor: "#fff", height: "100%" }}>
    <View style={{
      height: 150, width: "100%", justifyContent: "center", alignItems: "center",
      backgroundColor: "#2c65c9"

    }}>
      <Text style={{ color: "#fff", fontSize: 40, textAlign: "center" }}>
        {myPackage?.iduserpackage.packagesclient?.libelle}</Text>
      <Text style={{ color: "#fff", fontSize: 18, textAlign: "center" }}>
        {myPackage?.iduserpackage.packagesclient?.description}</Text>
    </View>
    <View style={{ padding: 15 }}>
      <Text style={{ fontWeight: "900", marginBottom: 20 }}>My Package Information</Text>
      <Text style={{ marginBottom: 10 }}><Text style={{ fontWeight: "900" }}>Start Date:</Text> {myPackage?.startdate}
      </Text>
      <Text style={{ marginBottom: 10 }}><Text style={{ fontWeight: "900" }}>Buy
        Date:</Text> {myPackage?.iduserpackage.buyDate}</Text>
      <Text style={{ marginBottom: 10 }}><Text style={{ fontWeight: "900" }}>End Date:</Text> {myPackage?.enddate}
      </Text>
      <Text style={{ marginBottom: 10 }}><Text style={{ fontWeight: "900" }}>Time
        Unity:</Text> {myPackage?.iduserpackage.packagesclient.unitetime}</Text>
      <Text style={{ marginBottom: 10 }}><Text
        style={{ fontWeight: "900" }}>Validity:</Text> {myPackage?.iduserpackage.packagesclient.validity}</Text>
    </View>
  </View>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: "100%",
    width: "100%"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default MyPackage;
