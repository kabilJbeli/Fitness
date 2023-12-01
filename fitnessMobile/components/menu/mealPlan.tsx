import { Agenda } from "react-native-calendars";
import { Card, Avatar } from "react-native-paper";
import {
  ActivityIndicator,
  Dimensions, Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios/index";
import Environment from "../../Environment";
import { _retrieveData } from "../../utils/utils";
import { Modal } from "../modal/modal";
import Images from "../../assets/Images";

export const MealFlatListItemSeparator = () => {
  return (
    <View
      style={{
        backgroundColor: "transparent",
        borderBottomWidth: 1
      }}
    />
  );
};


const MenuItem = (props: any) => {

  const repas: any[] = [];
  props.data?.repas?.forEach((item: any, index: number) => {

    repas.push(<View style={{ width: "100%" }}><Text
      style={{
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "left",
        color: "#126f80"
      }}>Meal {item.order}</Text></View>);
    repas.push(...item.ingredients.map((ingredient: any) =>
      <View><Text>{ingredient}</Text></View>
    ));

  });

  return (<View
    style={{ width: "100%", alignItems: "center", display: "flex", justifyContent: "space-between", height: "100%" }}>
    {repas}
  </View>);
};

const MealPlan = (props: any) => {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [state, setState] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [maxPages, setMaxPages] = useState<number>(0);
  const [isModalVisible, setModalVisible] = useState(false);


  const getUserInfo = (): void => {
    _retrieveData("userInfo").then((info: any) => {
      if (info !== undefined) {
        let parsedInfo = JSON.parse(info);
        if (parsedInfo !== undefined) {
          setUserInfo(parsedInfo);
          getMenus(parsedInfo.id);
        }
      }
    });
  };

  const getMenus = (keycloakKey: string) => {
    setModalVisible(true);
    axios({
      method: "GET",
      url: `${Environment.API_URL}/api/usersmanagement/findmenu/${keycloakKey}`,
      headers: {
        "Content-Type": "application/json",
        useQueryString: false
      },
      data: null,
      params: {}
    })
      .then(response => {
        setModalVisible(false);

        console.log("response menu =>>>>>>>> ", response.data);
        setState(response.data);
        //setEvent(response.data);
        setMaxPages(response.data.length);
      })
      .catch((err: any) => {
        setModalVisible(false);
        console.error(`/api/usersmanagement/findmenu/${keycloakKey}`, err);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, [props]);

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const getMealPlan = () => {
    let viewContent: any = (<View></View>);
    if (state !== null && state?.length > 0) {
      state.forEach((item: any, index) => {
        console.log(index, currentPage);
        if (currentPage === index) {
          viewContent = (

            <Meal data={item} maxPages={maxPages} currentPage={currentPage} next={() => nextPage()}
                  previous={() => previousPage()} />);
        }
      });
    } else {
      viewContent = (
        <View style={{ width: "100%", height: "100%" }}>
          <Modal isVisible={isModalVisible}>
            <Modal.Container>
              <Modal.Body>
                <ActivityIndicator size="large" color={"#fff"} />
              </Modal.Body>
            </Modal.Container>
          </Modal>
          <View style={{ width: "100%", padding: 15, marginTop: 30 }}>
            <Text style={{ textAlign: "center", width: "100%" }}>Sorry you currently don't have any available meal
              plans,
              please try
              again later! </Text>
            <TouchableOpacity style={styles.button} {...props} onPress={() => {
              getMenus(userInfo.id);
            }
            }>
              <Image
                source={Images.retry}
                style={{
                  width: 70,
                  height: 70,
                  opacity: 0.8
                }}
              />
            </TouchableOpacity>
          </View>
        </View>);
    }

    return viewContent;
  };

  return getMealPlan()
    ;
};


const Meal = (props: any) => {
  const [state, setState] = useState<any>(null);

  const getDayName = (dateGiven: string, locale = "fr-FR") => {
    console.log("date ========= =================== ", dateGiven);
    const date = new Date(dateGiven);
    return date.toLocaleDateString(locale, { weekday: "long" });
  };

  useEffect(() => {
    setState(props.data);
    console.log("Meal ========", props.data);
    console.log("state Meal ========", state);
  }, [props]);
  const [items, setItems] = useState({});
  const [dateNow, setDateNow] = useState("");
  const [startOfWeek, setStartOfWeek] = useState("");
  const [endOfWeek, setEndOfWeek] = useState("");
  const [event, setEvent] = useState("");

  useEffect(() => {
    getCurrentWeek();
  }), [];


  /*const events = [
    {
      date: '2023-10-26',
      name: 'plat 1',
      height: 80,
    },
    {
      date: '2023-10-26',
      name: 'plat 2',
      height: 80,
    },
    {
      date: '2023-10-26',
      name: 'plat 3',
      height: 80,
    },
    {
      date: '2023-10-27',
      name: 'Event 2',
      height: 120,
    },
    // Add more events as needed
  ];*/
  const getCurrentWeek = () => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 for Sunday, 1 for Monday, etc.

    // Calculate the start of the week (Sunday)
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - dayOfWeek);

    // Calculate the end of the week (Saturday)
    const endOfWeek = new Date(today);
    endOfWeek.setDate(today.getDate() + (6 - dayOfWeek));
    // Convert the dates to string format 'YYYY-MM-DD'
    const startOfWeekString = startOfWeek.toISOString().split("T")[0];
    const endOfWeekString = endOfWeek.toISOString().split("T")[0];
    setDateNow(today.toISOString().split("T")[0]);
    setEndOfWeek(endOfWeekString);
    setStartOfWeek(startOfWeekString);
  };
  // Get the device height
  const windowHeight = Dimensions.get("window").height;
  // Calculate the desired height (one-fourth of the device height)
  const desiredHeight = windowHeight / 8;
  const oneWeekFromToday = new Date();
  oneWeekFromToday.setDate(oneWeekFromToday.getDate() + 7);


  const loadItems = (day: any) => {
    const newItems = {};

    /*  events.forEach(event => {
        if (event.datemenu === day.dateString) {
          if (!newItems[day.dateString]) {
            newItems[day.dateString] = [];
          }

          newItems[day.dateString].push({
            label: event.repas[0].label,
            ingredients :event.repas[0].ingredients,
          });
        }
      });*/

    setItems(newItems);
  };

  const renderItem = (item: any) => {
    return (
      <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
              {item.ingredients.length == 0 ?
                <Text>{item.label}</Text> : item.ingredients.map((ingredient: any, index: number) => (
                  <View key={index}>
                    <Text>{ingredient} {"\n"}</Text>
                  </View>
                ))}
              {/* <Avatar.Text label="J" /> */}
              {/* <Avatar.Image
               size={80} // Set the size you want
               source={require('./assets/kouskous.jpeg')} // Replace with the path to your image
               /> */}
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{
        height: desiredHeight,
        marginBottom: 20,
        backgroundColor: "#0DB0D4",
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text style={{ color: "white", fontSize: 25 }}>Meal plan</Text>
      </View>

      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={dateNow} // Set the initial date to display events
        minDate={startOfWeek}    // Set the minimum selectable date
        maxDate={endOfWeek}      // Set the maximum selectable date
        renderItem={renderItem}
      />
    </View>
  );
};

export default MealPlan;
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
    width: "100%",
    alignItems: "center"

  },
  containerStyle: {
    width: "100%",
    height: Dimensions.get("screen").height - 380,
    padding: 15
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
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: "100%",
    alignItems: "center",
    marginTop: 15
  },
  buttonText: {
    color: "#fff",
    fontSize: 20
  }
});
