import { Platform } from "react-native";
export const getDeepLink = (path = "") => {
  const scheme = "fitness";
  const prefix = Platform.OS === "android" ? `${scheme}://home/` : `${scheme}://`;
  return prefix + path;
};
