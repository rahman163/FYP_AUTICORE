import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from "react-native";
import { Audio } from "expo-av"; //npx expo install expo-av

export default function Music() {
  playSound = async (url) => {
    await Audio.setIsEnabledAsync(true);
    await Audio.Sound.createAsync({ uri: url }, { shouldPlay: true });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../Images/Logo/P2.png")}
        resizeMode="cover"
        style={{ flex: 1 }}>
        <View style={{ flex: 0.4 }}>
        </View>
        <TouchableOpacity
          style={[styles.buttonDesign, { marginTop: 15, },]}
          onPress={() => {
            var url = "https://cdn.glitch.global/1e4b9673-7b94-436b-87b3-17eb95c260ee/AtoZ.mp3?v=1670777527928";
            playSound(url);
          }}>
          <Image style={styles.Button} source={require("../Images/Icons/button.png")} />
          <Text style={styles.buttonText}>A to Z Song</Text>
        </TouchableOpacity>

        <View style={{ flex: 0.2 }}>
          <TouchableOpacity
            style={[styles.buttonDesign, { marginTop: -20 }]}
            onPress={() => {
              Audio.setIsEnabledAsync(false);
            }}>
            <Image style={styles.Button} source={require("../Images/Icons/button.png")} />
            <Text style={styles.buttonText}>Stop Song</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#915fa0",
  },
  textDesign: {
    color: "white",
    backgroundColor: "#81d8d0",
    borderWidth: 5,
    borderColor: "white",
    borderRadius: 30,
    fontSize: 30,
    overflow: "hidden",
    textAlign: "center",
    width: "75%",
    height: 60,
    //fontFamily: "Papyrus",
    marginTop: -120,
    alignSelf: "center",
  },
  buttonDesign: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 200,
    marginTop: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 28,
    textAlign: "center",
    //fontFamily: "Papyrus",
    marginTop: -90,
  },
  Button: {
    height: 150,
    width: 200,
  }
});