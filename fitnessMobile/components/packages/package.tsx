import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Package = (props: any) => {
  const navigation = useNavigation();

  return (<Pressable
    onPress={() => {
      // @ts-ignore
      navigation.navigate("packageInformation", { packageData: props.data, userInfo:props.user });
    }}
    style={styles.packageContainer}>
    <View style={styles.package}>
      <Text style={styles.packageTitle}>{props.data.libelle}</Text>
      <Text style={styles.packageDescription}>{props.data.description}</Text>
      {/* <Text style={styles.packageInfo}>{props.data.validity}/{props.data.unitetime}</Text>*/}
    </View>
  </Pressable>);
};

export default Package;
const styles = StyleSheet.create({
  packageContainer: {
    padding: 15
  },
  package: {
    backgroundColor: "#565656",
    padding: 10,
    borderRadius: 8,
    width: "100%"
  },
  packageTitle: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    textTransform: "uppercase"
  },
  packageDescription: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center"

  },
  packageInfo: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"

  }
});

