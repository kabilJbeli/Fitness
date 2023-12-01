import { Dimensions, Image, Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { launchImageLibrary } from "react-native-image-picker";
import rnfs from "react-native-fs";
import { useEffect, useState } from "react";
import Images from "../../../assets/Images";
import { _retrieveData } from "../../../utils/utils";

const Photos = (props: any) => {
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

  useEffect(() => {
    let jsonResponse: any;
    _retrieveData("clientCreation").then(res => {
      if (res !== undefined && res !== null && res !== "") {
        jsonResponse = JSON.parse(res);
        if (jsonResponse.pictures.length > 0) {
          setPhotos(jsonResponse.pictures);
        }
      }
    });
  }, [props]);

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

  return (
    <View>
      <Text
        style={{
          width: "100%",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 29,
          color: "#fff",
          marginBottom: 20
        }}
      >
        Please Upload your Photos!
      </Text>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContentStyle}>
        <View
          style={{
            width: "100%",
            padding: 15,
            alignItems: "center",
            borderStyle: "solid",
            borderColor: "#000",
            borderRadius: 8,
            backgroundColor: "#fafafa",
            marginBottom: 15
          }}
        >
          {photos.profile.uri ? (
            <Image
              source={{ uri: photos.profile.uri }}
              style={{ width: 60, height: 60, borderRadius: 30 }}
            />
          ) : (
            <Image source={Images.placeHolder} style={{ width: 60, height: 60, borderRadius: 30 }} />
          )}
          <Pressable
            onPress={() => handleChoosePhoto("profile")}
            style={{
              padding: 15,
              borderRadius: 8,
              borderStyle: "solid",
              marginTop: 10,
              backgroundColor: "#000",
              width: "100%"
            }}
          >
            <Text
              style={{
                color: "#fff",
                textDecorationLine: "none",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 14
              }}
            >
              Profile Photo
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            width: "100%",
            padding: 15,
            alignItems: "center",
            borderStyle: "solid",
            borderColor: "#000",
            borderRadius: 8,
            backgroundColor: "#fafafa",
            marginBottom: 15
          }}
        >
          {photos.back.uri ? (
            <Image
              source={{ uri: photos.back.uri }}
              style={{ width: 60, height: 60, borderRadius: 30 }}
            />
          ) : (
            <Image source={Images.placeHolder} style={{ width: 60, height: 60, borderRadius: 30 }} />
          )}
          <Pressable
            onPress={() => handleChoosePhoto("back")}
            style={{
              padding: 15,
              borderRadius: 8,
              borderStyle: "solid",
              marginTop: 10,
              backgroundColor: "#000",
              width: "100%"
            }}
          >
            <Text
              style={{
                color: "#fff",
                textDecorationLine: "none",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 14
              }}
            >
              Back Photo
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            width: "100%",
            padding: 15,
            alignItems: "center",
            borderStyle: "solid",
            borderColor: "#000",
            borderRadius: 8,
            backgroundColor: "#fafafa"
          }}
        >
          {photos.side.uri ? (
            <Image
              source={{ uri: photos.side.uri }}
              style={{ width: 80, height: 80, borderRadius: 40 }}
            />
          ) : (
            <Image source={Images.placeHolder} style={{ width: 80, height: 80, borderRadius: 40 }} />
          )}
          <Pressable
            onPress={() => handleChoosePhoto("side")}
            style={{
              padding: 15,
              borderRadius: 8,
              borderStyle: "solid",
              marginTop: 10,
              backgroundColor: "#000",
              width: "100%"
            }}
          >
            <Text
              style={{
                color: "#fff",
                textDecorationLine: "none",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 14
              }}
            >
              Side Photo
            </Text>
          </Pressable>
        </View>
        <Pressable
          disabled={getStatus()}
          style={({ pressed }) => [
            {
              padding: 15,
              borderRadius: 8,
              marginTop: 20,
              backgroundColor: "#126f80",
              width: "100%"
            },
            { opacity: getStatus() ? 0.5 : 1 }
          ]}
          onPress={() => {
            const base64Pictures: any[] = [];
            base64Pictures.push({ image: photos.back.base64 || "", uri: photos.back.uri });
            base64Pictures.push({ image: photos.side.base64 || "", uri: photos.side.uri });
            base64Pictures.push({ image: photos.profile.base64 || "", uri: photos.profile.uri });
            props.next(base64Pictures);
          }}
        >
          <Text
            style={{
              color: "#fff",
              textDecorationLine: "none",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 18
            }}
          >
            Finish
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default Photos;

const styles = StyleSheet.create({
  scrollView: {
    height: Dimensions.get("screen").height * 0.7, // Reduce the height of the ScrollView
  },
  scrollContentStyle: {
    flexGrow: 1,
    alignSelf: "center",
    width: "100%",
    padding: 15,
    flexDirection: "column", // Change flexDirection to 'column'
    justifyContent: "flex-start", // Move items to the top of the screen
    alignItems: "center" // Center items horizontally
  }
});
