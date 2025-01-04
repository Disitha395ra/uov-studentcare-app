import { StyleSheet, View, ScrollView } from "react-native";
import { PaperProvider, Text,TextInput , Button } from "react-native-paper";
import Header from "./Header";
import Logo from "./Logo";
import Footer from "./Footer";
import React from "react";


export default function Login() {

  const [text, setText] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <PaperProvider>
      <ScrollView>
        <View style={styles.login}>
          <Header />
          <Logo />
          <Text style={styles.logintext}>Student Login</Text>
          <TextInput
            label="Username"
            value={text}
            onChangeText={text => setText(text)}
            style={styles.TextInput}
          />
          <TextInput
            label="password"
            value={password}
            onChangeText={password => setText(password)}
            style={styles.TextInput}
          />
          <Button icon="arrow-right-circle" mode="contained" onPress={() => console.log('Pressed')}
            style={styles.loginbutton}>
            Login Here 
          </Button>
          <Footer />
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  logintext: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 60,
    paddingBottom:20,
  },
  TextInput:{
    margin:20,
  },
  loginbutton:{
    backgroundColor:"#8b008b",
    margin:20,
    paddingTop:10,
    alignItems:"center",
    paddingBottom:10,
  }
});
