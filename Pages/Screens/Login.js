import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("null");
  const [password, setPassword] = useState("null");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //navigation.replace("Tabs");
      }
    });    
  },[]);

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("User login Suessfully");
        navigation.navigate("Tabs");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
  const resetPassword = () => {
    if (email != null) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("Password reset email has been sent successfully");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }
    else {
      alert("please enter a valid email");
    }
  }
  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require("./assets/log2.png")} /> */}

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.forgot_button}
        onPress={() => resetPassword()}>
        <Text>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}
        onPress={() => login()}>
        <Text style={styles.loginText}>LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});
