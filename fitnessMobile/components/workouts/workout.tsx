import { Pressable, StatusBar, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as React from "react";
import Video from "react-native-video";
import { useState } from "react";

const Workout = (props: any) => {
  const videoPlayer = React.useRef<Video | null>();
  const [isVideoEnded, setIsVideoEnded] = useState<boolean>(false);
  const [videoUrl, setVideoUrl] = useState<string>("https://youtu.be/Zrtv6zBC2s4?si=GlLjjc9XMiwEmFFc");
  return (<View>
    <StatusBar translucent={true} animated={true} />
    <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: "100%", height: "30%" }}>
      <View style={{
        width: "50%",
        backgroundColor: "#fdb9b9",
        flexDirection: "row",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text style={{ color: "#000", fontWeight: "bold", fontSize: 48 }}>5</Text>
        <Text style={{ color: "#888686", fontSize: 18 }}> Exercises Left</Text>
      </View>
      <View style={{
        width: "50%",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
      }}>
        <Pressable style={{
          backgroundColor: "#e8e8e8",
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          borderRadius: 8
        }}>
          <Icon name="flag-triangle" size={22} color={"#f23735"} />
          <Text style={{ textAlign: "center", color: "#000" }}>Finish workout</Text>
        </Pressable>
      </View>
    </View>
    <View style={{ width: "100%", height: "70%", backgroundColor: "#dddfde" }}>
      <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", height: "20%",paddingVertical:20 }}>
        <View
          style={{ width: "70%", height: "100%", justifyContent: "center", alignItems: "flex-start", paddingLeft: 15 }}>
          <Text style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
            width: "100%"
          }}>Straight</Text>
          <Text style={{ color: "#fff", fontSize: 28, textAlign: "center", width: "100%" }}>Squat</Text>
        </View>
        <View style={{
          width: "30%",
          borderLeftWidth: 2,
          borderLeftColor: "#fff",
          height: "100%",
          justifyContent: "center"
        }}>
          <Text style={{ color: "#fff", fontSize: 21, fontWeight: "bold", textAlign: "center" }}>12 reps</Text>
        </View>
      </View>
      <View style={{ width: "100%", height: "77%" }}>
        <Video source={{
          uri: "http://videocdn.bodybuilding.com/video/mp4/62000/62792m.mp4"
        }
        }
               ref={ref => (videoPlayer.current = ref)}
               resizeMode={"cover"}
               poster={
                 "https://picsum.photos/1200/800"
               }
               posterResizeMode={"cover"}
               style={{
                 width: "100%",
                 height: "100%"
               }
               }
               fullscreen={true}
               onEnd={() => {
                 setIsVideoEnded(true);
               }
               }
               repeat={false}
               controls={true}
               paused={false}
               fullscreenOrientation={"all"}
        />
        {
          isVideoEnded &&
          <View style={{ width: "100%", justifyContent: "center", alignItems: "center", bottom: -50 }}><Pressable
            style={{ backgroundColor: "#fff", padding: 15, width: "50%", borderRadius: 8 }}><Text
            style={{ color: "#000", fontSize: 18 }}
          >Continue</Text></Pressable></View>
        }
      </View>
    </View>
    <Text>Test watch workout screen</Text>
  </View>);
};

export default Workout;
