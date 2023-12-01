import * as React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem
} from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconE from "react-native-vector-icons/FontAwesome";
import IconS from "react-native-vector-icons/SimpleLineIcons";
import IconFeather from "react-native-vector-icons/Feather";

import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

import {
  HomeStatusStack, LoadingStack, MealPlanStack, MyPackageStack, PackagesStack, ProfileStack, WorkoutStack
} from "./navigationUtils";

import { _retrieveData, _storeData } from "../../utils/utils";
import { useEffect, useState } from "react";
import axios from "axios";
import Environment from "../../Environment";
import LoadingError from "../loading/LoadingError";
import { useKeycloak } from "@react-keycloak/native";
import GridViewWithButton from "../athlete-information-stepper/steps/equipment"

const CustomDrawerContent = (props: any) => {
  const { state, descriptors, navigation } = props;
  const logOut = () => {
    props.logout(true);

  };
  let lastGroupName = "";
  let newGroup = true;

  return (
    <DrawerContentScrollView
      style={{ width: "100%" }} {...props}>
      {/* <DrawerItemList {...props} />*/}
      <View style={styles.profile}>
        <View style={styles.username}><IconE color={"#fff"} size={15} style={{ paddingRight: 5 }}
                                             name={"user-circle-o"} />
          <Text style={styles.profileText}>{props.userInfo?.name}</Text>
        </View>
        <View style={styles.username}>
          <Text style={styles.profileText}>Role: Client
          </Text>
        </View>
        <Text style={styles.emailText}>{props.userInfo?.email}</Text>
        <Pressable style={{ paddingTop: 5, paddingBottom: 5 }}
                   onPress={() => {
                     navigation.navigate("Profile");
                   }}>
          <Text style={{ color: "#fff", textDecorationLine: "underline" }}>Update Profile Information</Text>
        </Pressable>
      </View>
      {state.routes.map((route: any) => {
        const { drawerLabel, activeTintColor, title, drawerIcon } =
          descriptors[route.key].options;
        if (lastGroupName !== title) {
          newGroup = true;
          lastGroupName = title;
        } else {
          newGroup = false;
        }
        return (
          <View key={route.key + "GroupWrapper"}>
            {newGroup ? (
              <View key={route.key + "Group"} style={styles.sectionContainer}>

              </View>
            ) : null}
            <DrawerItem
              key={route.key}
              label={({ color }) => <Text style={{ color, display: "flex", justifyContent: "center" }}> <View
                style={{ minWidth: 15 }}>{drawerIcon(true, 15)}</View> {"   "} <Text
                style={{ paddingLeft: 15 }}>{drawerLabel}</Text></Text>}
              focused={
                state.routes.findIndex((e: any) => e.name === route.name) ===
                state.index
              }
              {...props}
              checkPackage={() => props.checkPackage()}

              activeTintColor={activeTintColor}
              onPress={() => navigation.navigate(route.name)}
            />
          </View>
        );
      })}
      <DrawerItem key={"logoutComponent1"} label={"Log Out"} onPress={logOut}
                  icon={({ focused, color, size }) => (<IconS color={color}
                                                              size={size} name={"logout"} />)}
      />
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();
const getRoleBasedDrawerNavigator = (props: any, userInfo: any): any => {
  let [roles, setRoles] = useState<string[]>([]);
  const [keycloakId, setKeycloakId] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [packages, setPackage] = useState<any>(null);
  const [packageInterval, setPackageInterval] = useState<any>(null);
  const [errors, setErrors] = useState<boolean>(false);
  const { keycloak, initialized } = useKeycloak();

  useEffect(() => {
    getUserInfo();
  }, [props]);
  const getUserInfo = (): void => {
    _retrieveData("userInfo").then((info: any) => {
      if (info !== undefined) {
        let parsedInfo = JSON.parse(info);
        if (parsedInfo !== undefined) {
          if (parsedInfo.roles.includes("Client")) {
            setKeycloakId(parsedInfo.id);
            const packageIntervalLocal = setInterval(() => {
              if ((packages === 2 || packages === null) && errors === false) {
                getCurrentPackage(parsedInfo.id);
              } else {
                clearInterval(packageInterval || packageIntervalLocal);
              }
            }, 5000);

            setPackageInterval(packageIntervalLocal);
          }
        }
      } else {
        // getUserInfo()
      }
    });
  };
  const getCurrentPackage = (keycloakId: string) => {
    let isError: any;
    axios({
      method: "GET",
      url: `${Environment.API_URL}/api/usersmanagement/currentpackage/${keycloakId}`,
      headers: {
        "Content-Type": "application/json",
        useQueryString: false
      },
      params: {}
    })
      .then(response => {
        console.log("getCurrentPackage ==============>", `${Environment.API_URL}/api/usersmanagement/currentpackage/${keycloakId}`);
        setPackage(response.data);
        if (response.data !== 2) {
          clearInterval(packageInterval);
        }

        _storeData("currentPackage", JSON.stringify(response.data));
        setLoading(false);
        isError = false;
        setErrors(false);
      })
      .catch((err: any) => {
        console.error(`api/usersmanagement/currentpackage/${keycloakId}`, err);
        isError = true;
        setErrors(true);
      }).finally(() => {
      console.log(isError);
      console.log(errors);
      setErrors(isError);
    });
  };
  const logOutOfApp = (val: any) => {
    props.logout(val);
    _storeData("loggedIn", "false").then(result => {
    });
    if (packageInterval !== null) {
      clearInterval(packageInterval);
    }
  };

  const LoadingErrorComponent = (props: any) => (
    <LoadingError logout={(value: any) => logOutOfApp(value)} {...props} />
  );
  let returnedData = (<Drawer.Navigator
    initialRouteName={errors === true ? "LoadingStackError" : "LoadingStack"}
    screenOptions={{
      drawerStyle: {
        width: 250
      },
      drawerPosition: "left",
      drawerType: "slide",
      drawerInactiveTintColor: "#fff",
      drawerAllowFontScaling: true,
      drawerActiveTintColor: "#999999",
      swipeEnabled: true,
      drawerIcon: () => (
        <IconFeather name="menu" size={24} style={{ color: "#fff" }}
                     {...props}
        />
      )
    }}
    drawerContent={props => (
      <CustomDrawerContent
        {...props}
        logout={(value: any) => logOutOfApp(value)}
        userInfo={userInfo}
        navigation={props.navigation}
      />
    )}>

    <Drawer.Screen
      name={"LoadingStackError"}
      component={LoadingErrorComponent}
      options={{
        drawerLabel: "...",
        title: "Loading User Info.",
        headerShown: false,
        swipeEnabled: true,
        drawerIcon: ({ focused, size }) => (
          <Icon name="package" size={20} color={"#262626"} />
        )
      }}
      {...props}
      logout={(value: any) => logOutOfApp(value)}

    />
    <Drawer.Screen
      name={"LoadingStack"}
      component={LoadingStack}
      options={{
        drawerLabel: "...",
        title: "Loading User Info.",
        headerShown: false,
        swipeEnabled: true,
        drawerIcon: ({ focused, size }) => (
          <Icon name="package" size={20} color={"#262626"} />
        )
      }}
      {...props}
      logout={(value: any) => logOutOfApp(value)}

    />

  </Drawer.Navigator>);
  if ((packages === 2 || packages === null) && isLoading === false) {
    console.log(packages);
    returnedData = (<Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: 250
        },
        headerShown: false,
        drawerPosition: "left",
        drawerType: "slide",
        drawerInactiveTintColor: "#fff",
        drawerAllowFontScaling: true,
        drawerActiveTintColor: "#999999",
        swipeEnabled: true,
        drawerIcon: () => (
          <IconFeather name="menu" size={24} style={{ color: "#fff" }}
                       {...props}
          />
        )
      }}
      drawerContent={props => (
        <CustomDrawerContent
          {...props}
          logout={(value: any) => logOutOfApp(value)}
          userInfo={userInfo}
          navigation={props.navigation}
        />
      )}>
      <Drawer.Screen
        name={"Package"}
        component={PackagesStack}
        options={{
          drawerLabel: "Choose Your Package",
          title: "Choose Your Package",
          headerShown: false,
          swipeEnabled: true,
          drawerIcon: ({ focused, size }) => (
            <Icon name="package" size={20} color={"#262626"} />
          )
        }}
        {...props}
        checkPackage={() => getCurrentPackage(keycloakId)}
      />
      <Drawer.Screen
        name={"Profile"}
        component={ProfileStack}
        options={{
          drawerLabel: "Profile",
          title: "profile",
          headerShown: false,
          swipeEnabled: true,
          drawerIcon: ({ focused, size }) => (
            <IconE name="user" size={20} color={"#262626"} />
          )
        }}
        {...props}
      />
    </Drawer.Navigator>);
  } else if ((packages !== 2 && packages !== null) && isLoading === false) {
    console.log(packages.value);

    returnedData = (<Drawer.Navigator

      screenOptions={{
        drawerStyle: {
          width: 250
        },
        drawerPosition: "left",
        drawerType: "slide",
        drawerInactiveTintColor: "#fff",
        drawerAllowFontScaling: true,
        drawerActiveTintColor: "#999999",
        swipeEnabled: true,
        drawerIcon: () => (
          <IconFeather name="menu" size={24} style={{ color: "#fff" }} />
        )
      }}
      drawerContent={props => (
        <CustomDrawerContent
          {...props}
          logout={(value: any) => logOutOfApp(value)}
          userInfo={userInfo}
          navigation={props.navigation}
        />
      )}>
      <Drawer.Screen
        name={"Home"}
        component={HomeStatusStack}
        options={{
          drawerLabel: "Home",
          title: "home",
          headerShown: false,
          swipeEnabled: true,
          drawerIcon: ({ focused, size }) => (
            <Icon name="home" size={22} color={"#262626"} />
          )
        }}
        {...props}
      />
      <Drawer.Screen
        name={"MyPackage"}
        component={MyPackageStack}
        options={{
          drawerLabel: "My Package",
          title: "My Package",
          headerShown: false,
          swipeEnabled: true,
          drawerIcon: ({ focused, size }) => (
            <Icon name="package" size={20} color={"#262626"} />
          )
        }}
        {...props}
      />

      <Drawer.Screen
        name={"myMeal"}
        component={MealPlanStack}
        options={{
          drawerLabel: "My Meal Plan",
          title: "My Meal Plan",
          headerShown: false,
          swipeEnabled: true,
          drawerIcon: ({ focused, size }) => (
            <Icon name="package" size={20} color={"#262626"} />
          )
        }}
        {...props}
      />
      <Drawer.Screen
        name={"equipment"}
        component={GridViewWithButton}
        options={{
          drawerLabel: "equipment",
          title: "equipment",
          headerShown: false,
          swipeEnabled: true,
          drawerIcon: ({ focused, size }) => (
            <Icon name="package" size={20} color={"#262626"} />
          )
        }}
        {...props}
      />
      <Drawer.Screen
        name={"myWorkout"}
        component={WorkoutStack}
        options={{
          drawerLabel: "My Workout",
          title: "My Workout",
          headerShown: false,
          swipeEnabled: true,
          drawerIcon: ({ focused, size }) => (
            <Icon name="package" size={20} color={"#262626"} />
          )
        }}
        {...props}
      />
      <Drawer.Screen
        name={"Profile"}
        component={ProfileStack}
        options={{
          drawerLabel: "Profile",
          title: "profile",
          headerShown: false,
          swipeEnabled: true,
          drawerIcon: ({ focused, size }) => (
            <IconE name="user" size={20} color={"#262626"} />
          )
        }}
        {...props}
      />
    </Drawer.Navigator>);
  }

  useEffect(() => {
    if (userInfo && userInfo.roles !== null) {
      setRoles(userInfo.roles);
    }
  }, []);

  return returnedData;

};

const Navigation = (props: any) => {
  const [userInfo, setUserInfo] = useState<any>(null);
  const retrieveUserInformation = () => {
    useEffect(() => {
      if (userInfo === null) {
        _retrieveData("userInfo").then((userInfo: any) => {
          setUserInfo(JSON.parse(userInfo));
        });
      }
    }, [userInfo]);
  };
  retrieveUserInformation();

  return getRoleBasedDrawerNavigator(props, userInfo);
};
export default Navigation;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 0,
    paddingTop: 0,
    paddingBottom: 0,
    height: "90%"
  },
  profile: {
    backgroundColor: "#00a99d",
    color: "#fff",
    marginTop: -5,
    padding: 10,
    justifyContent: "center"
  },
  profileText: {
    color: "#fff",
    fontWeight: "bold"
  },
  emailText: {
    color: "#fff"
  },
  sectionLine: {
    backgroundColor: "gray",
    flex: 1,
    height: 1,
    marginLeft: 10,
    marginRight: 20
  },
  scrollSection: {
    //maxHeight: '500',
  },
  username: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }
});
