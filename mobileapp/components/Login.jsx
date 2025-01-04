import { StyleSheet, View, ScrollView } from "react-native";
import { PaperProvider, Text } from "react-native-paper";
import Header from "./Header";
import Logo from "./Logo";
import Footer from "./Footer";


export default function Login() {
  return (
    <PaperProvider>
      <ScrollView>
        <View style={styles.login}>
          <Header />
          <Logo />
          <Text style={styles.logintext}>Login</Text>
          <Footer />
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  logintext: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  }
});
