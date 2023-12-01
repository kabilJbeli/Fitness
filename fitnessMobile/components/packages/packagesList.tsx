import Package from "./package";
import { Dimensions, ImageBackground, StyleSheet, Text, View } from "react-native";
import { FlatList } from "native-base";
import { _retrieveData, FlatListItemSeparator } from "../../utils/utils";
import axios from "axios";
import Environment from "../../Environment";
import React, { useEffect, useState } from "react";
import Images from "../../assets/Images";


const PackagesList = (props: any) => {
  const [packages, setPackages] = useState([]);
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    _retrieveData("userInfo").then((info: any) => {
      let parsedInfo = JSON.parse(info);
      if (parsedInfo !== undefined) {
        console.log(parsedInfo);
        setUserInfo(parsedInfo);
        getPackages();
      }
    });
  }, [props]);
  const getPackages = () => {
    axios({
      method: "GET",
      url: `${Environment.API_URL}/api/packagemanagement/findpackageEnabled`,
      headers: {
        "Content-Type": "application/json",
        useQueryString: false
      },
      data: null,
      params: {}
    })
      .then(response => {
        setPackages(response.data);
        console.log(response.data);
      })
      .catch((err: any) => {
        console.error(`/api/packageanagement/findPackages`, err);
      });
  };

  return (
    <ImageBackground source={Images.subscription} resizeMode="cover"
                     style={[StyleSheet.absoluteFillObject, styles.wrapperStyle]}>
      <View>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 32, color: "#fff" }}>Choose your
          Subscription</Text>
      </View>
      <View>
        {packages.length === 0 &&
          <View><Text style={{ textAlign: "center",color:"#fff" }}>Sorry currently we don't have any available packages! </Text>
            <Text style={{ textAlign: "center",color:"#fff" }}>Please try again later! </Text>
          </View>
        }
        <FlatList
          style={{ height: Dimensions.get("screen").height - 450 }}
          contentContainerStyle={styles.containerStyle}
          keyExtractor={(item, index) => index.toString()}
          data={packages}
          ItemSeparatorComponent={FlatListItemSeparator}
          initialNumToRender={4}
          {...props}
          renderItem={({ item }) => (<Package user={userInfo}  {...props} checkPackage={() => props.checkPackage()}
                                              data={item} />)}
        />
      </View>
    </ImageBackground>);
};

export default PackagesList;
const styles = StyleSheet.create({
  wrapperStyle: {
    height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "#fff"
  },
  containerStyle: {
    display: "flex",
    justifyContent: "center",
    verticalAlign: "middle"
  }
});
