import { StyleSheet, View, ScrollView } from "react-native";
import { PaperProvider, Text } from "react-native-paper";
import Header from "./Header";
import Footer from "./Footer";


export default function Login() {
  return (
    <PaperProvider>
      <ScrollView>
        <View style={styles.login}>
          <Header />
          <Text>Login</Text>
          <Footer />
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  login: {},
});
