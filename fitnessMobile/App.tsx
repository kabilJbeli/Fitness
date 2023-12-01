/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet, Text, View
} from "react-native";
import keycloak from "./auth/keycloak";

import { ReactNativeKeycloakProvider } from "@react-keycloak/native";
import KeycloakLogin from "./components/Login";
import { _storeData } from "./utils/utils";
import { LogBox } from "react-native";
import { NativeBaseProvider } from "native-base";
import NetInfo from "@react-native-community/netinfo";
import { Modal } from "./components/modal/modal";

function App(): JSX.Element {
  const [isOffline, setOffline] = useState<boolean>(false);
  const handleOnEvent = async (event: any, error: any) => {
    if (event === "onTokenExpired") {
      _storeData("token", "");
      _storeData("userInfo", "");
      keycloak?.logout();
    } else {
      //console.error("An error Has occurred, Event Name = " + event, "Error Information =" + error);
    }
  };
  LogBox.ignoreAllLogs();
  const handleTokens = async (token: any) => {
    // console.info(token);
  };
  useEffect(() => {
    NetInfo.addEventListener(networkState => {
      const offline = networkState.isInternetReachable !== null ? !networkState.isInternetReachable : false;
      setOffline(offline);
    });
  }, []);

  return (
    <ReactNativeKeycloakProvider
      onEvent={(event, error) => handleOnEvent(event, error)}
      authClient={keycloak}
      onTokens={(token) => handleTokens(token)}
      initOptions={{
        redirectUri: "fitness://home",
        // if you need to customize "react-native-inappbrowser-reborn" View you can use the following attribute
        inAppBrowserOptions: {
          hasBackButton: true,
          showTitle: true,
          enableUrlBarHiding: true,
          forceCloseOnRedirection: true,
          toolbarColor: "#000",
          secondaryToolbarColor: "#000",
          navigationBarColor: "#000",
          navigationBarDividerColor: "#000",
          enableDefaultShare: true,
          animations: {
            startEnter: "slide_in_right",
            startExit: "slide_out_left",
            endEnter: "slide_in_left",
            endExit: "slide_out_right"
          }
          // For iOS check: https://github.com/proyecto26/react-native-inappbrowser#ios-options
          // For Android check: https://github.com/proyecto26/react-native-inappbrowser#android-options
        },
        scopes: ["email offline_access web-origins role_list profile"]
      }}>
      <NativeBaseProvider>
        <Modal isVisible={isOffline} style={styles.modal} animationInTiming={600}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Connection Error</Text>
            <Text style={styles.modalText}>
              Oops! Looks like your device is not connected to the Internet.
            </Text>
          </View>
        </Modal>
        <KeycloakLogin />
      </NativeBaseProvider>
    </ReactNativeKeycloakProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400"
  },
  highlight: {
    fontWeight: "700"
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
    zIndex: 333333333,
    height: "100%",
    width: "100%"
  },
  modalContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: "center"
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "600"
  },
  modalText: {
    fontSize: 18,
    color: "#555",
    marginTop: 14,
    textAlign: "center",
    marginBottom: 10
  }
});


export default App;
