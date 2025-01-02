import { StyleSheet,View } from "react-native"
import { PaperProvider, Text, TextInput, Button } from "react-native-paper";
import React, { useState } from "react";



export default function Login(){
    const [username, password] = useState("");
    
    return (
      <View style={styles.login}>
        <PaperProvider>
          <TextInput
            mode="outlined"
            label="Enter username"
            placeholder="username"
            right={<TextInput.Affix text="/100" />}
            style={styles.textinput}
          />
          <TextInput
            mode="outlined"
            label="Enter password"
            placeholder="password"
            right={<TextInput.Affix text="/100" />}
            style={styles.textinput}
          />
          <Button
            mode="contained"
            onPress={() => console.log("Pressed")}
            style={styles.buttonlogin}
          >
            Login Here
          </Button>
        </PaperProvider>
      </View>
    );
}

const styles = StyleSheet.create({
  login: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonlogin: {
    backgroundColor: "#8b008b",
    marginTop: 20,
  },
  textinput:{
    marginTop: 20,
    width:300,
    justifyContent: "center",
  }
});