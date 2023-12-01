import {
  StyleSheet,
  View,
  StatusBar,
  Pressable,
  ActivityIndicator,
  Text,
  ImageBackground,
  ImageSourcePropType
} from "react-native";
import React, { useEffect, useState } from "react";
import Goal from "./steps/goal";
import Age from "./steps/age";
import Height from "./steps/height";
import Weight from "./steps/weight";
import IconM from "react-native-vector-icons/MaterialIcons";
import Equipment from "./steps/equipment";
import Photos from "./steps/photos";
import { useNavigation } from "@react-navigation/native";
import Environment from "../../Environment";
import axios from "axios";
import { Modal } from "../modal/modal";
import { _retrieveData, _storeData } from "../../utils/utils";
import Gender from "./steps/gender";
import TrainingDays from "./steps/trainingDays";
import Allergies from "./steps/allergies";
import Food from "./steps/food";
import WorkoutType from "./steps/workoutType";
import Images from "../../assets/Images";


const AthleteInformationStepper = (props: any) => {
  const [state, setState] = useState<any>({
    ...props.route.params?.state,
    currentStep: 0,
    information: {
      age: null,
      objectif: null,
      taille: null,
      poids: null,
      gender: null,
      foodrequirements: null,
      allergiedescription: null,
      allergie: null,
      daysworkout: null,
      equipment: null
    },
    pictures: []
  });

  const [error, setError] = useState<any>(null);
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const { steps, currentStep } = state;
  useEffect(() => {
    let jsonResponse: any;
    _retrieveData("clientCreation").then(res => {
      if (res !== undefined && res !== null && res != "") {
        jsonResponse = JSON.parse(res);
        setState({ ...jsonResponse, currentStep: 0 });
      }
    });
  }, [props]);

  const createClient = (pictures: any[]) => {
    const payload: any = {
      ...props.route.params?.state.user,
      ...state.information,
      pictures: pictures
    };
    console.log(payload);
    axios({
      method: "POST",
      url: `${Environment.API_URL}/api/usersmanagement/clientcreation`,
      headers: {
        "Content-Type": "application/json",
        useQueryString: false
      },
      data: payload,
      params: {}
    })
      .then(response => {
        setModalVisible(false);
        // @ts-ignore
        navigation.navigate("homePage", { state });
        _storeData("clientCreation", "");
      })
      .catch((err: any) => {
        setModalVisible(false);
        console.error("api/usersmanagement/clientcreation", err);
        setError("An error has occurred while creating the client account");
      });
  };

  const goBack = () => {
    setError(null);
    navigation.goBack();
  };

  const getImage = (): any => {
    let image: ImageSourcePropType;
    switch (currentStep) {
      case 0:
        image = Images.goal;
        break;
      case 1:
        image = Images.genderBg;
        break;
      case 2:
        image = Images.age;
        break;
      case 3:
        image = Images.height; // Add this line for the "Height" step
        break;
      case 4:
        image = Images.arm; // Add this line for the "Weight" step
        break;
      case 6:
        image = Images.allergies;
        break;
      case 7:
        image = Images.nutrition;
        break;
      case 5:
        image = Images.workoutDays;
        break;
      default:
        image = Images.blue;
        break;
    }
    return image;
  };

  const getSteps = (): any => {
    return (
      <ImageBackground source={getImage()} resizeMode="cover"
                       style={[StyleSheet.absoluteFillObject, {
                         paddingTop: 30
                       }]}>
        <View style={{ zIndex: 3 }}>
          <StatusBar
            translucent={true}
            animated={true}
          />
          <Modal isVisible={isModalVisible}>
            <Modal.Container>
              <Modal.Body>
                <ActivityIndicator size="large" color={"#fff"} />
              </Modal.Body>
            </Modal.Container>
          </Modal>
          <View>
            <View style={{ marginTop: 0, padding: 15 }}>
              <Pressable
                style={{ width: 80, flexDirection: "row" }}
                onPress={() => {
                  if (currentStep != 0) {
                    setState({
                      currentStep: currentStep - 1,
                      information: { ...state.information }, ...props.route.params?.state.user
                    });
                    setError(null);
                  } else {
                    goBack();
                  }
                }}
              ><IconM name="arrow-back" size={32} color={currentStep === 0 ? "#fff" : "#fff"} />
              </Pressable>
            </View>
            {error !== null &&
              <View><Text style={{ textAlign: "center", color: "red" }}>{error}</Text></View>}
            {currentStep == 0 &&
              <Goal next={(goal: string) => {
                setState({
                  currentStep: currentStep + 1, information: { ...state.information, objectif: goal },
                  ...props.route.params?.state.user
                });
                _storeData("clientCreation", JSON.stringify({
                  currentStep: currentStep + 1,
                  information: { ...state.information, objectif: goal },
                  ...props.route.params?.state.user
                }));
              }} />
            }

            {currentStep == 1 &&
              <Gender
                next={(gender: string) => {
                  setState({
                    currentStep: currentStep + 1,
                    information: { ...state.information, gender: gender }, ...props.route.params?.state.user
                  });
                  _storeData("clientCreation", JSON.stringify({
                    currentStep: currentStep + 1,
                    information: { ...state.information, gender: gender },
                    ...props.route.params?.state.user
                  }));

                }} />
            }
            {currentStep == 2 &&
              <Age next={(age: string) => {
                setState({
                  currentStep: currentStep + 1, information: { ...state.information, age },
                  ...props.route.params?.state.user
                });
                _storeData("clientCreation", JSON.stringify({
                  currentStep: currentStep + 1,
                  information: { ...state.information, age },
                  ...props.route.params?.state.user
                }));

              }} />
            }
            {currentStep == 3 &&
              <Height
                next={(height: string) => {
                  setState({
                    currentStep: currentStep + 1,
                    information: { ...state.information, taille: height }, ...props.route.params?.state.user
                  });
                  _storeData("clientCreation", JSON.stringify({
                    currentStep: currentStep + 1,
                    information: { ...state.information, taille: height },
                    ...props.route.params?.state.user
                  }));
                }} />
            }
            {currentStep == 4 &&
              <Weight
                next={(weight: string) => {
                  setState({
                    currentStep: currentStep + 1,
                    information: { ...state.information, poids: parseFloat(weight) }, ...props.route.params?.state.user
                  });
                  _storeData("clientCreation", JSON.stringify({
                    currentStep: currentStep + 1,
                    information: { ...state.information, poids: parseFloat(weight) },
                    ...props.route.params?.state.user
                  }));

                }} />

            }
            {currentStep == 5 &&
              <TrainingDays
                next={(daysworkout: string) => {
                  setState({
                    currentStep: currentStep + 1,
                    information: {
                      ...state.information,
                      daysworkout: parseInt(daysworkout)
                    }, ...props.route.params?.state.user
                  });
                  _storeData("clientCreation", JSON.stringify({
                    currentStep: currentStep + 1,
                    information: { ...state.information, daysworkout: parseInt(daysworkout) },
                    ...props.route.params?.state.user
                  }));

                }} />
            }
            {currentStep == 6 &&
              <Allergies
                next={(allergie: string) => {
                  setState({
                    currentStep: currentStep + 1,
                    information: {
                      ...state.information,
                      allergiedescription: allergie,
                      allergie: allergie !== undefined && allergie?.length > 0 ? true :
                        false
                    }, ...props.route.params?.state.user
                  });
                  _storeData("clientCreation", JSON.stringify({
                    currentStep: currentStep + 1,
                    information: {
                      ...state.information, allergiedescription: allergie,
                      allergie: allergie !== undefined && allergie !== null && allergie?.length > 0 ? true :
                        false
                    },
                    ...props.route.params?.state.user
                  }));

                }} />
            }

            {currentStep == 7 &&
              <Food
                next={(food: string) => {
                  setState({
                    currentStep: currentStep + 1,
                    information: {
                      ...state.information,
                      foodrequirements: food
                    }, ...props.route.params?.state.user
                  });
                  _storeData("clientCreation", JSON.stringify({
                    currentStep: currentStep + 1,
                    information: { ...state.information, foodrequirements: food },
                    ...props.route.params?.state.user
                  }));

                }} />
            }
            {currentStep == 8 &&
              <WorkoutType
                next={(workout: string) => {
                  setState({
                    currentStep: currentStep + 1,
                    information: {
                      ...state.information,
                      workouthome: JSON.parse(workout)
                    }, ...props.route.params?.state.user
                  });
                  _storeData("clientCreation", JSON.stringify({
                    currentStep: currentStep + 1,
                    information: { ...state.information, workouthome: JSON.parse(workout) },
                    ...props.route.params?.state.user
                  }));
                }} />
            }
            {currentStep == 10 &&
              <Photos
                next={(pictures: any[]) => {
                  setModalVisible(true);
                  setState({
                    currentStep: currentStep,
                    information: { ...state.information },
                    pictures: pictures, ...props.route.params?.state.user
                  });
                  _storeData("clientCreation", JSON.stringify({
                    currentStep: currentStep + 1,
                    information: { ...state.information, pictures: pictures },
                    ...props.route.params?.state.user
                  }));

                  createClient(pictures);
                }} />}
            {currentStep == 9 && (
              <Equipment
                onNext={(selectedequipement: string) => {
                  setState({
                    currentStep: currentStep + 1,
                    information: {
                      ...state.information,
                      equipment: selectedequipement,
                    },
                    ...props.route.params?.state.user,
                  });
                  _storeData("clientCreation", JSON.stringify({
                    currentStep: currentStep + 1,
                    information: {
                      ...state.information,
                      equipment: selectedequipement,
                    },
                    ...props.route.params?.state.user,
                  }));
                }}
                onBack={() => {
                  setState({
                    currentStep: currentStep - 1,
                    information: { ...state.information },
                    ...props.route.params?.state.user,
                  });
                  setError(null);
                }}
              />
            )}
          </View>

        </View>
        <View style={currentStep === 0 ? styles.overlay : styles.overlay1} />
      </ImageBackground>
    );
  };
  return getSteps();
};

export default AthleteInformationStepper;
const styles = StyleSheet.create({
  centerElement: { justifyContent: "center", alignItems: "center" },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.1)",
    zIndex: 0
  },
  overlay1: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1
  }
});
