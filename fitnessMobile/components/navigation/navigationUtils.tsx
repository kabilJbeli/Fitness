import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, TouchableOpacity, View } from "react-native";
import { Props } from "../../utils/utils";
import Home from "../home/home";
import { MainProfileStack } from "../profile/profileInformation";
import PackagesList from "../packages/packagesList";
import PackageInformation from "../packages/packageInformation";
import MyPackage from "../packages/myPackage";
import Loading from "../loading/Loading";
import Coaches from "../packages/coaches";
import MealPlan from "../menu/mealPlan";
import WorkoutList from "../workouts/workoutList";
import Workout from "../workouts/workout";

const Stack = createStackNavigator();

const NavigationDrawerStructure = (props: any) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawer.png"
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>);
};


export const HomeStatusStack = ({ navigation }: Props, props: any) => {
  return (
    <Stack.Navigator initialRouteName="HomePageStack">
      <Stack.Screen
        name="HomePageStack"
        component={Home}
        options={{
          title: "Home", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#fff" //Set Header color
          },
          headerTintColor: "#000", //Set Header text color
          headerTitleStyle: {}
        }}
        {...props}

      />

      <Stack.Screen
        name="watchWorkout"
        component={Workout}
        options={{
          title: "Workout", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerShown:false,
          headerStyle: {
            backgroundColor: "#fff" //Set Header color
          },
          headerTintColor: "#000", //Set Header text color
          headerTitleStyle: {}
        }}
        {...props}
      />

    </Stack.Navigator>);
};


export const ProfileStack = ({ navigation }: Props, props: any) => {
  return (
    <Stack.Navigator initialRouteName="ProfileInformation">
      <Stack.Screen
        name="ProfileInformation"
        component={MainProfileStack}
        options={{
          title: "Profile Information", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#fff" //Set Header color
          },
          headerTintColor: "#000", //Set Header text color
          headerTitleStyle: {}
        }}
        {...props}

      />
    </Stack.Navigator>);
};


export const MyPackageStack = ({ navigation }: Props, props: any) => {
  return (
    <Stack.Navigator initialRouteName="MyPackageInformation"
                     {...props}>
      <Stack.Screen
        name="MyPackageInformation"
        component={MyPackage}
        options={{
          title: "My Package", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#fff" //Set Header color
          },
          headerTintColor: "#000", //Set Header text color
          headerTitleStyle: {}
        }}
        {...props}
      />
      <Stack.Screen
        name="myMeal"
        component={MealPlan}
        options={{
          title: "My Meal Plan", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#fff" //Set Header color
          },
          headerTintColor: "#000", //Set Header text color
          headerTitleStyle: {}
        }}
        {...props}

      />
    </Stack.Navigator>);
};
export const PackagesStack = ({ navigation }: Props, props: any) => {
  return (
    <Stack.Navigator initialRouteName="PackagesList"
                     {...props}
    >
      <Stack.Screen
        name="PackagesList"
        component={PackagesList}
        options={{
          title: "Choose your subscription", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerShown: false,
          headerStyle: {
            backgroundColor: "#fff" //Set Header color
          },
          headerTintColor: "#000", //Set Header text color
          headerTitleStyle: {}
        }}
        {...props}
        checkPackage={() => props.checkPackage()}
      />
      <Stack.Screen name="packageInformation" component={PackageInformation}
                    options={{
                      title: "Consult Package Information", //Set Header Title
                      headerLeft: () => (
                        <NavigationDrawerStructure navigationProps={navigation} />
                      ),
                      headerShown: false,
                      headerStyle: {
                        backgroundColor: "#fff" //Set Header color
                      },
                      headerTintColor: "#000", //Set Header text color
                      headerTitleStyle: {
                        fontWeight: "bold" //Set Header text style
                      }
                    }}
                    {...props}
                    checkPackage={() => props.checkPackage()}
      />

      <Stack.Screen name="coaches" component={Coaches}
                    options={{
                      title: "Coaches", //Set Header Title
                      headerLeft: () => (
                        <NavigationDrawerStructure navigationProps={navigation} />
                      ),
                      headerShown: false,
                      headerStyle: {
                        backgroundColor: "#fff" //Set Header color
                      },
                      headerTintColor: "#000", //Set Header text color
                      headerTitleStyle: {
                        fontWeight: "bold" //Set Header text style
                      }
                    }}
                    {...props}
                    checkPackage={() => props.checkPackage()}
      />


    </Stack.Navigator>);
};

export const MealPlanStack = ({ navigation }: Props, props: any) => {
  return (
    <Stack.Navigator initialRouteName="mealPlan"
                     {...props}
    >
      <Stack.Screen
        name="mealPlan"
        component={MealPlan}
        options={{
          title: "My Meal Plan", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#fff" //Set Header color
          },
          headerTintColor: "#000", //Set Header text color
          headerTitleStyle: {}
        }}
        {...props}
      />
    </Stack.Navigator>);
};


export const LoadingStack = ({ navigation }: Props, props: any) => {
  return (
    <Stack.Navigator initialRouteName="Loading"
                     {...props}
    >
      <Stack.Screen
        name="Loading"
        component={Loading}
        options={{
          title: "Loading Info", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#fff" //Set Header color
          },
          headerTintColor: "#000", //Set Header text color
          headerTitleStyle: {}
        }}
        {...props}
      />
    </Stack.Navigator>);
};


export const WorkoutStack = ({ navigation }: Props, props: any) => {
  return (
    <Stack.Navigator initialRouteName="workouts"
                     {...props}
    >
      <Stack.Screen
        name="workouts"
        component={WorkoutList}
        options={{
          title: "Available Workout List", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#fff" //Set Header color
          },
          headerTintColor: "#000", //Set Header text color
          headerTitleStyle: {}
        }}
        {...props}
      />
      <Stack.Screen
        name="watchWorkout"
        component={Workout}
        options={{
          title: "Workout", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerShown:false,
          headerStyle: {
            backgroundColor: "#fff" //Set Header color
          },
          headerTintColor: "#000", //Set Header text color
          headerTitleStyle: {}
        }}
        {...props}
      />
    </Stack.Navigator>);
};
