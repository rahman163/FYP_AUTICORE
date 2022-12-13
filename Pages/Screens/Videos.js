import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';
import { Video } from 'expo-av'; //npx expo install expo-av
import React from 'react';

export default function Videos() {
  const video = React.useRef(null);
  //const secondVideo = React.useRef(null);
  const [status, setStatus] = React.useState({});
  //const [statusSecondVideo, setStatusSecondVideo] = React.useState({});

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require("../Videos/Video.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttons}>
        <Button title="Play" onPress={() => video.current.playFromPositionAsync(0)} />
        <Button title={status.isLooping ? "Set to not loop" : "Set to loop"} onPress={() => video.current.setIsLoopingAsync(!status.isLooping)} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    flex: 1,
    alignSelf: 'stretch',
    width: 400,
    height: 100,
    marginTop: 20,
    marginBottom: 0,
  },
  buttons: {
    paddingBottom: 30,
    marginTop: 20,
  }
});